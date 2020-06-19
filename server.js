const express = require("express");
var session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./routes");
const logger = require("morgan");
const flash = require('connect-flash');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(flash())
app.use(express.static("public"));
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/GoingsOn", { useNewUrlParser: true }, function(err) {
  if (err) throw err;
  console.log(`mongoose connection successful`);
  
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
