const express = require("express");
const app = express();
var bodyParser = require("body-parser");
// var cors = require("cors");
// const multer = require('multer');
const dbConnection = require("./dbConfig");

const router = require("./Routes/index");

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST','UPDATE', 'DELETE'],
//   credentials: true // If you need to send cookies, sessions, or authorization headers
// }));

// app.options('*', cors());

// Example of Express.js middleware to set CSP headers
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'none'; script-src 'self' https://vercel.live; style-src 'self';");
  next();
});

app.use(router);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  dbConnection();
});
