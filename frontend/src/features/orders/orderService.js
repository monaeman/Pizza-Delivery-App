import axios from 'axios';

const API_URL = '/api/orders/';

// Create a new order
const createOrder = async (orderData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, orderData, config);

  return response.data;
};

// Get user orders
const getOrders = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user order
const deleteOrder = async (orderId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + orderId, config);

  return response.data;
};

// Update an existing order
const updateOrder = async (orderData) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
console.log(orderData)
  // Assuming you have an id field in your orderData to specify which order to update
  const orderId = orderData.id;


  // Remove the id field from orderData to prevent it from being sent as a field to update
  //delete orderData.id;

  const response = await axios.put(API_URL + orderId, orderData);

  return response.data;
};

const orderService = {
  createOrder,
  getOrders,
  deleteOrder,
  updateOrder, // Added the updateOrder function to the service
};

export default orderService;
