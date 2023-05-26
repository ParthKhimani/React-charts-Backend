const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/router");

const app = express();
const MONGO_URI =
  "mongodb+srv://parth:P%40rth2005@cluster0.eixcpta.mongodb.net/FinalExam?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Method",
    "GET,PUT,POST,PATCH,DELETE,OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(router);
mongoose.set("strictQuery", true);
mongoose
  .connect(MONGO_URI)
  .then((result) => {
    app.listen(3434);
    console.log("connected!");
  })
  .catch((err) => console.log(err));
