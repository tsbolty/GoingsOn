const router = require("express").Router();
const { SpecialEvents, AllBusinessInfo } = require("../../models");

router.post("/post/:email", (req, res) => {
	SpecialEvents.create(req.body)
		.then(({ _id }) =>
			AllBusinessInfo.findOneAndUpdate(
				{ email: req.params.email },
				{ $push: { specialEvents: _id } },
				{ new: true }
			)
		)
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

router.get("/get/:email/:day", (req, res) => {
	SpecialEvents.find({
		email: req.params.email,
		day: req.params.day
	})
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

router.get("/get/:email", (req, res) => {
	SpecialEvents.find({ email: req.params.email })
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

router.delete("/delete/:id", (req, res) => {
	SpecialEvents.findByIdAndDelete(req.params.id)
		.then((data) => res.json(data))
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;
