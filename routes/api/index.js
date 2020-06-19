const router = require("express").Router();
const testRoutes = require("./testRoutes")

router.use("/testing", testRoutes)

module.exports = router;
