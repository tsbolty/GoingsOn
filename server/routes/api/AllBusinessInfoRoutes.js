const router = require("express").Router();
const db = require("../../models");

router.post("/add", ({ body }, res) => {
	db.AllBusinessInfo.create(body)
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

router.get("/get/type/:type", (req, res) => {
	db.AllBusinessInfo.find({ businessType: req.params.type })
		.populate("specialEvents")
		// .populate("weeklySpecials")
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

router.get("/get/email/:email", (req, res) => {
	db.AllBusinessInfo.findOne({ email: req.params.email })
		.populate("specialEvents")
		// .populate("weeklySpecials")
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

router.get("/get/id/:id", (req, res) => {
	db.AllBusinessInfo.find({ _id: req.params.id })
		.populate("specialEvents")
		// .populate("weeklySpecials")
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

router.get("/get", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	console.log("hit get route");
	db.AllBusinessInfo.find({})
		.populate("specialEvents")
		// .populate("weeklySpecials")
		.then((data) => res.json(data))
		.catch((err) => console.log("line 39", err));
});

router.put("/update/:id", ({ params, body }, res) => {
	db.AllBusinessInfo.findByIdAndUpdate(params.id, body)
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

module.exports = router;
