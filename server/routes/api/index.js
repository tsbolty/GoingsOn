const router = require("express").Router();
const specialEvents = require("./SpecialEventsRoutes");
const businessInfo = require("./BusinessInfoRoutes");
const allBusinessInfo = require("./AllBusinessInfoRoutes");
const weeklySpecials = require("./WeeklySpecialsRoutes");
const users = require("./userRoutes");
// const happyhourRoutes = require('./HappyHourRoutes')

router.use("/specialevents", specialEvents);
router.use("/businessinfo", businessInfo);
router.use("/allbusinessinfo", allBusinessInfo);
router.use("/weeklyspecials", weeklySpecials);
router.use("/user", users);
// router.use("/happyhour", happyhourRoutes)

module.exports = router;
