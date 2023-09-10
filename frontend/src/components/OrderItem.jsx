import { useDispatch } from 'react-redux'
import { deleteOrder } from '../features/orders/orderSlice'

function OrderItem({ order }) {
  const dispatch = useDispatch()

  return (
    <div className='order'>
      {/* <div>{new Date(order.createdAt).toLocaleString('en-US')}</div> */}
      <h2>{order.name}</h2>
      <h2>{order.varients}</h2>
      <h2>{order.prices}</h2>
      <button onClick={() => dispatch(deleteOrder(order._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default OrderItem