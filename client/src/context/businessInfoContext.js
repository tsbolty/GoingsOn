import { createContext } from "react";

const BusinessInfoContext = createContext([
	{
		_id: "",
		email: "",
		businessName: "",
		businessAddress: "",
		businessType: "",
		businessHeadline: "",
		mapsLink: "",
		weeklySpecials: {
			monday: {
				foodSpecialHeading: "",
				foodSpecialDescription: "",
				drinkSpecialHeading: "",
				drinkSpecialDescription: ""
			},
			tuesday: {
				foodSpecialHeading: "",
				foodSpecialDescription: "",
				drinkSpecialHeading: "",
				drinkSpecialDescription: ""
			},
			wednesday: {
				foodSpecialHeading: "",
				foodSpecialDescription: "",
				drinkSpecialHeading: "",
				drinkSpecialDescription: ""
			},
			thursday: {
				foodSpecialHeading: "",
				foodSpecialDescription: "",
				drinkSpecialHeading: "",
				drinkSpecialDescription: ""
			},
			friday: {
				foodSpecialHeading: "",
				foodSpecialDescription: "",
				drinkSpecialHeading: "",
				drinkSpecialDescription: ""
			},
			saturday: {
				foodSpecialHeading: "",
				foodSpecialDescription: "",
				drinkSpecialHeading: "",
				drinkSpecialDescription: ""
			},
			sunday: {
				foodSpecialHeading: "",
				foodSpecialDescription: "",
				drinkSpecialHeading: "",
				drinkSpecialDescription: ""
			}
		},
		specialEvents: []
	}
]);

export default BusinessInfoContext;
