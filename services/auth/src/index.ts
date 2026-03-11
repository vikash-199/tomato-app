import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoute from './routes/auth.js';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json()); // for JSON body
app.use(express.urlencoded({ extended: true })); // optional for form dataapp.use('/api/auth', authRoute);

app.use('/api/auth', authRoute);

app.listen(PORT, () => {
  console.log(`Auth server is running on port ${PORT}`);
  connectDB();
});
