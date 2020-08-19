const router = require('express').Router();
const db = require('../../models');

router.post('/add', ({body}, res)=>{
    db.WeeklySpecials.create(body)
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