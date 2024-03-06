const express = require("express");
const router = express.Router();

const User = require("../models/User.model")
const Park = require("../models/Parks.model")

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/users", (req, res, next) => {
  User.find()
  .then((allUsers) => res.json(allUsers))
  .catch((err) => next(err))
})

router.get("/parks", (req, res, next) => {
  Park.find()
  .then((allParks) => res.json(allParks))
  .catch((err) => next(err)) 
})

module.exports = router;
