import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import { medicineRouter } from './src/routes/medicine.js';


dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use('/', medicineRouter);


mongoose.connect(
    process.env.MONGODB_URI
);

app.listen(8000, () => {
    console.log('server is running on port: 8000');
});