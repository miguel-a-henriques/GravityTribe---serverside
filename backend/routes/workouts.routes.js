const express = require("express");
const router = express.Router();

const Workout = require("../models/Workout.model")

router.get("/workouts", (req, res, next) => {
    Workout.find()
    .then((allWorkouts) => res.json(allWorkouts))
    .catch((err) => next(err)) 
})
  
module.exports = router;