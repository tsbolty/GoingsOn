const router = require('express').Router();
const db = require('../../models');

router.post('/add', ({body}, res)=>{
    console.log(body)
    db.HappyHour.create(body)
        .then(data=> res.json(data))
        .catch(err=> console.log(err))
})

router.get('/get', (req, res)=>{
    db.HappyHour.find()
        .then(data => res.json(data))
        .catch(err=> console.log(err))
})

module.exports= router;