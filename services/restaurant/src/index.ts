import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import restaurantRoute from './routes/restaurant.js';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

app.use('/api/restaurant', restaurantRoute);

app.listen(PORT, () => {
  console.log(`restaurant server is running on port ${PORT}`);
  connectDB();
});
