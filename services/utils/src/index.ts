import express from 'express';
import dotenv from 'dotenv';
import cloudinary from 'cloudinary';
import cors from 'cors';
import uploadRoutes from './routes/cloudinary.js';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const { CLOUD_NAME, API_SECRET, API_KEY } = process.env;

if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
  throw new Error('Missing cloudinary env variable');
}

cloudinary.v2.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

app.use('/api', uploadRoutes);
const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Utils server is running on port ${PORT}`);
});
