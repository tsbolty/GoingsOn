const router = require('express').Router();
const db = require('../../models');

router.post('/post/monday', ({body}, res)=>{
    db.MondaySpecials.create(body)
        .then(data=> res.json(data))
        .catch(err=> console.log(err))
})

router.get('/get/monday', (req, res)=>{
    db.MondaySpecials.find()
        .then(data => res.json(data))
        .catch(err=> console.log(err))
})

router.delete('/delete/monday/:id', (req, res)=>{
    db.MondaySpecials.findByIdAndDelete(req.params.id)
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
})

module.exports= router;