const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AllBusinessInfoSchema = new Schema({
	email: {
		type: String,
		unique: true
	},
	businessName: String,
	businessAddress: String,
	businessType: String,
	businessHeadline: String,
	mapsLink: String,
	daySpecials: {
		type: Object
	},
	// {
	//     type: Schema.Types.ObjectId,
	//     ref: "DaySpecials"
	// }

	weeklySpecials: {
		type: Object
	}
	// {
	//     type: Schema.Types.ObjectId,
	//     ref: "WeeklySpecials"
	// }
});

const AllBusinessInfo = mongoose.model(
	"AllBusinessInfo",
	AllBusinessInfoSchema
);

module.exports = AllBusinessInfo;
