const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Get all reviews
router.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    next(error);
  }
});

// Add a new review
router.post('/', async (req, res, next) => {
  try {
    const { reviewerName, rating, reviewText } = req.body;
    const review = new Review({ reviewerName, rating, reviewText });
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
});

module.exports = router;