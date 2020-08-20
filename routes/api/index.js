const router = require("express").Router();
const happyhourRoutes = require('./HappyHourRoutes')
const dailySpecials = require('./DailySpecialsRoutes')
const businessInfo = require('./BusinessInfoRoutes')
const weeklySpecials = require('./WeeklySpecialsRoutes')
const test = require('./TestRoutes')

router.use("/happyhour", happyhourRoutes)
router.use("/dailySpecials", dailySpecials)
router.use("/businessInfo", businessInfo)
router.use("/weeklySpecials", weeklySpecials)
router.use("/test", test)

module.exports = router;
