const router = require('express').Router();
const db = require('../../models');

router.post('/add', ({body}, res)=>{
    db.Test.create(body)
        .then(data=> res.json(data))
        .catch(err=> console.log(err))
})

router.post('/update', ({body}, res)=>{
    const _id = body._id;
    const updated = {
        firstObject: body.firstObject,
        secondObject: body.secondObject
    }

    db.Test.findByIdAndUpdate(_id, updated, {new: true}, (err, data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
        }
    })
})

router.get('/get', (req, res)=>{
    db.Test.find()
        .then(data => res.json(data))
        .catch(err=> console.log(err))
})

router.delete('/delete:id', (req, res)=>{
    db.Test.findByIdAndDelete(req.params.id)
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
})

module.exports= router;