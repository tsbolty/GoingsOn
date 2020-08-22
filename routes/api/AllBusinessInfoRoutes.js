const router = require('express').Router();
const db = require('../../models');

router.post('/add', ({body}, res)=>{
    db.AllBusinessInfo.create(body)
        .then(data=> res.json(data))
        .catch(err=> console.log(err))
})

router.get('/get/:email', (req, res)=>{
    db.AllBusinessInfo.find({email: req.params.email})
        .populate("daySpecials")
        .populate("weeklySpecials")
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

module.exports= router;