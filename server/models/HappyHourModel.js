const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HappyHourSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    time: String,
    foodSpecial1Heading: String,
    foodSpecial1Description: String,
    // foodSpecial3: String,
    // foodSpecial4: String,
    // foodSpecial5: String,
    drinkSpecial1Heading: String,
    // drinkSpecial2: String,
    // drinkSpecial3: String,
    // drinkSpecial4: String,
    // drinkSpecial5: String,
    // drinkSpecial6: String,
    // drinkSpecial7: String,
    // drinkSpecial8: String,
    // drinkSpecial9: String,
    drinkSpecial1Description: String
})

const HappyHour = mongoose.model("HappyHour", HappyHourSchema)

module.exports = HappyHour;