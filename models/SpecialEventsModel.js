const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpecialEventSchema = new Schema({
	email: String,
	eventDate: String,
	headline: String,
	description: String,
	cost: Number
});

const SpecialEvents = mongoose.model("SpecialEvents", SpecialEventSchema);

module.exports = SpecialEvents;
