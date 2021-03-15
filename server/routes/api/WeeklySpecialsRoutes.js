const router = require("express").Router();
const db = require("../../models");

router.post("/add/:email", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	db.WeeklySpecials.create(req.body)
		.then(({ _id }) =>
			db.AllBusinessInfo.findOneAndUpdate(
				{ email: req.params.email },
				{ $push: { weeklySpecials: _id } },
				{ new: true }
			)
		)
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

router.get("/get/:email", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	db.WeeklySpecials.find({ email: req.params.email })
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

router.delete("/delete/:id", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	db.WeeklySpecials.findByIdAndDelete(req.params.id)
		.then((data) => res.json(data))
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;
