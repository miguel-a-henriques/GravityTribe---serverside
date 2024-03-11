const express = require("express");
const router = express.Router();

const Event = require("../models/Event.model");

router.get("/events", async (req, res, next) => {
  Event.find()
    .populate("park")
    .then((allEvents) => res.json(allEvents))
    .catch((err) => next(err));
});

router.post("/events", async (req, res, next) => {
  const { name, description, participants, park } = req.body;

  if (name === "" || description === "" || park === "") {
    res
      .status(400)
      .json({ message: "Please provide name, description and park for Event" });
    return;
  }
  return Event.create({ name, description, participants, park, createdBy })
    .then((newEvent) => {
      res.status(200).json({ event: newEvent });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
