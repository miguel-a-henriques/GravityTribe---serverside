const express = require("express");
const router = express.Router();

const Event = require("../models/Event.model")


router.get("/events", (req, res, next) => {
    Event.find()
    .populate("park")
    .then((allEvents) => res.json(allEvents))
    .catch((err) => next(err)) 
})

module.exports = router;