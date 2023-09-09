import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import OrderForm from '../components/OrderForm'
import Spinner from '../components/Spinner'
import {getOrders, reset} from '../features/orders/orderSlice'
import OrderItem from '../components/OrderItem'




function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state)=> state.auth)
  const {orders, isLoading, isError, message } = useSelector((state) => state.orders)
  
  
  
  useEffect(()=> {
    if(isError){
      console.log(message);
    }
    if(!user){
      navigate('/login')
    }
    dispatch(getOrders())
    return() => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])


if(isLoading){
  return <Spinner />
}
  return <>
    <section className="heading">
<h1>Welcome {user && user.name}</h1>
<p>Order Dashboard</p>
<OrderForm />
<section className="content"></section>
{orders.length > 0 ? (
  <div className="orders">
    {orders.map((order) => (
      <OrderItem  key={order._id} order={order}/>
    ))}
  </div>
) : (<h3> you have not set any orders </h3>) }
    </section>
   
  </>
}

export default Dashboard