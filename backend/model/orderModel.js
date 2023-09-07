//const mongoose = require("mongoose"); // require mongoose
//const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor
//const model = mongoose.model; // shorthand for model function



const pizza =
[{
    "name" : " Veggie Pizza",
    "varients" : [
        "small",
        "medium",
        "large"
    ],
    "prices" :[
        {
            "small": 7.99,
            "medium" : 12.99,
            "large" : 16.99,
        }
    ],
    "category" : "veg",
    "image" : "https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_ZZ.jpg",
  "description" : " Mushrooms Broccoli Olives Peppers Cheese "
}, 

{
    "name" : " Meat Pizza",
    "varients" : [
        "small",
        "medium",
        "large"
    ],
    "prices" :[
        {
            "small": 7.99,
            "medium" : 12.99,
            "large" : 16.99,
        }
    ],
    "category" : "nonveg",
    "image" : "https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_MX.jpg",
  "description" : " Sausages Chicken BBQ Cheese "

}, 

{

    "name" : " Philly Cheese Steak Pizza",
    "varients" : [
        "small",
        "medium",
        "large"
    ],
    "prices" :[
        {
            "small": 7.99,
            "medium" : 12.99,
            "large" : 16.99,
        }
    ],
    "category" : "nonveg",
    "image" : "https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_PIZPH.jpg",
  "description" : " Philly Cheese Steak Cheese "

},

{
    "name" : " HOnolulu Hawaiian Pizza",
    "varients" : [
        "small",
        "medium",
        "large"
    ],
    "prices" :[
        {
            "small": 7.99,
            "medium" : 12.99,
            "large" : 16.99,
        }
    ],
    "category" : "veg",
    "image" : "https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_PIZUH.jpg",
  "description" : " Pinnapple Peppers Cheese "

},

{

    "name" : " Cheese Pizza",
    "varients" : [
        "small",
        "medium",
        "large"
    ],
    "prices" :[
        {
            "small": 7.99,
            "medium" : 12.99,
            "large" : 16.99,
        }
    ],
    "category" : "veg",
    "image" : "https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_PIZCZ.jpg",
  "description" : " Cheese "

},

{
    "name" : " Buffalo Chicken Pizza",
    "varients" : [
        "small",
        "medium",
        "large"
    ],
    "prices" :[
        {
            "small": 7.99,
            "medium" : 12.99,
            "large" : 16.99,
        }
    ],
    "category" : "nonveg",
    "image" : "https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_PIZBP.jpg",
  "description" : " Buffalo Chicken Cheese "

},






];

//export default pizza;
//const Pizza = model("Pizza", pizzaSchema);
module.exports = pizza;