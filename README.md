
# Api-Polling-System
## Description
This project is a web-based application developed to enable users to create questions with multiple options and allows them to add votes using APIs. [here]( https://polling-api-cn.onrender.com) is hosted API's endpoint.
Video link is [here](https://youtu.be/GS_EVc-fHVE)
## Tech stack
   nodeJS, expressJS, mongoDB,



## How to setup the project on local system
  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory by : Using
  ```
  cd ppi-polling-system
  ```

  After reaching to the this preoject directory yo have to run this following command :
  ```
  $ npm install
  $ nodemon index.js or npm start
  ```
   ## Screenshots

 ![Screenshot 1](https://github.com/ashish88pal/polling_api_CN/blob/aa122dc3b333496375ac6877aeb508d3e9ad7592/screenshots/createOption.png?raw=true)
  ![Screenshot 2](https://github.com/ashish88pal/polling_api_CN/blob/aa122dc3b333496375ac6877aeb508d3e9ad7592/screenshots/createQuestion.png?raw=true)
   ![Screenshot 3](https://github.com/ashish88pal/polling_api_CN/blob/aa122dc3b333496375ac6877aeb508d3e9ad7592/screenshots/deleteOption.png?raw=true)
    ![Screenshot 4](https://github.com/ashish88pal/polling_api_CN/blob/aa122dc3b333496375ac6877aeb508d3e9ad7592/screenshots/deleteQuestion.png?raw=true)
     ![Screenshot 5](https://github.com/ashish88pal/polling_api_CN/blob/aa122dc3b333496375ac6877aeb508d3e9ad7592/screenshots/getAllQuestions.png?raw=true)
      ![Screenshot 6](https://github.com/ashish88pal/polling_api_CN/blob/aa122dc3b333496375ac6877aeb508d3e9ad7592/screenshots/vote.png?raw=true)
















  ## Folder Structure
```bash
polling-api
|   index.js
|   package-lock.json
|   package.json
|   README.md
|
+---config
|       mongoose.js
|
+---controllers
|   \---api
|       \---v1
|               options_api.js
|               questions_api.js
|
+---models
|       option.js
|       question.js
|
+---routes
|   |   index.js
|   |
|   \---api
|       |   index.js
|       |
|       \---v1
|               index.js
|               options.js
|               questions.js
|
\---screenshots
```