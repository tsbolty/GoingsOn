const router = require('express').Router();
const db = require('../../models');

router.post('/post/:email', (req, res)=>{
    db.DaySpecials.create(req.body)
        .then(({ _id }) => db.AllBusinessInfo.findOneAndUpdate({email: req.params.email}, {$push: {daySpecials: _id}}, {new: true}))
        .then(data=> res.json(data))
        .catch(err=> console.log(err))
})

router.get('/get/:email/:day', (req, res)=>{
    db.DaySpecials.find({
        email: req.params.email,
        day: req.params.day})
        .then(data => res.json(data))
        .catch(err=> console.log(err))
})

router.get('/get/:email', (req, res)=>{
    db.DaySpecials.find({email: req.params.email})
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

router.delete('/delete/:id', (req, res)=>{
    db.DaySpecials.findByIdAndDelete(req.params.id)
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
})

module.exports= router;