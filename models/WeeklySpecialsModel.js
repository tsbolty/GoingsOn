const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeeklySpecialSchema = new Schema({
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String
})

const WeeklySpecial = mongoose.model("WeeklySpecial", WeeklySpecialSchema);

module.exports = WeeklySpecial;