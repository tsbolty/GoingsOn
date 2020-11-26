const router = require('express').Router();
const mongojs = require('mongojs');
const db = require('../../models');

router.post('/add/:email', (req, res)=>{
    db.WeeklySpecials.create(req.body)
        .then(({ _id }) => db.AllBusinessInfo.findOneAndUpdate({email: req.params.email}, {$push: {weeklySpecials: _id}}, {new: true}))
        .then(data=> res.json(data))
        .catch(err=> console.log(err))
})

router.get('/get/:email', (req, res)=>{
    db.WeeklySpecials.find({email: req.params.email})
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

router.delete('/delete/:id', (req, res)=>{
    db.WeeklySpecials.findByIdAndDelete(req.params.id)
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
})

module.exports= router;