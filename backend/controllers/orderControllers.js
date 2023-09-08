const asyncHandler = require('express-async-handler');
// Import pizzaData if needed
 const pizzaData = require('../model/pizzaData')

const Order = require('../model/orderModel');
const user = require('../model/userModel');

//@desc Get orders
//@route GET /api/orders
//@access Private

const getOrders = asyncHandler(async (req, res) => {
 // const orders = await Order.find({ user: req.user.id });
 const orders = await Order.find({})
  res.status(200).json(orders);
});

//@desc POST orders
//@route POST /api/orders
//@access Private
// Create an order
const setOrders = asyncHandler(async (req, res) => {
  const {  name, varients, prices } = req.body;

  console.log(req.body)
const order = await Order.create({
    name, 
    varients,
    prices
})
console.log(order)

  res.status(200).json({message: 'setOrder'});
});

//@desc Update orders
//@route PUT /api/orders/:id
//@access Private

// const updateOrders = asyncHandler(async (req, res) => {
//   const order = await Order.findById(req.params.id);

//   if (!order) {
//     res.status(404);
//     throw new Error('Order not found');
//   }

//   // Check if the logged-in user matches the order user
//   if (order.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error('User not authorized');
//   }

//   // Update the order fields based on your order model
//   order.pizzaId = req.body.pizzaId;
//   order.name = req.body.name;
//   order.varients = req.body.varients;
//   order.prices = req.body.prices;

//   const updatedOrder = await order.save();

//   res.status(200).json(updatedOrder);
// });

const updateOrders = asyncHandler(async (req, res) => {
    // const goal = await Goal.findById(req.params.id)
   
    //  if (!order) {
    //    res.status(400)
    //    throw new Error('Order not found')
    //  }
   //find the ID
   
    //  // Check for user
    //  if (!req.user) {
    //    res.status(401)
    //    throw new Error('User not found')
    //  }
   
    //  // Make sure the logged in user matches the order user
    //  if (order.user.toString() !== req.user.id) {
    //    res.status(401)
    //    throw new Error('User not authorized')
    //  }
   
     const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
       new: true,
      
     })
     console.log(updatedOrder)
   
     res.status(200).json(updatedOrder)
   })
   


//@desc Delete orders
//@route DELETE /api/orders/:id
//@access Private

// Delete an order
const deleteOrders = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
  
    // if (!order) {
    //   res.status(400)
    //   throw new Error('Goal not found')
    // }
  
    // // Check for user
    // if (!req.user) {
    //   res.status(401)
    //   throw new Error('User not found')
    // }
  
    // // Make sure the logged in user matches the goal user
    // if (order.user.toString() !== req.user.id) {
    //   res.status(401)
    //   throw new Error('User not authorized')
    // }
  
  await Order.findByIdAndRemove(req.params.id)
  
    res.status(200).json({ id: req.params.id })
  })
module.exports = {
  getOrders,
  setOrders,
  updateOrders,
  deleteOrders,
};