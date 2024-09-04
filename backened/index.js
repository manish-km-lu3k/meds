import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import { medicineRouter } from './src/routes/medicine.js';


dotenv.config();
const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: ["https://meds-client.vercel.app"],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials : true
    }
));
app.use('/', medicineRouter);


mongoose.connect(
    process.env.MONGODB_URI
);

app.listen(8000, () => {
    console.log('server is running on port: 8000');
});