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
    mapsLink: "https://www.google.com/maps/search/?api=1&query=2325w90thst,minneapolis,mn55431",
    daySpecials: [],
    weeklySpecials:
    {
      monday: {
        foodSpecialHeading: "Burger Night",
        foodSpecialDescription: "$2 burgers 5 - 10 PM",
        drinkSpecialHeading: "Craft Beer Night",
        drinkSpecialDescription: "$2 pints",
      },
      tuesday: {
        foodSpecialHeading: "Taco Tuesday",
        foodSpecialDescription: "$1 tacos",
        drinkSpecialHeading: "Margarita Night",
        drinkSpecialDescription: "$5 margaritas",
      },
      wednesday: {
        foodSpecialHeading: "Wednesday Fish Fry",
        foodSpecialDescription: "delicious catfish dinner",
        drinkSpecialHeading: "Half Priced Bottles of Wine",
        drinkSpecialDescription: "nuff said",
      },
      thursday: {
        foodSpecialHeading: "All You Can Eat Wings",
        foodSpecialDescription: "$10",
        drinkSpecialHeading: "IPA Special",
        drinkSpecialDescription: "$4 craft IPA's",
      },
      friday: {
        foodSpecialHeading: "Prime Rib Night",
        foodSpecialDescription: "20oz prime rib",
        drinkSpecialHeading: "$2 You-Call-It's",
        drinkSpecialDescription: "10PM - Midnight",
      },
      saturday: {
        foodSpecialHeading: "Poutine",
        foodSpecialDescription: "$5 poutine",
        drinkSpecialHeading: "$2 You-Call-It's",
        drinkSpecialDescription: "10PM - Midnight",
      },
      sunday: {
        foodSpecialHeading: "Bottomless Brunch",
        foodSpecialDescription: "$20 per person",
        drinkSpecialHeading: "Bottomless Mimosas",
        drinkSpecialDescription: "$10 per person",
      },
    }
  },
  {
    email: "tsbolty@gmail.com",
    businessName: "Senser's Bar",
    businessAddress: "4217 American Blvd W, Bloomington, MN 55437",
    businessType: "bar",
    businessHeadline: "Best Sports Bar Ever",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=4217americanblvdw,bloomington,mn55437",
    daySpecials: [],
    weeklySpecials:
    {
      monday: {
        foodSpecialHeading: "Jalapeno Poppers",
        foodSpecialDescription: "$5 orders of jalapeno poppers",
        drinkSpecialHeading: "Domestic drafts",
        drinkSpecialDescription: "$2 pints",
      },
      tuesday: {
        foodSpecialHeading: "Taco Bar",
        foodSpecialDescription: "Build your own tacos",
        drinkSpecialHeading: "Top Shelf Tequila",
        drinkSpecialDescription: "$5 top shelf tequila",
      },
      wednesday: {
        foodSpecialHeading: "Pretzels",
        foodSpecialDescription: "$5 pub pretzels",
        drinkSpecialHeading: "3 Bottles of Wine For $50",
        drinkSpecialDescription: "nuff said",
      },
      thursday: {
        foodSpecialHeading: "Bottomless Bucket of Wings",
        foodSpecialDescription: "$10",
        drinkSpecialHeading: "IPA Special",
        drinkSpecialDescription: "$4 craft IPA pints",
      },
      friday: {
        foodSpecialHeading: "Half Priced Apps",
        foodSpecialDescription: "All apps 50% off",
        drinkSpecialHeading: "$2 You-Call-It's",
        drinkSpecialDescription: "10PM - Midnight",
      },
      saturday: {
        foodSpecialHeading: "Breakfast Bar",
        foodSpecialDescription: "Select breakfast items sold all day",
        drinkSpecialHeading: "$2 You-Call-It's",
        drinkSpecialDescription: "10PM - Midnight",
      },
      sunday: {
        foodSpecialHeading: "Brunch Bar",
        foodSpecialDescription: "$15 per person",
        drinkSpecialHeading: "Service Industry Night",
        drinkSpecialDescription: "Half priced drinks for service industry",
      },
    }
  },
  {
    email: "tylerbolty@hotmail.com",
    businessName: "Bonfire",
    businessAddress: "1555 Cliff Rd, Eagan, MN 55122",
    businessType: "restaurant",
    businessHeadline: "Woodfire Cooking",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=1555cliffrd,eagan,mn55122",
    daySpecials: [],
    weeklySpecials:
    {
      monday: {
        foodSpecialHeading: "Bull Bites",
        foodSpecialDescription: "$5 bull bites",
        drinkSpecialHeading: "Martini Monday",
        drinkSpecialDescription: "$5 martinis",
      },
      tuesday: {
        foodSpecialHeading: "Bontons",
        foodSpecialDescription: "buffalo chicken wontons",
        drinkSpecialHeading: "Old Fashioned",
        drinkSpecialDescription: "$5 Woodford Old Fashioned",
      },
      wednesday: {
        foodSpecialHeading: "Wednesday Fish Fry",
        foodSpecialDescription: "delicious catfish dinner",
        drinkSpecialHeading: "Craft Beer Night",
        drinkSpecialDescription: "$4 pints of any craft beer",
      },
      thursday: {
        foodSpecialHeading: "Wing Night",
        foodSpecialDescription: "$10 all you can eat wings",
        drinkSpecialHeading: "Craft Cocktails",
        drinkSpecialDescription: "$5 craft cocktails",
      },
      friday: {
        foodSpecialHeading: "Burger And A Beer",
        foodSpecialDescription: "$10 burger and a beer",
        drinkSpecialHeading: "Jack Daniels",
        drinkSpecialDescription: "$2 Jack Daniels",
      },
      saturday: {
        foodSpecialHeading: "Woodfired Pizzas",
        foodSpecialDescription: "Any pizza 50% off",
        drinkSpecialHeading: "BOGO",
        drinkSpecialDescription: "BOGO all drinks!",
      },
      sunday: {
        foodSpecialHeading: "Brunch Buffet",
        foodSpecialDescription: "$25 per person",
        drinkSpecialHeading: "Sangria",
        drinkSpecialDescription: "$5 homemade sangria",
      },
    }
  }
  
]

db.AllBusinessInfo.deleteMany({})
  .then(() => db.AllBusinessInfo.collection.insertMany(allBusinessInfoSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
