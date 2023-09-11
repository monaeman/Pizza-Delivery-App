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
    setIsEditing(false); // Exit edit mode after updating
  };

  const onDeleteClick = (id) => {
    dispatch(deleteOrder(id));
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
