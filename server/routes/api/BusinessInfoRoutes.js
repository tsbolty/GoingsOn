const router = require("express").Router();
const db = require("../../models");

router.post("/add", ({ body }, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	db.BusinessInfo.create(body)
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

router.get("/get/:email", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	db.BusinessInfo.find({ email: req.params.email })
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

// router.delete('/delete/:id', (req, res)=>{
//     db.DaySpecials.findByIdAndDelete(req.params.id)
//         .then(data => res.json(data))
//         .catch(err => {
//             res.json(err)
//         })
// })

module.exports = router;
