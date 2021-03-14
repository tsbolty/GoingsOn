const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeeklySpecialsSchema = new Schema({
    email: {
        type: String,
    },
    monday: {
      foodSpecialHeading: String,
      foodSpecialDescription: String,
      drinkSpecialHeading: String,
      drinkSpecialDescription: String
    },
    tuesday: {
      foodSpecialHeading: String,
      foodSpecialDescription: String,
      drinkSpecialHeading: String,
      drinkSpecialDescription: String
    },
    wednesday: {
      foodSpecialHeading: String,
      foodSpecialDescription: String,
      drinkSpecialHeading: String,
      drinkSpecialDescription: String
    },
    thursday: {
      foodSpecialHeading: String,
      foodSpecialDescription: String,
      drinkSpecialHeading: String,
      drinkSpecialDescription: String
    },
    friday: {
      foodSpecialHeading: String,
      foodSpecialDescription: String,
      drinkSpecialHeading: String,
      drinkSpecialDescription: String
    },
    saturday: {
      foodSpecialHeading: String,
      foodSpecialDescription: String,
      drinkSpecialHeading: String,
      drinkSpecialDescription: String
    },
    sunday: {
      foodSpecialHeading: String,
      foodSpecialDescription: String,
      drinkSpecialHeading: String,
      drinkSpecialDescription: String
    }
})

const WeeklySpecials = mongoose.model("WeeklySpecials", WeeklySpecialsSchema);

module.exports = WeeklySpecials;