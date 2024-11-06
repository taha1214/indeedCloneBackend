const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect("mongodb+srv://tahaali3035:indeed12345@cluster0.iqofm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log("Error in DB connection", err);
    });
};
