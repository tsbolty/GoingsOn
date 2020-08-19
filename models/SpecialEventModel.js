const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpecialEventSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    date: String,
    title: String,
    description: String,
    //image
})

const SpecialEvent = mongoose.model("SpecialEvent", SpecialEventSchema);

module.exports = SpecialEvent;