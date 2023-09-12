import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteOrder, updateOrder } from "../features/orders/orderSlice";
import { OrderUpdateForm } from "./OrderUpdateForm";

function OrderItem({ order }) {
  const dispatch = useDispatch();

  const [newName, setNewName] = useState(order.name);
  const [newVariants, setNewVariants] = useState(order.variants);
  const [newPrices, setNewPrices] = useState(order.prices);
  const [isEditing, setIsEditing] = useState(false);

  const onUpdateClick = (id) => {
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

    // Update local storage
    const updatedOrders = JSON.parse(localStorage.getItem("orders")).map(
      (order) =>
        order._id === id
          ? {
              ...order,
              name: newName,
              variants: newVariants,
              prices: newPrices,
            }
          : order
    );

    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    setIsEditing(false);
  };

  const onDeleteClick = (id) => {
    dispatch(deleteOrder(id));

    // Remove the deleted order from local storage
    const updatedOrders = JSON.parse(localStorage.getItem("orders")).filter(
      (order) => order._id !== id
    );

    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    // Load orders from local storage on component mount
    const orders = JSON.parse(localStorage.getItem("orders"));
    if (orders) {
      const foundOrder = orders.find((o) => o._id === order._id);
      if (foundOrder) {
        setNewName(foundOrder.name);
        setNewVariants(foundOrder.variants);
        setNewPrices(foundOrder.prices);
      }
    }
  }, [order._id]);

  return (
    <div className="order">
      {isEditing ? (
        <>
          <input
            type="text"
            placeholder="New Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="text"
            placeholder="New Variants"
            value={newVariants}
            onChange={(e) => setNewVariants(e.target.value)}
          />
          <input
            type="text"
            placeholder="New Prices"
            value={newPrices}
            onChange={(e) => setNewPrices(e.target.value)}
          />
          <button onClick={() => onUpdateClick(order._id)} className="update">
            Update
          </button>
        </>
      ) : (
        <>
          <h2>{newName}</h2>
          <h2>{newVariants}</h2>
          <h2>{"$" + newPrices}</h2>
          <button onClick={handleEditClick} className="edit">
            Edit
          </button>
          <button onClick={() => onDeleteClick(order._id)} className="close">
            X
          </button>
        </>
      )}
    </div>
  );
}

export default OrderItem;
