const express = require("express");
const router = express.Router();

const Park = require("../models/Parks.model")

router.get("/parks", (req, res, next) => {
    Park.find()
    .then((allParks) => res.json(allParks))
    .catch((err) => next(err)) 
})
  
router.get("/parks/:id", (req,res,next)=>{
    const { id } = req.params;
    Park.findById(id)
    .then((park) => res.json(park))
    .catch((err) => next(err)) 
})

router.put("/parks/:id", (req,res,next)=>{
    const { id } = req.params;
    const review = req.body
    Park.findById(id)
    .then((park) => res.json(park))
    .catch((err) => next(err)) 
})

module.exports = router;