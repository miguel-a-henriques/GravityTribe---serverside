const express = require("express");
const router = express.Router();

const Post = require("../models/Posts.model");

router.get("/posts", async (req, res, next) => {
    Post.find()
    .then((allPosts) => res.json(allPosts))
    .catch((err) => next(err))
});


router.post("/posts", async (req, res, next) => {
    const {image, text, username, userId, userPhoto} = req.body;

    if (text === "") {
        res.status(400).json({message: "Please provide description for post"});
        return;
    }

    return Post.create({image, text, username, userId, userPhoto})
    .then((newPost) => {
        res.status(200).json({image, text, username, userId, userPhoto})
    })
    .catch((err) => next(err));
})


router.get("posts/:id", async (req,res,next) => {
    const {id} = req.params;

    Post.findById(id)
    .then((post) => res.json(post))
    .catch((err) => next(err))
})


router.put("posts/:id", async (req,res,next) => {
    const {id} = req.params;
    const {image, text, username, userId, userPhoto} = req.body

    Post.findById(id)
    .then((post) => {
        if(!post) {
            return res.status(404).json({message: "Post not found"})
        } else {
            return Post.findByIdAndUpdate(id, {image, text, username, userId, userPhoto}, {new: true});
        }
    })
    .then((updatedPost) => res.json(updatedPost))
    .catch((err) => next(err))
})


router.delete("posts/:id", async (req,res,next) => {
    const {id} = req.params;

    Post.findByIdAndDelete(id)
    .then((post) => res.status(200).json(post))
    .catch((err) => next(err))
})

module.exports = router;