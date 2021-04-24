const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const { User } = require("../../models");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	// Form validation
	const { errors, isValid } = validateRegisterInput(req.body);
	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}
	User.findOne({ email: req.body.email }).then((user) => {
		if (user) {
			return res.status(400).json({ email: "Email already exists" });
		} else {
			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password
			});
			// Hash password before saving in database
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;
					newUser.password = hash;
					newUser
						.save()
						.then((user) => res.json(user))
						.catch((err) => console.log(err));
				});
			});
		}
	});
});

// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	// Form validation
	const { errors, isValid } = validateLoginInput(req.body);
	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}
	const email = req.body.email;
	const password = req.body.password;
	// Find user by email
	User.findOne({ email })
		.populate("businessInfo")
		.populate({
			path: "allBusinessInfo",
			populate: {
				path: "specialEvents",
				model: "SpecialEvents"
			}
		})
		.then((user) => {
			// Check if user exists
			if (!user) {
				return res.status(404).json({ emailnotfound: "Email not found" });
			}
			// Check password
			bcrypt.compare(password, user.password).then((isMatch) => {
				if (isMatch) {
					// User matched
					// Create JWT Payload
					const payload = {
						id: user.id,
						name: user.name
					};
					// Sign token
					jwt.sign(
						payload,
						keys.secretOrKey,
						{
							expiresIn: 31556926 // 1 year in seconds
						},
						(err, token) => {
							res.json({
								success: true,
								token: "Bearer " + token,
								user
							});
						}
					);
				} else {
					return res
						.status(400)
						.json({ passwordincorrect: "Password incorrect" });
				}
			});
		});
});

router.get("/get/:id", ({ params }, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	// Find user by id
	User.findOne({ _id: params.id })
		.populate("businessInfo")
		.populate({
			path: "allBusinessInfo",
			populate: {
				path: "specialEvents",
				model: "SpecialEvents"
			}
		})
		.then((user) => {
			// Check if user exists
			if (!user) {
				return res.status(404).json({ usernotfound: "User not found" });
			}
			res.json(user);
		})
		.catch((err) => {
			res.send(err);
		});
});

module.exports = router;
