const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  dob: Date,
  no_of_companies: Number,
  status: String,
  created_at:Date,
  updated_at:Date
});

module.exports = mongoose.model("User", usersSchema);
