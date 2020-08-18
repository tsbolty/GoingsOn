const router = require('express').Router();
const db = require('../../models');

router.post('/add', ({body}, res)=>{
    db.BusinessInfo.create(body)
        .then(data=> res.json(data))
        .catch(err=> console.log(err))
})

router.get('/get/:businessName', (req, res)=>{
    db.BusinessInfo.find({businessName: req.body.businessName})
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

// router.delete('/delete/:id', (req, res)=>{
//     db.DaySpecials.findByIdAndDelete(req.params.id)
//         .then(data => res.json(data))
//         .catch(err => {
//             res.json(err)
//         })
// })

module.exports= router;