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
    businessType: "Restaurant",
    businessHeadline: "Best Gyros in town!",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=2325w90thst,minneapolis,mn55431",
    daySpecials: [],
    weeklySpecials: [
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
    ]
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
