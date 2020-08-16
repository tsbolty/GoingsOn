const router = require("express").Router();
const testRoutes = require("./testRoutes");
const happyhourRoutes = require('./HappyHourRoutes')
const dailySpecials = require('./DailySpecialsRoutes')

router.use("/happyhour", happyhourRoutes)
router.use("/dailySpecials", dailySpecials)

module.exports = router;
