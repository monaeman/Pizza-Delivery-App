const asyncHandler = require('express-async-handler')

const Order = require('../model/orderModel')
const User = require('../model/userModel')
//@desc  Get orders
//@route  Get /api/orders
//@access  Private


const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user.id})
    res.status(200).json(orders)
})

//@desc  POST orders
//@route   /api/orders
//@access  Private

const setOrders = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')

    }
    const order = await Order.create({
        text: req.body.text
    })
    res.status(200).json(order)
   
})


//@desc  Get orders
//@route  put /api/orders/:id
//@access  Private

const updateOrders = asyncHandler(async(req, res) => {

    const order = await Order.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Order not found')
    }
//check for user
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    //Make sure the logged in user matches the order user
    if(order.user.toString() !== user.id){
//check for user
const user = await User.findById(req.user.id)
if(!user){
    res.status(401)
    throw new Error('User not found')
}
//Make sure the logged in user matches the order user
if(order.user.toString() !== user.id){
    res.status(401)
    throw new Error ('user not authorized')
}

        res.status(401)
        throw new Error ('user not authorized')
    }
    const updatedOrder = await Order.findByIdUpdate(req.params.id, req.body, {
        new: true,
    } )
    res.status(200).json(updatedOrder)
})
//@desc  delete orders
//@route  delete /api/orders/:id
//@access  Private

const deleteOrders = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Delete order ${req.params.id}`})
})



module.exports = {
    getOrders,
    setOrders,
    updateOrders,
    deleteOrders,
}