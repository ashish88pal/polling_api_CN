
# Api-Polling-System
## Description
This project is a web-based application developed to enable users to create questions with multiple options and allows them to add votes using APIs.

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

 ![Screenshot 1](https://github.com/ashish88pal/csvUploadCN/blob/f96dd66bf424a60ab828597ea3ccfb61f1de9e03/screenshots/ss1.png?raw=true)

  ![Screenshot 2](https://github.com/ashish88pal/csvUploadCN/blob/f96dd66bf424a60ab828597ea3ccfb61f1de9e03/screenshots/ss2.png?raw=true)


  ![Screenshot 3](https://github.com/ashish88pal/csvUploadCN/blob/f96dd66bf424a60ab828597ea3ccfb61f1de9e03/screenshots/ss3.png?raw=true)













  ## Folder Structure
```bash
CSV_UPLOAD
|   .gitignore
|   index.js
|   package-lock.json
|   package.json
|   README.md
|
+---assets
|   +---css
|   |       file_viewer.css
|   |       header.css
|   |       home.css
|   |
|   +---images
|   |       bored.png
|   |       logo.png
|   |
|   \---js
|           file_viewer.js
|           home.js
|
+---config
|       mongoose.js
|
+---controllers
|       file_controller.js
|       home_controller.js
|
+---models
|       csv.js
|
+---routes
|       index.js
|
+---screenshots
|       ss1.png
|       ss2.png
|       ss3.png
|
+---uploads
|   \---files
|
\---views
        file_viewer.ejs
        home.ejs
        layout.ejs
```