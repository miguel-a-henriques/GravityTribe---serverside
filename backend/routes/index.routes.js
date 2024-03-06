const express = require("express");
const router = express.Router();

const User = require("../models/User.model")
const Park = require("../models/Parks.model")
const Event = require("../models/Event.model")
const Workout = require("../models/Workout.model")

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

router.get("/events", (req, res, next) => {
  Event.find()
  .populate("park")
  .then((allEvents) => res.json(allEvents))
  .catch((err) => next(err)) 
})

router.get("/workouts", (req, res, next) => {
  Workout.find()
  .then((allWorkouts) => res.json(allWorkouts))
  .catch((err) => next(err)) 
})

module.exports = router;
