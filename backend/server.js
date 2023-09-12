
// Import the 'path' module to work with file paths frontend with backend
const path = require('path');

// Import the 'express' module to create an Express.js server
const express = require('express');

// Import and configure the 'dotenv' module to load environment variables from a .env file
const dotenv = require('dotenv').config();

// Import the 'errorHandler' middleware from a custom module 'errorMiddleware'
const { errorHandler } = require('./middleware/errorMiddleware');

// Define the port for the server to listen on, using either the provided environment variable or a default value of 5001
const port = process.env.PORT || 5003;

// Import and call the 'connectDB' function from the 'db' configuration module to connect to the database
const connectDB = require('./config/db');
connectDB();

// Create an instance of the Express application
const app = express();

// Configure Express to parse JSON request bodies
app.use(express.json());

// Configure Express to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: false }));

// Define routes for handling API requests related to orders and users
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Serve the frontend in production and provide a fallback message for non-production environments
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the frontend build directory
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  // Serve the frontend's HTML file for all routes (client-side routing)
  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  // In non-production environments, respond with a message to set to production
  app.get('/', (req, res) => res.send('Please set to production'));
}

// Use the 'errorHandler' middleware to handle errors, overwriting the default Express error handler
app.use(errorHandler);

// Start the Express server and listen on the defined port, with a log message upon successful start
app.listen(port, () => console.log(`Server started on port ${port}`));
