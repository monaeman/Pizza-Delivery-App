import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import OrderForm from "../components/OrderForm";
import { getOrders, reset } from "../features/orders/orderSlice";
import OrderItem from "../components/OrderItem";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { orders, isError, message } = useSelector(
    (state) => state.orders
  );

  useEffect(() => {
    if (isError) {
      // Handle error
      // console.log(message);
    }
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getOrders());
    }
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, dispatch, message]);

  const loaded = () => {
    return (
      <>
        <section className="heading">
          <h1>Welcome {user && user.name}</h1>
          <p>Order your Pizza</p>
        </section>
        <OrderForm />
        <section className="content">
          {orders.length > 0 ? (
            <div className="orders">
              {orders.map((order) => (
                <OrderItem key={order._id} order={order} />
              ))}
            </div>
          ) : (
            <h3>You have not set any orders</h3>
          )}
        </section>
      </>
    );
  };

  const loading = () => {
    return <h3>You have not set any orders</h3>;
  };

  return orders ?  loaded() : loading() ;
}

export default Dashboard;
