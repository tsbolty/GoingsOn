const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestSchema = new Schema({
  title: String,
  body: String
});

const Test = mongoose.model("Test", TestSchema);

module.exports = Test;