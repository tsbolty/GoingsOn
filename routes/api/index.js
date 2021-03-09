const router = require("express").Router();
const dailySpecials = require("./DailySpecialsRoutes");
const businessInfo = require("./BusinessInfoRoutes");
const allBusinessInfo = require("./AllBusinessInfoRoutes");
const weeklySpecials = require("./WeeklySpecialsRoutes");
// const happyhourRoutes = require('./HappyHourRoutes')

router.use("/dailyspecials", dailySpecials);
router.use("/businessinfo", businessInfo);
router.use("/allbusinessinfo", allBusinessInfo);
router.use("/weeklyspecials", weeklySpecials);
// router.use("/happyhour", happyhourRoutes)

module.exports = router;
