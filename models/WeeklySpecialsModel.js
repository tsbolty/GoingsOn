const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeeklySpecialsSchema = new Schema({
    email: {
        type: String,
    },
    mondayFoodSpecialHeading: String,
    mondayFoodSpecialDescription: String,
    mondayDrinkSpecialHeading: String,
    mondayDrinkSpecialDescription: String,
    tuesdayFoodSpecialHeading: String,
    tuesdayFoodSpecialDescription: String,
    tuesdayDrinkSpecialHeading: String,
    tuesdayDrinkSpecialDescription: String,
    wednesdayFoodSpecialHeading: String,
    wednesdayFoodSpecialDescription: String,
    wednesdayDrinkSpecialHeading: String,
    wednesdayDrinkSpecialDescription: String,
    thursdayFoodSpecialHeading: String,
    thursdayFoodSpecialDescription: String,
    thursdayDrinkSpecialHeading: String,
    thursdayDrinkSpecialDescription: String,
    fridayFoodSpecialHeading: String,
    fridayFoodSpecialDescription: String,
    fridayDrinkSpecialHeading: String,
    fridayDrinkSpecialDescription: String,
    saturdayFoodSpecialHeading: String,
    saturdayFoodSpecialDescription: String,
    saturdayDrinkSpecialHeading: String,
    saturdayDrinkSpecialDescription: String,
    sundayFoodSpecialHeading: String,
    sundayFoodSpecialDescription: String,
    sundayDrinkSpecialHeading: String,
    sundayDrinkSpecialDescription: String
})

const WeeklySpecials = mongoose.model("WeeklySpecials", WeeklySpecialsSchema);

module.exports = WeeklySpecials;