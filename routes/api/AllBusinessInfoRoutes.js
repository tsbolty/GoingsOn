const router = require('express').Router();
const db = require('../../models');

router.post('/add', ({body}, res)=>{
    db.AllBusinessInfo.create(body)
        .then(data=> res.json(data))
        .catch(err=> console.log(err))
})

router.get('/get/type/:type', (req, res)=>{
  db.AllBusinessInfo.find({businessType: req.params.type})
      // .populate("daySpecials")
      // .populate("weeklySpecials")
      .then(data => res.json(data))
      .catch(err => console.log(err))
})

router.get('/get/email/:email', (req, res)=>{
    db.AllBusinessInfo.findOne({email: req.params.email})
        // .populate("daySpecials")
        // .populate("weeklySpecials")
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

router.get('/get/id/:id', (req, res)=>{
  db.AllBusinessInfo.find({_id: req.params.id})
      // .populate("daySpecials")
      // .populate("weeklySpecials")
      .then(data => res.json(data))
      .catch(err => console.log(err))
})

router.get('/get', (req, res)=>{
    db.AllBusinessInfo.find({})
    // .populate("daySpecials")
    // .populate("weeklySpecials")
    .then(data => res.json(data))
    .catch(err => console.log("line 39", err))
})

module.exports= router;