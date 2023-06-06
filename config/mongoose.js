// Import the mongoose module
const mongoose = require("mongoose");
//Set up default mongoose connection
module.exports = mongoose
  .connect(
    "mongodb+srv://ashish:ashish@cluster0.tpogm5u.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB CONNECTION ESTABLISHED"));
