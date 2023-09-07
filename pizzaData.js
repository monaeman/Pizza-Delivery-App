//const Pizza = require("./backend/model/orderModel"); // Import the pizza model

const pizzaData = [
    {
      name: "Veggie Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        { size: "small", price: 7.99 },
        { size: "medium", price: 12.99 },
        { size: "large", price: 16.99 },
      ],
      category: "veg",
      image: "https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_ZZ.jpg",
      description: "Mushrooms Broccoli Olives Peppers Cheese",
    },
    {
      name: "Meat Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        { size: "small", price: 7.99 },
        { size: "medium", price: 12.99 },
        { size: "large", price: 16.99 },
      ],
      category: "nonveg",
      image: "https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_MX.jpg",
      description: "Sausages Chicken BBQ Cheese",
    },
    {
      name: "Philly Cheese Steak Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        { size: "small", price: 7.99 },
        { size: "medium", price: 12.99 },
        { size: "large", price: 16.99 },
      ],
      category: "nonveg",
      image: "https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_PIZPH.jpg",
      description: "Philly Cheese Steak Cheese",
    },
    {
      name: "Honolulu Hawaiian Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        { size: "small", price: 7.99 },
        { size: "medium", price: 12.99 },
        { size: "large", price: 16.99 },
      ],
      category: "veg",
      image: "https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_PIZUH.jpg",
      description: "Pineapple Peppers Cheese",
    },
    {
      name: "Cheese Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        { size: "small", price: 7.99 },
        { size: "medium", price: 12.99 },
        { size: "large", price: 16.99 },
      ],
      category: "veg",
      image: "https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_PIZCZ.jpg",
      description: "Cheese",
    },
    {
      name: "Buffalo Chicken Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        { size: "small", price: 7.99 },
        { size: "medium", price: 12.99 },
        { size: "large", price: 16.99 },
      ],
      category: "nonveg",
      image: "https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_PIZBP.jpg",
      description: "Buffalo Chicken Cheese",
    },
  ];
  
  module.exports = pizzaData;