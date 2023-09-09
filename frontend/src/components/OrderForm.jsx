import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'



function OrderForm() {

    const [text, setText] = useState('')
    const onSubmit = e => {
        e.preventDefault()
    }
  return (
    <section className ='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Order</label>
                <input type='text' name='text' id='text' 
                value={text} onChange= {(e) => setText(e.target.value)} />
            </div>
        </form>
    </section>
  
)}

export default OrderForm