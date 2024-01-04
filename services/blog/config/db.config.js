const { default: mongoose } = require("mongoose");
const dbUrl = "mongodb://127.0.0.1:27017/gRPC"
module.exports = mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });
