const mongoose = require("mongoose");
require("dotenv").config();

module.exports = mongoose
  .connect(`${process.env.MONGODB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Success Database Connect");
  })
  .catch((err) => {
    console.log("Database Connect Error ", err);
    process.exit();
  });
