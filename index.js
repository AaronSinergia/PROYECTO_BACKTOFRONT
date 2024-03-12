require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const cors = require('cors');
const assistantsRoutes = require('./src/api/routes/assistant');
const eventsRoutes = require('./src/api/routes/event');
const cloudinary = require('cloudinary').v2;

const app = express();
connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(cors());

app.use(express.json());

app.use('/api/auth', assistantsRoutes);
app.use('/api/events', eventsRoutes);

app.use('*', (req, res, next) => {
  return res.status(404).json('Route Not Found');
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
