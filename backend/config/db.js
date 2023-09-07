const mongoose = require("mongoose");

const connection = mongoose
  .createConnection("mongodb://localhost:27017/zennmind")
  .on("open", () => {
    console.log("connected to db");
  })
  .on("error", (error) => {
    console.log(error);
  });

module.exports = connection;
