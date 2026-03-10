import express from 'express';
import dotenv from 'dotenv';
import connectDB from './connfig/db.js';
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.listen(PORT, () => {
    console.log(`Auth server is running on port ${PORT}`);
    console.log('MONGO_URI:', process.env.MONGO_URI);
    connectDB();
});
//# sourceMappingURL=index.js.map