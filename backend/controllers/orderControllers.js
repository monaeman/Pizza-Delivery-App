const asyncHandler = require('express-async-handler')

const Order = require('../model/orderModel')

//@desc  Get orders
//@route  Get /api/orders
//@access  Private


const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find()
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