const router = require("express").Router();
const db = require("../../models");

router.post("/add", ({ body }, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	db.HappyHour.create(body)
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

router.get("/get", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	db.HappyHour.find()
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

router.delete("/delete:id", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	db.HappyHour.findByIdAndDelete(req.params.id)
		.then((data) => res.json(data))
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;
