const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BusinessInfoSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    businessName: String,
    businessAddress: String,
    businessType: String
})

const BusinessInfo = mongoose.model("BusinessInfo", BusinessInfoSchema, "businessesinfo")

module.exports = BusinessInfo;