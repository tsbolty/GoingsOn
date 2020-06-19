const router = require("express").Router();
const db = require("../../models");

router.post("/add", ({body}, res)=>{
    db.Test.create(body, {new: true}).then(data => res.json(data))
})

router.get("/get", (req, res)=>{
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