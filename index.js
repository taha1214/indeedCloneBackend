const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
// const multer = require('multer');
const dbConnection = require("./dbConfig");

const router = require("./Routes/index");

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(cors({
  origin: 'http://localhost:3000',  // Allow your frontend origin
  credentials: true,  // If you're using cookies or authentication headers
}));

app.use(router);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  dbConnection();
});
