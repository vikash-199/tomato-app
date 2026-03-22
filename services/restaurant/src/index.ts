import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import itemRoutes from './routes/menuItem.js';
import restaurantRoute from './routes/restaurant.js';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.use('/api/restaurant', restaurantRoute);
app.use('/api/item', itemRoutes);

app.listen(PORT, () => {
  console.log(`restaurant server is running on port ${PORT}`);
  connectDB();
});
