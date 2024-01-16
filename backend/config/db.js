const mongoose = require("mongoose");

const connection = mongoose
  .createConnection("mongodb+srv://1:klhg9YoJdPYPJl9O@cluster0.msm6jkh.mongodb.net/zennmind")
  .on("open", () => {
    console.log("connected to db");
  })
  .on("error", (error) => {
    console.log(error);
  });

module.exports = connection;
