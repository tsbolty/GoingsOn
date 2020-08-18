const router = require("express").Router();
const happyhourRoutes = require('./HappyHourRoutes')
const dailySpecials = require('./DailySpecialsRoutes')
const businessInfo = require('./BusinessInfo')
const weeklySpecials = require('./WeeklySpecialsRoutes')

router.use("/happyhour", happyhourRoutes)
router.use("/dailySpecials", dailySpecials)
router.use("/businessInfo", businessInfo)
router.use("/weeklySpecials", weeklySpecials)

module.exports = router;
