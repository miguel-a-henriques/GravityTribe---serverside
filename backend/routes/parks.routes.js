const express = require("express");
const router = express.Router();

const Park = require("../models/Parks.model");

router.get("/parks", async (req, res, next) => {
  Park.find()
    .then((allParks) => res.json(allParks))
    .catch((err) => next(err));
});

router.get("/parks/:id", async (req, res, next) => {
  const { id } = req.params;
  Park.findById(id)
    .then((park) => res.json(park))
    .catch((err) => next(err));
});

router.put("/parks/:id", async (req, res, next) => {
  const { id } = req.params;
  const { updatedPark } = req.body;

  Park.findById(id)
    .then((park) => {
      if (!park) {
        return res.status(404).json({ message: "Park not found" });
      } else {
        return Park.findByIdAndUpdate(id, updatedPark, { new: true });
      }
    })
    .then((updatedPark) => {
      res.json(updatedPark);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
