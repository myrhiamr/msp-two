const express = require('express');
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