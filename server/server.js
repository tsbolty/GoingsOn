const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const logger = require("morgan");
const bodyParser = require("body-parser");
const passport = require("passport");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));
// Bodyparser middleware
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
app.use(routes);

// const { mongoURI } = require("./config/keys");

// Connect to the Mongo DB
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/GoingsOn",
	// mongoURI,
	{ useNewUrlParser: true },
	function (err) {
		if (err) throw err;
		console.log(`mongoose connection successful`);

		app.listen(PORT, function () {
			console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
		});
	}
);
