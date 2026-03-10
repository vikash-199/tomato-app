import express from 'express';
import dotenv from 'dotenv';
import connectDB from './connfig/db.js';
import authRoute from './routes/auth.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json()); // for JSON body
app.use(express.urlencoded({ extended: true })); // optional for form dataapp.use('/api/auth', authRoute);

app.use('/api/auth', authRoute);

app.listen(PORT, () => {
  console.log(`Auth server is running on port ${PORT}`);
  connectDB();
});
