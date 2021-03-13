let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/GoingsOn", {
	useNewUrlParser: true,
	useFindAndModify: false
});

let allBusinessInfoSeed = [
	{
		email: "tylerbolty@gmail.com",
		businessName: "Tyler's Bar & Grill",
		businessAddress: "2325 W 90th St, Minneapolis, MN 55431",
		businessType: "restaurant",
		businessHeadline: "Best Gyros in town!",
		mapsLink:
			"https://www.google.com/maps/search/?api=1&query=2325w90thst,minneapolis,mn55431",
		daySpecials: [],
		weeklySpecials: {
			monday: {
				foodSpecialHeading: "Burger Night",
				foodSpecialDescription: "$2 burgers 5 - 10 PM",
				drinkSpecialHeading: "Craft Beer Night",
				drinkSpecialDescription: "$2 pints"
			},
			tuesday: {
				foodSpecialHeading: "Taco Tuesday",
				foodSpecialDescription: "$1 tacos",
				drinkSpecialHeading: "Margarita Night",
				drinkSpecialDescription: "$5 margaritas"
			},
			wednesday: {
				foodSpecialHeading: "Wednesday Fish Fry",
				foodSpecialDescription: "delicious catfish dinner",
				drinkSpecialHeading: "Half Priced Bottles of Wine",
				drinkSpecialDescription: "nuff said"
			},
			thursday: {
				foodSpecialHeading: "All You Can Eat Wings",
				foodSpecialDescription: "$10",
				drinkSpecialHeading: "IPA Special",
				drinkSpecialDescription: "$4 craft IPA's"
			},
			friday: {
				foodSpecialHeading: "Prime Rib Night",
				foodSpecialDescription: "20oz prime rib",
				drinkSpecialHeading: "$2 You-Call-It's",
				drinkSpecialDescription: "10PM - Midnight"
			},
			saturday: {
				foodSpecialHeading: "Poutine",
				foodSpecialDescription: "$5 poutine",
				drinkSpecialHeading: "$2 You-Call-It's",
				drinkSpecialDescription: "10PM - Midnight"
			},
			sunday: {
				foodSpecialHeading: "Bottomless Brunch",
				foodSpecialDescription: "$20 per person",
				drinkSpecialHeading: "Bottomless Mimosas",
				drinkSpecialDescription: "$10 per person"
			}
		}
	},
	{
		email: "tsbolty@gmail.com",
		businessName: "Senser's Bar",
		businessAddress: "4217 American Blvd W, Bloomington, MN 55437",
		businessType: "bar",
		businessHeadline: "Best Sports Bar Ever",
		mapsLink:
			"https://www.google.com/maps/search/?api=1&query=4217americanblvdw,bloomington,mn55437",
		daySpecials: [],
		weeklySpecials: {
			monday: {
				foodSpecialHeading: "Jalapeno Poppers",
				foodSpecialDescription: "$5 orders of jalapeno poppers",
				drinkSpecialHeading: "Domestic drafts",
				drinkSpecialDescription: "$2 pints"
			},
			tuesday: {
				foodSpecialHeading: "Taco Bar",
				foodSpecialDescription: "Build your own tacos",
				drinkSpecialHeading: "Top Shelf Tequila",
				drinkSpecialDescription: "$5 top shelf tequila"
			},
			wednesday: {
				foodSpecialHeading: "Pretzels",
				foodSpecialDescription: "$5 pub pretzels",
				drinkSpecialHeading: "3 Bottles of Wine For $50",
				drinkSpecialDescription: "nuff said"
			},
			thursday: {
				foodSpecialHeading: "Bottomless Bucket of Wings",
				foodSpecialDescription: "$10",
				drinkSpecialHeading: "IPA Special",
				drinkSpecialDescription: "$4 craft IPA pints"
			},
			friday: {
				foodSpecialHeading: "Half Priced Apps",
				foodSpecialDescription: "All apps 50% off",
				drinkSpecialHeading: "$2 You-Call-It's",
				drinkSpecialDescription: "10PM - Midnight"
			},
			saturday: {
				foodSpecialHeading: "Breakfast Bar",
				foodSpecialDescription: "Select breakfast items sold all day",
				drinkSpecialHeading: "$2 You-Call-It's",
				drinkSpecialDescription: "10PM - Midnight"
			},
			sunday: {
				foodSpecialHeading: "Brunch Bar",
				foodSpecialDescription: "$15 per person",
				drinkSpecialHeading: "Service Industry Night",
				drinkSpecialDescription: "Half priced drinks for service industry"
			}
		}
	},
	{
		email: "tylerbolty@hotmail.com",
		businessName: "Bonfire",
		businessAddress: "1555 Cliff Rd, Eagan, MN 55122",
		businessType: "restaurant",
		businessHeadline: "Woodfire Cooking",
		mapsLink:
			"https://www.google.com/maps/search/?api=1&query=1555cliffrd,eagan,mn55122",
		daySpecials: [],
		weeklySpecials: {
			monday: {
				foodSpecialHeading: "Bull Bites",
				foodSpecialDescription: "$5 bull bites",
				drinkSpecialHeading: "Martini Monday",
				drinkSpecialDescription: "$5 martinis"
			},
			tuesday: {
				foodSpecialHeading: "Bontons",
				foodSpecialDescription: "buffalo chicken wontons",
				drinkSpecialHeading: "Old Fashioned",
				drinkSpecialDescription: "$5 Woodford Old Fashioned"
			},
			wednesday: {
				foodSpecialHeading: "Wednesday Fish Fry",
				foodSpecialDescription: "delicious catfish dinner",
				drinkSpecialHeading: "Craft Beer Night",
				drinkSpecialDescription: "$4 pints of any craft beer"
			},
			thursday: {
				foodSpecialHeading: "Wing Night",
				foodSpecialDescription: "$10 all you can eat wings",
				drinkSpecialHeading: "Craft Cocktails",
				drinkSpecialDescription: "$5 craft cocktails"
			},
			friday: {
				foodSpecialHeading: "Burger And A Beer",
				foodSpecialDescription: "$10 burger and a beer",
				drinkSpecialHeading: "Jack Daniels",
				drinkSpecialDescription: "$2 Jack Daniels"
			},
			saturday: {
				foodSpecialHeading: "Woodfired Pizzas",
				foodSpecialDescription: "Any pizza 50% off",
				drinkSpecialHeading: "BOGO",
				drinkSpecialDescription: "BOGO all drinks!"
			},
			sunday: {
				foodSpecialHeading: "Brunch Buffet",
				foodSpecialDescription: "$25 per person",
				drinkSpecialHeading: "Sangria",
				drinkSpecialDescription: "$5 homemade sangria"
			}
		}
	},
	{
		email: "randy@birdcall.com",
		businessName: "Birdcall",
		businessAddress: "1535 E Evans Ave, Denver, CO 80210",
		businessType: "restaurant",
		businessHeadline: "Really Good Chicken Sandwiches",
		mapsLink:
			"https://www.google.com/maps/search/?api=1&query=1535eevansave,denver,co80210",
		daySpecials: [],
		weeklySpecials: {
			monday: {
				foodSpecialHeading: "Military Appreciation Day",
				foodSpecialDescription: "50% off for veterans and military",
				drinkSpecialHeading: "Free Drink Size Upgrade",
				drinkSpecialDescription: "No cost to upgrade your drink size"
			},
			tuesday: {
				foodSpecialHeading: "10% Off All Salads",
				foodSpecialDescription: "Any salad on the menu is 10% off",
				drinkSpecialHeading: "Bottled Juice",
				drinkSpecialDescription: "New bottled juice flavor every tuesday"
			},
			wednesday: {
				foodSpecialHeading: "Kids Eat Free",
				foodSpecialDescription: "Free kids meal with purchase of an entree",
				drinkSpecialHeading: "Half Priced Shakes",
				drinkSpecialDescription: "All shakes 50% off"
			},
			thursday: {
				foodSpecialHeading: "BOGO Nashville Hot",
				foodSpecialDescription: "Buy one Nashville Hot sandwich get one free",
				drinkSpecialHeading: "Craft Cocktails",
				drinkSpecialDescription: "$5 craft cocktails"
			},
			friday: {
				foodSpecialHeading: "Free French Fries",
				foodSpecialDescription: "Free french fries with purchase of a sandwich",
				drinkSpecialHeading: "$3 Glasses of Wine",
				drinkSpecialDescription: "All house wine"
			},
			saturday: {
				foodSpecialHeading: "BOGO Desserts",
				foodSpecialDescription: "Take a dessert home with you",
				drinkSpecialHeading: "$2 Beer",
				drinkSpecialDescription: "All bottles of beer are $2"
			},
			sunday: {
				foodSpecialHeading: "Triple Threat",
				foodSpecialDescription: "$3 off the Triple Threat sandwich",
				drinkSpecialHeading: "Organic Tea",
				drinkSpecialDescription: "$1 organic tea's"
			}
		}
	},
	{
		email: "andy@haciendacolorado.com",
		businessName: "Hacienda Colorado",
		businessAddress: "4100 E Mexico Ave, Denver, CO 80222",
		businessType: "both",
		businessHeadline: "Amazing Mexican Food",
		mapsLink:
			"https://www.google.com/maps/search/?api=1&query=4100emexicoave,denver,co80222",
		daySpecials: [],
		weeklySpecials: {
			monday: {
				foodSpecialHeading: "$2 Fish Tacos",
				foodSpecialDescription: "Minimum order of 3",
				drinkSpecialHeading: "Half Priced Bottles of Wine",
				drinkSpecialDescription: "All bottles of wine are half priced"
			},
			tuesday: {
				foodSpecialHeading: "Taco Tuesday",
				foodSpecialDescription: "$2 tacos!!!",
				drinkSpecialHeading: "$3 Tequila",
				drinkSpecialDescription: "$3 house tequila ($4 for margarita)"
			},
			wednesday: {
				foodSpecialHeading: "Kids Eat Free",
				foodSpecialDescription: "Free kids meal with purchase of an entree",
				drinkSpecialHeading: "Half Priced NA Beer",
				drinkSpecialDescription: "All NA Beer 50% off"
			},
			thursday: {
				foodSpecialHeading: "Steak And Shrimp",
				foodSpecialDescription: "Free shrimp with any steak order",
				drinkSpecialHeading: "Perfect Patron",
				drinkSpecialDescription: "Best Patron margarita you've ever had"
			},
			friday: {
				foodSpecialHeading: "Guacamole",
				foodSpecialDescription: "Make your own guacamole",
				drinkSpecialHeading: "$2 Off All Drinks",
				drinkSpecialDescription: "Nuff said"
			},
			saturday: {
				foodSpecialHeading: "Queso Fundito",
				foodSpecialDescription: "50% off Queso Fundito",
				drinkSpecialHeading: "$2 Modelo",
				drinkSpecialDescription: "All bottles of Modelo are $2"
			},
			sunday: {
				foodSpecialHeading: "Breakfast Tacos",
				foodSpecialDescription: "Specialty breakfast tacos available all day",
				drinkSpecialHeading: "Make Your Own Bloody Bar",
				drinkSpecialDescription: "Make your own Bloody Mary's"
			}
		}
	}
];

db.AllBusinessInfo.deleteMany({})
	.then(() => db.AllBusinessInfo.collection.insertMany(allBusinessInfoSeed))
	.then((data) => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
