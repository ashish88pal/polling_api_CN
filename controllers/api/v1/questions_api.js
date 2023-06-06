// import models
const Question = require("../../../models/question");
const Option = require("../../../models/option");

/*
Route           /questions/create
Description 	Create a question (you can add as many questions as you want)
Access          PUBLIC
Methods         POST
*/
// http://localhost:3000/api/v1/questions/create
module.exports.createQuestion = async (req, res) => {
  try {
    req.body.forEach(async (element) => {
      await Question.create({ title: element });
    });

    if (req.body.length !== 0) {
      // response 200 indicates sucess response it question is created
      return res.status(200).json({
        success: true,
        message: "New Question Created Successfully!!",
      });
    } else {
      // response 500 indicates internal server error
      return res.status(500).json({
        success: false,
        message: "At least one question is required",
      });
    }
  } catch (err) {
    console.log("Error while creating question", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error in Creating a Question!",
    });
  }
};

/*
Route          /questions/id/options/create
Description    Add options to a question
Access         PUBLIC
Parameter      id
Methods        POST
*/
// http://localhost:8000/api/v1/questions/id/options/create
module.exports.createOption = async (req, res) => {
  try {
    // Check if Question exists or not
    let question = await Question.findById(req.params.id);

    if (question != null) {
      // create an option

      let option = await Option.create({
        question: req.params.id,
        text: req.body.text,
        votes: 0,
      });

      option.link_to_vote =
        "http://localhost:8000/api/v1/options/" + option._id + "/addVote";

      option.save();

      question.options.push(option);
      question.save();

      return res.status(200).json({
        success: true,
        option,
        message: "New Option Created Successfully!!",
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "No question of this id is available",
      });
    }
  } catch (err) {
    console.log("error while creating option", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error While Creating an Option!",
    });
  }
};

/*
Route          /questions
Description    To view a question and it’s options
Access         PUBLIC
Parameter      id
Methods        GET
*/
// http://localhost:8000/api/v1/questions/id
module.exports.viewQuestion = async (req, res) => {
  try {
    let displayQuestion = await Question.findById(req.params.id).populate(
      "options"
    );

    if (displayQuestion) {
      return res.status(200).json({
        success: true,
        questionDisplayed: displayQuestion,
        message: "Question displayed successfully!!",
      });
    }
  } catch (err) {
    console.log("Error while Viewing Questions", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error while viewing Question!",
    });
  }
};

/*
Route          /questions
Description    To view all question and it’s options
Access         PUBLIC
Parameter      id
Methods        GET
*/
// http://localhost:8000/api/v1/questions/
module.exports.viewAllQuestion = async (req, res) => {
  try {
    let displayQuestion = await Question.find().populate("options");

    if (displayQuestion) {
      return res.status(200).json({
        success: true,
        allQuestions: displayQuestion,
        message: "Question displayed successfully!!",
      });
    }
  } catch (err) {
    console.log("Error while Viewing Questions", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error while viewing Question!",
    });
  }
};

/*
Route          /questions/id/delete
Description    To delete a question
Access         PUBLIC
Parameter      id
Methods        DELETE
*/
// http://localhost:8000/api/v1/questions/id/delete
module.exports.deleteQuestion = async (req, res) => {
  try {
    let id = req.params.id;

    let question = await Question.findById(id).populate({
      path: "options",
      select: "votes",
    });

    if (question) {
      // checking if any option has some votes already
      let options = question.options;

      for (let i = 0; i < options.length; i++) {
        if (options[i].votes > 0) {
          return res.status(404).json({
            message:
              "Question cannot be deleted, it's options are voted already !",
          });
        }
      }

      // if no any votes on any option of question
      await Option.deleteMany({ question: id });
      await Question.findByIdAndDelete(id);

      return res.status(200).json({
        success: true,
        message: "Question deleted Successfully!!",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Question not found!",
      });
    }
  } catch (err) {
    console.log("Error while deleting question!", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error in Deleting Question!",
    });
  }
};
