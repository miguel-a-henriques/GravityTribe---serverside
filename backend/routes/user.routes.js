const express = require("express");
const router = express.Router();

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

module.exports = router;