// OrderItem.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteOrder, updateOrder } from '../features/orders/orderSlice';

function OrderItem({ order }) {
  const dispatch = useDispatch();

  // State variables to manage user input
  const [newName, setNewName] = useState(order.name);
  const [newVariants, setNewVariants] = useState(order.variants);
  const [newPrices, setNewPrices] = useState(order.prices);
  const [isEditing, setIsEditing] = useState(false);

  const onUpdateClick = (id) => {
    // Dispatch the updateOrder action with the new data
    dispatch(
      updateOrder({
        id,
        updatedData: {
          name: newName,
          variants: newVariants,
          prices: newPrices,
        },
      })
    );

    // Update the local storage as well
    const updatedOrders = JSON.parse(localStorage.getItem('orders')).map((order) =>
      order._id === id
        ? { ...order, name: newName, variants: newVariants, prices: newPrices }
        : order
    );

    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    setIsEditing(false); // Exit edit mode after updating
  };

  const onDeleteClick = (id) => {
    // Dispatch the deleteOrder action
    dispatch(deleteOrder(id));

    // Remove the deleted order from local storage
    const updatedOrders = JSON.parse(localStorage.getItem('orders')).filter(
      (order) => order._id !== id
    );

    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className='order'>
      {isEditing ? (
        <>
          <input
            type='text'
            placeholder='New Name'
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type='text'
            placeholder='New Variants'
            value={newVariants}
            onChange={(e) => setNewVariants(e.target.value)}
          />
          <input
            type='text'
            placeholder='New Prices'
            value={newPrices}
            onChange={(e) => setNewPrices(e.target.value)}
          />
          <button onClick={() => onUpdateClick(order._id)} className='update'>
            Update
          </button>
        </>
      ) : (
        <>
          <h2>{newName}</h2>
          <h2>{newVariants}</h2>
          <h2>{"$" + newPrices}</h2>
          <button onClick={handleEditClick} className='edit'>
            Edit
          </button>
          <button onClick={() => onDeleteClick(order._id)} className='close'>
            X
          </button>
        </>
      )}
    </div>
  );
}

export default OrderItem;
