const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MondaySpecialsSchema = new Schema({
    mondayFoodSpecialHeading: String,
    mondayFoodSpecialDescription: String,
    mondayDrinkSpecialHeading: String,
    mondayDrinkSpecialDescription: String
})

const MondaySpecials = mongoose.model("MondaySpecials", MondaySpecialsSchema)

module.exports = MondaySpecials;