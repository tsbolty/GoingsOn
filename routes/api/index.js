const router = require("express").Router();
const testRoutes = require("./testRoutes");
const happyhourRoutes = require('./HappyHourRoutes')

router.use("/happyhour", happyhourRoutes)

module.exports = router;
