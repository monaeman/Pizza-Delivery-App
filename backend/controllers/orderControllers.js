const asyncHandler = require('express-async-handler')

const Order = require('../model/orderModel')
const User = require('../model/userModel')
//@desc  Get orders
//@route  Get /api/orders
//@access  Private

//get an order
const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user.id})
    res.status(200).json(orders)
})

//@desc  POST orders
//@route   /api/orders
//@access  Private
//create an order
const setOrders = asyncHandler(async (req, res) => {
    const { pizzaId } = req.body; // Assuming the client sends the selected pizza's id
  
    if (!pizzaId) {
      res.status(400);
      throw new Error('Please provide a valid pizza ID selection');
    }
  
    // Find the selected pizza in your data file by its id
    const selectedPizza = pizzaData.find((pizza) => pizza.id === pizzaId);
  
    if (!selectedPizza) {
      res.status(404);
      throw new Error('Pizza not found');
    }
  
    // Create an order with the selected pizza
    const order = await Order.create({
        user: req.user.id,
      pizza: selectedPizza,
    });
  
    res.status(200).json(order);
  });


//@desc  Get orders
//@route  put /api/orders/:id
//@access  Private

const updateOrders = asyncHandler(async(req, res) => {

    const order = await Order.findById(req.params.id)
    if(!order){
        res.status(400)
        throw new Error('Order not found')
    }
//check for userlogin matches the order
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    //Make sure the logged in user matches the order user
    if(order.user.toString() !== user.id){
// Check if the logged-in user matches the order user
if (order.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedOrder = await Order.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedOrder);
    }})
//@desc  delete orders
//@route  delete /api/orders/:id
//@access  Private

// Delete an order
const deleteOrders = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
  
    if (!order) {
      res.status(404);
      throw new Error('Order not found');
    }
  
    // Check if the logged-in user matches the order user
    if (order.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error('User not authorized');
    }
  
    await order.remove();
    res.status(200).json({ message: 'Order deleted' });
  });
  
  module.exports = {
    getOrders,
    setOrders,
    updateOrders,
    deleteOrders,
  };