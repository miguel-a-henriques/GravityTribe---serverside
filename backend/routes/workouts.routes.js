const express = require("express");
const router = express.Router();

const Workout = require("../models/Workout.model");

router.get("/workouts", async (req, res, next) => {
  Workout.find()
    .then((allWorkouts) => res.json(allWorkouts))
    .catch((err) => next(err));
});

router.get("/workouts/:id", (req, res, next) => {
  const { id } = req.params;

  Workout.findById(id)
    .then((workout) => res.json(workout))
    .catch((err) => next(err));
});

router.post("/workouts", async (req, res, next) => {
  const {name, expLevel, workoutType, exercises } = req.body;

  if (name === "" || expLevel === "" || workoutType === "" || exercises === "") {
    res.status(400).json({
      message:
        "Please provide Experience Level, Workout Type and the Exercises",
    });
    return;
  }
  return Workout.create({ name, expLevel, workoutType, exercises })
    .then((newWorkout) => {
      res.status(200).json({ workout: newWorkout });
    })
    .catch((err) => {
      next(err);
    });
}); 

router.put("/workouts/:id", async (req, res, next) => {
  const { id } = req.params;
  const { name, expLevel, workoutType, exercises  } = req.body;

  Workout.findById(id)
    .then((workout) => {
      if (!workout) {
        return res.status(404).json({ message: "Workout not found" });
      } else {
        return Workout.findByIdAndUpdate(id, {name, expLevel, workoutType, exercises}, { new: true });
      }
    })
    .then((updatedWorkout) => {
      res.json(updatedWorkout);
    })
    .catch((err) => next(err));
});

router.delete("/workouts/:id", async (req, res, next) => {
  const { id } = req.params;

  Workout.findByIdAndDelete(id)
    .then((workout) => {
      res.status(200).json(workout);
    })
    .catch((err) => next(err));
});

module.exports = router;
