import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDB from './config/db';
import authRoutes from './routes/authRoutes';
import logRoutes from './routes/logRoutes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api', logRoutes); 

connectToDB();

export default app;