const router = require("express").Router();
const db = require("../../models");

router.post("/testing", ({body}, res)=>{
    db.Test.create(body, {new: true}).then(data => console.log(data))
})

router.get("/test", (req, res)=>{
    db.Test.find()
        .then(data=> res.json(data))
})

router.delete("/test/:id", (req, res)=>{
    db.Test.findByIdAndDelete(req.params.id)
    .then(data=> res.json(data))
    .catch(err =>{
        res.json(err)
    })
})

module.exports = router;