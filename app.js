const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./helpers/db.connect");

require("dotenv").config();

const port = process.env.PORT || 7171;

dbConnect;

const indexRouter = require("./routes/index");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", indexRouter);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

module.exports = app;
