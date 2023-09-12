// Define an error handler middleware function with four parameters: err, req, res, and next.
const errorHandler = (err, req, res, next) => {
    // Determine the HTTP status code to send in the response.
    // If res.statusCode is already defined, use it; otherwise, default to 500 (Internal Server Error).
    const statusCode = res.statusCode ? res.statusCode : 500;

    // Set the HTTP status code for the response.
    res.status(statusCode);

    // Send a JSON response containing error information.
    res.json({
        message: err.message, // Include the error message in the response.
        stack: process.env.NODE_ENV === 'production' ? null : err.stack // Include the error stack trace only in non-production environments.
    });
}

// Export the errorHandler function to make it available for use in other parts of the application.
module.exports = {
    errorHandler,
};
