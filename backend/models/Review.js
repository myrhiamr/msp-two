const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: String, default: new Date().toLocaleString() } // Add date field
});

module.exports = mongoose.model('Review', reviewSchema);