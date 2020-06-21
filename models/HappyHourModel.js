const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HappyHourSchema = new Schema({
    time: String,
    foodSpecial1: String,
    foodSpecial2: String,
    foodSpecial3: String,
    foodSpecial4: String,
    foodSpecial5: String,
    drinkSpecial1: String,
    drinkSpecial2: String,
    drinkSpecial3: String,
    drinkSpecial4: String,
    drinkSpecial5: String,
    drinkSpecial6: String,
    drinkSpecial7: String,
    drinkSpecial8: String,
    drinkSpecial9: String,
    drinkSpecial10: String
})

const HappyHour = mongoose.model("HappyHour", HappyHourSchema)

module.exports = HappyHour;