import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import cardsRoutes from './routes/cards.js';
import userRoutes from './routes/user.js';
import { configDatabase } from './config/configDatabase.js';

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use('/memories', cardsRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000;

configDatabase(app, PORT);