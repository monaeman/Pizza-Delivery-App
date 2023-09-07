const express = require('express')
const router = express.Router()
const {getOrders, setOrders, updateOrders, deleteOrders} = require('../controllers/orderControllers')


router.route('/').get(getOrders).post(setOrders)
router.route('/:id').delete(deleteOrders).put(updateOrders)




module.exports = router