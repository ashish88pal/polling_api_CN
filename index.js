const express = require("express");
const db = require("./config/mongoose");
const port = 8000;
const app = express();

// middle for parse form data
app.use(express.urlencoded({ extended: true }));

// Calling the express.json() method for parsing
app.use(express.json());

// use express router
app.use("/", require("./routes"));

// Listening to the portv 
app.listen(port, (err) => {
  if (err) {
    console.log(`Error while Running the Express Server: ${err}`);
    return;
  }

  console.log(`Express Server is running on port: ${port}`);
});
