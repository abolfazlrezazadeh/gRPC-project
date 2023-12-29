const { default: mongoose } = require("mongoose");

module.exports = mongoose
  .connect("mongodb://127.0.0.1:27017/gRPC")
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });
