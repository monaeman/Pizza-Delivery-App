// OrderUpdateForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateOrder } from '../features/orders/orderSlice';

function OrderUpdateForm({ order, onUpdateComplete }) {
  const [updatedOrder, setUpdatedOrder] = useState(order);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedOrder({
      ...updatedOrder,
      [name]: value,
    });
  };

  const handleUpdateClick = () => {
    dispatch(updateOrder(updatedOrder))
      .unwrap()
      .then((updatedOrderData) => {
        onUpdateComplete(updatedOrderData);
      });
  };

  return (
    <div className='order-update-form'>
      <input
        type='text'
        name='name'
        value={updatedOrder.name}
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='variants'
        value={updatedOrder.variants}
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='prices'
        value={updatedOrder.prices}
        onChange={handleInputChange}
      />
      <button onClick={handleUpdateClick} className='update-complete'>
        Update Order
      </button>
    </div>
  );
}

export default OrderUpdateForm;