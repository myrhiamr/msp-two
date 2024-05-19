const express = require('express');
<<<<<<< HEAD
const cors = require('cors');
const reviewRoutes = require('./routes/Review');
const errorMiddleware = require('./middleware');

const app = express();
app.use(express.json());
app.use(cors()); 

// Routes
app.use('/api/reviews', reviewRoutes);


// Error handling middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
=======
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Review = require('./models/Review'); // Import the Review model

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

// Define routes for the reviews
app.post('/reviews', async (req, res) => {
  const { name, comment } = req.body;
  try {
    const newReview = new Review({ name, comment });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save review' });
  }
});

app.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
>>>>>>> f28085936d7ceb0a1701c1aff219b7e5d8ef3903
