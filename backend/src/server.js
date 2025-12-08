import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth.route.js';
import adminRoute from './routes/admin.route.js';

dotenv.config();
app.use(cookieParser()); 

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Pharmacy Management System API is running...');
});

app.use('/api/auth', authRoute);
app.use('/api/admin', adminRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
