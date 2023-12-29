const { default: mongoose } = require("mongoose");

module.exports = mongoose
  .connect("mongodb://localhost:27017/gRPC")
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });
