import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import OrderForm from '../components/OrderForm'
import Spinner from '../components/Spinner'
import {getOrders, reset} from '../features/orders/orderSlice'



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
    </section>
   
  </>
}

export default Dashboard