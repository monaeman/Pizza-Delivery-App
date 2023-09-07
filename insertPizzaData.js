// Import the Pizza model and pizzaData
const Pizza = require('./backend/model/orderModel')
const pizzaData = require("./pizzaData");

// Function to insert pizza data into the database
async function insertPizzaData() {
  try {
    // Database connection code here (if not already connected)

    // Insert pizza data into the database using the Pizza model
    await Pizza.insertMany(pizzaData);

    console.log("Pizza data inserted successfully.");
  } catch (error) {
    console.error("Error inserting pizza data:", error);
  } finally {
    // Database disconnect code here (if necessary)
  }
}

// Call the function to insert pizza data
insertPizzaData();



