const router = require("express").Router();
const { AllBusinessInfo } = require("../../models");

router.post("/add", ({ body }, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	AllBusinessInfo.create(body)
		.then((_id) =>
			User.findOneAndUpdate(
				{ _id: body.id },
				{ $set: { businessInfo: _id } },
				{ new: true }
			)
		)
		.catch((err) => console.log(err));
});

router.get("/get/type/:type", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	AllBusinessInfo.find({ businessType: req.params.type })
		.populate("specialEvents")
		// .populate("weeklySpecials")
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

router.get("/get/email/:id", ({ params }, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	AllBusinessInfo.findOne({ email: params.id })
		.populate("specialEvents")
		// .populate("weeklySpecials")
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

router.get("/get/id/:id", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	AllBusinessInfo.find({ _id: req.params.id })
		.populate("specialEvents")
		// .populate("weeklySpecials")
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

router.get("/get", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	AllBusinessInfo.find({})
		.populate("specialEvents")
		// .populate("weeklySpecials")
		.then((data) => res.json(data))
		.catch((err) => console.log("line 39", err));
});

router.put("/update/:id", ({ params, body }, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	AllBusinessInfo.findByIdAndUpdate(params.id, body)
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

module.exports = router;
