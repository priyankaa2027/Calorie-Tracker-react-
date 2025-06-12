const express = require('express');
const mongoose = require('mongoose');
const mealRoutes = require('./routes/mealRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
const connectDB = require('./config/db');
connectDB();

// Routes
app.use('/api/meals', mealRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});