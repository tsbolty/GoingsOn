const router = require("express").Router();
const testRoutes = require("./testRoutes");
const happyhourRoutes = require('./happyhourRoutes')

router.use("/test", testRoutes)
router.use("/happyhour", happyhourRoutes)

module.exports = router;
