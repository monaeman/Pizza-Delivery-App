const asyncHandler = require('express-async-handler')

//@desc  Get orders
//@route  Get /api/orders
//@access  Private


const getOrders = asyncHandler(async (req, res) => {
    res.status(200).json({message:'Get orders'})
})

//@desc  POST orders
//@route   /api/orders
//@access  Private

const setOrders = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')

    }
    res.status(200).json({message:'Set orders'})
   
})


//@desc  Get orders
//@route  put /api/orders/:id
//@access  Private

const updateOrders = asyncHandler(async(req, res) => {
    res.status(200).json({message:`update order ${req.params.id}`})
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