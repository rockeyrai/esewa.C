const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const paymentRoutes = require('./routes/payment');

dotenv.config();
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/esewa', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

// Payment routes
app.use('/api/payment', paymentRoutes);

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
