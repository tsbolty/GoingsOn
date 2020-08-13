const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HappyHourSchema = new Schema({
    time: String,
    foodSpecialHeading: String,
    foodSpecialDescription: String,
    // foodSpecial3: String,
    // foodSpecial4: String,
    // foodSpecial5: String,
    drinkSpecialHeading: String,
    // drinkSpecial2: String,
    // drinkSpecial3: String,
    // drinkSpecial4: String,
    // drinkSpecial5: String,
    // drinkSpecial6: String,
    // drinkSpecial7: String,
    // drinkSpecial8: String,
    // drinkSpecial9: String,
    drinkSpecialDescription: String
})

const HappyHour = mongoose.model("HappyHour", HappyHourSchema)

module.exports = HappyHour;