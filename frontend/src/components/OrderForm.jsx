import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {createOrder} from '../features/orders/orderSlice'



function OrderForm() {

const [name, setName] = useState('');
    const [variants, setVariants] = useState('');
    const [prices, setPrices] = useState('');

    const [text, setText] = useState('')

    const dispatch = useDispatch()
    const onSubmit = e => {
        e.preventDefault();
         // Create an object with all the form data
         const formData = {
            name,
            variants,
            prices,
            text,
        };

        // Dispatch the action with the form data
        dispatch(createOrder(formData));

        // Clear the form fields
        setName('');
        setVariants('');
        setPrices('');
        setText('');
    };
  return (
    <section className ='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
            <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                    />
            </div>
            <div className="form-group">
                <button className="btn btn-block"
                type='submit'>
                    Add Order
                </button>
            </div>
        </form>
    </section>
  
)}

export default OrderForm