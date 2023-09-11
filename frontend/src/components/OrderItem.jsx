import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteOrder, updateOrder } from '../features/orders/orderSlice';

function OrderItem({ order }) {
  const dispatch = useDispatch();

  const onUpdateClick = (id, updatedData) => {
    dispatch(updateOrder({ id, updatedData }));
  }

  const onDeleteClick = (id) => {
    dispatch(deleteOrder(id));
  }

  return (
    <div className='order'>
      <h2>{order.name}</h2>
      <h2>{order.variants}</h2>
      <h2>{"$" + order.prices}</h2>
      
      <button onClick={() => onUpdateClick(order._id, { name: 'New Name', variants: 'New Variants', prices: 10 })} className='update'>
        Update
      </button>

      <button onClick={() => onDeleteClick(order._id)} className='close'>
        X
      </button>
    </div>
  );
}

export default OrderItem;
