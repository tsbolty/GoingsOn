const router = require("express").Router();
const testRoutes = require("./testRoutes");
const happyhourRoutes = require('./HappyHourRoutes')

router.use("/happyhour", happyhourRoutes)
router.use("/test", testRoutes)

module.exports = router;
