const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const logger = require("morgan");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
	"mongodb+srv://tsbolty:Gladiator5972!@cluster0.dz1il.mongodb.net/GoingsOn?retryWrites=true&w=majority",
	{ useNewUrlParser: true },
	function (err) {
		if (err) throw err;
		console.log(`mongoose connection successful`);

		app.listen(PORT, function () {
			console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
		});
	}
);
