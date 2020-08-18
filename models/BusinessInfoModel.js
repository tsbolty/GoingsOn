const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BusinessInfoSchema = new Schema({
    businessName: String,
    businessAddress: String,
    businessType: String
})

const BusinessInfo = mongoose.model("BusinessInfo", BusinessInfoSchema)

module.exports = BusinessInfo;