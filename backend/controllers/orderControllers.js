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



const updateOrders = asyncHandler(async (req, res) => {
    
   
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
  
    
  
  await Order.findByIdAndRemove(req.params.id)
  
    res.status(200).json({ id: req.params.id })
  })
module.exports = {
  getOrders,
  setOrders,
  updateOrders,
  deleteOrders,
};