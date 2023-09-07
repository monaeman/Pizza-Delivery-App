const mongoose = require("mongoose");



// Define the pizza schema
const pizzaSchema = new mongoose.Schema({
    user:{
type: mongoose.Schema.Types.ObjectId,
 required : true,
  ref:'User'
    },
   
   
  name: {
    type: String,
    required: true,
  },
  varients: {
    type: [String],
    required: true,
  },
  prices: [
    {
      size: String,
      price: Number,
    },
  ],
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Create a model for the pizza schema
const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;