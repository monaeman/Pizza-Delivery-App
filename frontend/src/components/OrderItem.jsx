import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteOrder } from '../features/orders/orderSlice';

function OrderItem({ order }) {
  const dispatch = useDispatch();

  const loaded = () => {
    return (
      <div className='order'>
        <h2>{order.name}</h2>
        <h2>{order.variants}</h2>
        <h2>{"$" + order.prices}</h2>
        
        <button onClick={() => dispatch(deleteOrder(order._id))} className='close'>
          X
        </button>
      </div>
    );
  }

  const loading = () => {
    return <h1>No order to display</h1>;
  }

  return order ? loaded() : loading();
}

export default OrderItem;
