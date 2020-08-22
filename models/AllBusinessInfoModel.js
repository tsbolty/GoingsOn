const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AllBusinessInfoSchema = new Schema({
    email: {
        type: String
    },
    businessName: String,
    businessAddress: String,
    businessType: String,
    daySpecials: [
        {
            type: Schema.Types.ObjectId,
            ref: "DaySpecials"
        }
    ],
    weeklySpecials: [
        {
            type: Schema.Types.ObjectId,
            ref: "WeeklySpecials"
        }
    ]
})

const AllBusinessInfo = mongoose.model("AllBusinessInfo", AllBusinessInfoSchema)

module.exports = AllBusinessInfo;