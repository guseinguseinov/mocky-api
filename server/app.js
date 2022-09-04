import express from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { config } from "dotenv";
import cors from 'cors';

import errorHandler from './middlewares/errorHandler.js';
import homeRoute from './routers/homeRoute.js';
import mockyRoute from './routers/mockyRoute.js';
import notFound from './middlewares/notFound.js';
config();

await mongoose.connect(process.env.DB_LOCAL);

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use('/', homeRoute);
app.use('/mocky', mockyRoute);
app.all('*', notFound);

app.use(errorHandler);

export default app;