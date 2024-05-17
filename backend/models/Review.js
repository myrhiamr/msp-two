const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviewerName: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  reviewText: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Review', reviewSchema);