// Import the 'mongoose' library, which allows us to interact with MongoDB
const mongoose = require('mongoose');

// Define an asynchronous function named 'connectDB'
const connectDB = async () => {
    try {
        // Attempt to establish a connection to the MongoDB database using the provided 'MONGO_URI' from the environment variables
        const conn = await mongoose.connect(process.env.MONGO_URI);

        // If the connection is successful, log a message indicating the successful connection and the host it connected to
        console.log(`MongoDB Connected : ${conn.connection.host}`);
    } catch (error) {
        // If there is an error during the connection attempt, log the error message
        console.log(error);

        // Exit the Node.js process with a status code of 1 to indicate an error occurred
        process.exit(1);
    }
};

// Export the 'connectDB' function so that it can be used in other parts of the application
module.exports = connectDB;
