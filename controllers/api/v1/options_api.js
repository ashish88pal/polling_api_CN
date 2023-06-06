// import models
const Question = require("../../../models/question");
const Option = require("../../../models/option");

/*
Route           /options/id/addVote
Description 	To increment the count of votes
Access          PUBLIC
Parameter       id
Methods         POST
*/
// http://localhost:3000/api/v1/options/:id/addVote
module.exports.addVote = async (req, res) => {
  try {
    let id = req.params.id;

    // check if the option exists for the question, add a new vote by incrementing 1
    await Option.findByIdAndUpdate(id, { $inc: { votes: 1 } });

    return res.status(200).json({
      success: true,
      message: "Voted Successfully!!",
    });
  } catch (err) {
    console.log("Error In Adding Vote", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error In Adding Vote!",
    });
  }
};

/*
Route           /options/id/delete
Description 	To delete an option
Access          PUBLIC
Parameter       id
Methods         DELETE
*/
// http://localhost:3000/api/v1/options/:id/delete
module.exports.deleteOption = async (req, res) => {
  try {
    let id = req.params.id;

    // Checking if option exists
    let option = await Option.findById(id);

    // Checking if number of votes are > 0, if true an option will be deleted

    if (option.votes > 0) {
      return res.status(400).json({
        success: false,
        message: "Option cannot be deleted, count of votes > 0!",
      });
    }

    // deleting option from question.options array first
    await Question.findByIdAndUpdate(option.question, {
      $pull: { options: id },
    });

    // Now deleting the option from the db
    await Option.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Option Deleted Successfully!!",
    });
  } catch (err) {
    console.log("Error in deleting Option", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error in deleting Option!",
    });
  }
};
