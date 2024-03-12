const express = require("express");
const router = express.Router();
const fileUploader = require('../config/cloudinary.config');
const User = require("../models/User.model")

router.get("/users", (req, res, next) => {
    User.find()
    .then((allUsers) => res.json(allUsers))
    .catch((err) => next(err))
})
  
router.get("/user/:id", (req, res, next) => {
    const { id } = req.params;
    User.findById(id)
    .then((user) => res.json(user))
    .catch((err) => next(err))
})

//Route to upload images using cloudinary
router.post('/upload', fileUploader.single('imageUrl'), async (req, res, next) => {
    

    if(!req.file){
     next(new Error('No file upload'));
     return;
    }
 
    res.json({fileUrl : req.file.path})
 })

router.put("/user/:id", (req, res, next) => {
    const {id} = req.params;
    const {name, email, photo, expLevel, workouts, follow, followedBy} = req.body;
    User.findById(id)
    .then((user) => {
        if(user) {
            return User.findByIdAndUpdate(id, {name, email, photo, expLevel, workouts, follow, followedBy}, {new: true})
        } else {
            res.status(404).json({message: "User not found"})
        }
    })
    .then((updatedUser) => {
        if(updatedUser) {
            res.json(updatedUser);
        }
    })
    .catch((err) => next(err)); 
})

module.exports = router;