const router = require('express').Router();
const db = require('../../models');

router.post('/add', ({body}, res)=>{
    db.HappyHour.create(body)
        .then(data=> res.json(data))
        .catch(err=> console.log(err))
})

router.get('/get', (req, res)=>{
    db.HappyHour.find()
        .then(data => res.json(data))
        .catch(err=> console.log(err))
})

router.delete('/delete:id', (req, res)=>{
    db.HappyHour.findByIdAndDelete(req.params.id)
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
})

module.exports= router;