import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder, updateOrder } from '../features/orders/orderSlice';

function OrderForm() {
  const [name, setName] = useState('');
  const [variants, setVariants] = useState('');
  const [prices, setPrices] = useState('');
  const [isEditing, setIsEditing] = useState(false); // Added isEditing state

  const dispatch = useDispatch();
  const { orderToEdit } = useSelector((state) => state.orders);

  useEffect(() => {
    if (orderToEdit) {
      // If there's an order to edit, populate the form fields with its data
      setName(orderToEdit.name);
      setVariants(orderToEdit.variants);
      setPrices(orderToEdit.prices);
      setIsEditing(true); // Set isEditing to true to indicate editing mode
    }
  }, [orderToEdit]);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      variants,
      prices,
    };

    if (isEditing) {
      // If editing, dispatch the updateOrder action
      dispatch(updateOrder({ ...formData, id: orderToEdit._id }));
    } else {
      // If not editing, dispatch the createOrder action
      dispatch(createOrder(formData));
    }

    // Clear the form fields and exit editing mode
    setName('');
    setVariants('');
    setPrices('');
    setIsEditing(false);
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Pizza of choice</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="variants">Variants</label>
          <input
            type="text"
            name="variants"
            id="variants"
            value={variants}
            onChange={(e) => setVariants(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="prices">Prices</label>
          <input
            type="text"
            name="prices"
            id="prices"
            value={prices}
            onChange={(e) => setPrices(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            {isEditing ? 'Update Order' : 'Add Order'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default OrderForm;
