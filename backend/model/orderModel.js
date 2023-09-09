const mongoose = require("mongoose");




// Define the pizza schema
const pizzaSchema = new mongoose.Schema({
    user:{
type: mongoose.Schema.Types.ObjectId,
 //required : true,
  ref:'User'
    },
   
  
  name: {
    type: String,
    required: true,
  },
  varients: {
    type: String,
    
  },
  prices: 
    {
      type: Number,
      required: true,
    },

  category: {
    type: String,
    
  },
  image: {
    type: String,
    
  },
  description: {
    type: String,
    
  },
});

// Create a model for the pizza schema
const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;