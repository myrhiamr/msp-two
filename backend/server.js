const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Review = require('./models/Review');
const cors = require('cors');
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use(cors());

app.post('/reviews', async (req, res) => {
  const { name, comment } = req.body;
  console.log('Received new review:', req.body);  // Log the received data
  try {
    const newReview = new Review({ name, comment, date: new Date().toLocaleString() });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    console.error('Error saving review:', err);
    res.status(500).json({ error: 'Failed to save review' });
  }
});

app.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (err) {
    console.error('Error fetching reviews:', err);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});