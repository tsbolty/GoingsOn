const router = require('express').Router();
const db = require('../../models');

router.post('/post', ({body}, res)=>{
    db.DaySpecials.create(body)
        .then(data=> res.json(data))
        .catch(err=> console.log(err))
})

router.get('/get', (req, res)=>{
    db.DaySpecials.find()
        .then(data => res.json(data))
        .catch(err=> console.log(err))
})

router.delete('/delete/:id', (req, res)=>{
    db.DaySpecials.findByIdAndDelete(req.params.id)
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
})

module.exports= router;