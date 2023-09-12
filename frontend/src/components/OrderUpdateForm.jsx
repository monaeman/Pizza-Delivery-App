import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateOrder } from '../features/orders/orderSlice';

function OrderUpdateForm({ order, onUpdateComplete }) {
  const [updatedOrder, setUpdatedOrder] = useState(order);
  const dispatch = useDispatch();

  // Use useEffect to dispatch the updateOrder action whenever updatedOrder changes
  useEffect(() => {
    dispatch(updateOrder(updatedOrder))
      .unwrap()
      .then((updatedOrderData) => {
        onUpdateComplete(updatedOrderData);
      });
  }, [updatedOrder, dispatch, onUpdateComplete]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedOrder({
      ...updatedOrder,
      [name]: value,
    });
  };

  const handleUpdateClick = () => {
    // This is where you can perform additional logic if needed before dispatching the updateOrder action
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
      <button className='update-complete' onClick={handleUpdateClick}>
        Update Order
      </button>
    </div>
  );
}

export default OrderUpdateForm;
