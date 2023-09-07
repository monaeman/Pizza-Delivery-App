const express = require('express')
const router = express.Router()
const {getOrders, setOrders, updateOrders, deleteOrders} = require('../controllers/orderControllers')


const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getOrders).post(protect ,setOrders)
router.route('/:id').delete(protect, deleteOrders).put(protect, updateOrders)




module.exports = router