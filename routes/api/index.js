const router = require("express").Router();
const happyhourRoutes = require('./HappyHourRoutes')
const dailySpecials = require('./DailySpecialsRoutes')
const businessInfo = require('./BusinessInfo')

router.use("/happyhour", happyhourRoutes)
router.use("/dailySpecials", dailySpecials)
router.use("/businessInfo", businessInfo)

module.exports = router;
