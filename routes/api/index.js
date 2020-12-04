const router = require("express").Router();
const dailySpecials = require('./DailySpecialsRoutes')
const businessInfo = require('./BusinessInfoRoutes')
const allBusinessInfo = require('./AllBusinessInfoRoutes')
const weeklySpecials = require('./WeeklySpecialsRoutes')
const happyhourRoutes = require('./HappyHourRoutes')

router.use("/dailySpecials", dailySpecials)
router.use("/businessInfo", businessInfo)
router.use("/allBusinessInfo", allBusinessInfo)
router.use("/weeklySpecials", weeklySpecials)
router.use("/happyhour", happyhourRoutes)

module.exports = router;
