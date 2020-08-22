const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const DaySpecialsSchema = new Schema({
    email: String,
    day: String,
    foodSpecialHeading: String,
    foodSpecialDescription: String,
    drinkSpecialHeading: String,
    drinkSpecialDescription: String
})

const DaySpecials = mongoose.model("DaySpecials", DaySpecialsSchema)

module.exports = DaySpecials;