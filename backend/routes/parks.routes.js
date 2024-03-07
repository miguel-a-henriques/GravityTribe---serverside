const express = require("express");
const router = express.Router();

const Park = require("../models/Parks.model")

router.get("/parks", (req, res, next) => {
    Park.find()
    .then((allParks) => res.json(allParks))
    .catch((err) => next(err)) 
})
  
router.get("/parks/:id", (req,res,next)=>{
    const { id } = req.params;
    Park.findById(id)
    .then((park) => res.json(park))
    .catch((err) => next(err))
})

router.put("/parks/:id", (req, res, next) => {
    const { id } = req.params;
    const {text, author, photo, revId} = req.body;
    
    Park.findById(id)
        .then((park) => {
            if (!park) {
                return res.status(404).json({ message: "Park not found" });
            }
            const reviews = park.reviews || [];
            reviews.push(req.body);
            park.reviews = reviews;
            return park.save();
        })
        .then((updatedPark) => {
            res.json(updatedPark);
        })
        .catch((err) => {
            next(err);
        });
});
/*
router.delete('/api/parks/:id/review/:revId', (req, res) => {
    const parkId = req.params.id;
    const { reviewId } = req.body;
  
    // Find the park by id
    const parkIndex = Park.findIndex(park => park.id === parkId);
  
    if (parkIndex !== -1) {
      // Remove the review from the park
      const updatedReviews = Park[parkIndex].reviews.filter(review => review.revId !== reviewId);
      Park[parkIndex].reviews = updatedReviews;
  
      res.status(200).json({ message: 'Review deleted successfully' });
    } else {
      res.status(404).json({ message: 'Park not found' });
    }
  }); */

 /*  router.put("/parks/:id", (req, res, next) => {
    const { id } = req.params;
    const { review } = req.body; // Extract the review from the request body
    
    Park.findById(id)
        .then((park) => {
            if (!park) {
                return res.status(404).json({ message: "Park not found" });
            }
            let reviews = park.reviews || [];
            // Find the index of the review with the specified ID
            const reviewIndex = reviews.findIndex(review => review.revId === review.revId);
            if (reviewIndex !== -1) {
                // Update the existing review
                reviews[reviewIndex] = review;
            } else {
                // Add a new review
                reviews.push(review);
            }
            park.reviews = reviews;
            return park.save();
        })
        .then((updatedPark) => {
            res.json(updatedPark);
        })
        .catch((err) => {
            next(err);
        });
});
 */
  


module.exports = router;