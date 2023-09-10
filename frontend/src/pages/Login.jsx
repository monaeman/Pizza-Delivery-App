import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {login , reset} from '../features/auth/authSlice'
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner'; // Import your Spinner component here

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showDescription, setShowDescription] = useState(false);
  const [descriptionText, setDescriptionText] = useState('');

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  const toggleDescription = (description) => {
    setDescriptionText(description);
    setShowDescription(!showDescription);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting orders</p>
      </section>

      <section className='form'>
        {/* Your login form code here */}
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* Pizza Images */}
      <section className='pizza-images'>
        <div className='container'>
          <div className='row'>
            {/* First Column */}
            <div className='col-md-4'>
              <div className='pizza-image'>
                <img
                  src="https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_MX.jpg"
                  alt="Pizza 1"
                  width="200"
                  height="150"
                  onClick={() =>
                    toggleDescription('Veggie Pizza : Mushrroms Broccoli Olives and Peppers')
                  }
                />
                {showDescription && (
                  <div className='pizza-description'>{descriptionText}</div>
                )}
              </div>
            </div>

            <div className='col-md-4'>
              <div className='pizza-image'>
                <img
                  src="https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_PIZPH.jpg"
                  alt="Pizza 2"
                  width="200"
                  height="150"
                  onClick={() =>
                    toggleDescription('Meat Pizza : Sausages Chicken BBQ Pizza')
                  }
                />
                {showDescription && (
                  <div className='pizza-description'>{descriptionText}</div>
                )}
              </div>
            </div>

            <div className='col-md-4'>
              <div className='pizza-image'>
                <img
                  src="https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_PIZUH.jpg"
                  alt="Pizza 3"
                  width="200"
                  height="150"
                  onClick={() =>
                    toggleDescription('Philly Cheese Steak Pizza')
                  }
                />
                {showDescription && (
                  <div className='pizza-description'>{descriptionText}</div>
                )}
              </div>
            </div>

             {/* Second Row */}
          <div className='row'>
            {/* First Column */}
            <div className='col-md-4'>
              <div className='pizza-image'>
                <img
                  src="https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_PIZCZ.jpg"
                  alt="Pizza 4"
                  width="200"
                  height="150"
                  onClick={() =>
                    toggleDescription('Pinnapple Peppers Cheese Pizza')
                  }
                />
                {showDescription && (
                  <div className='pizza-description'>{descriptionText}</div>
                )}
              </div>
            </div>

            <div className='col-md-4'>
              <div className='pizza-image'>
                <img
                  src="https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_PIZBP.jpg"
                  alt="Pizza 5"
                  width="200"
                  height="150"
                  onClick={() =>
                    toggleDescription('Cheese Pizza.')
                  }
                />
                {showDescription && (
                  <div className='pizza-description'>{descriptionText}</div>
                )}
              </div>
            </div>

            <div className='col-md-4'>
              <div className='pizza-image'>
                <img
                  src="https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_MX.jpg"
                  alt="Pizza 6"
                  width="200"
                  height="150"
                  onClick={() =>
                    toggleDescription('Buffalo Chicken Pizza ')
                  }
                />
                {showDescription && (
                  <div className='pizza-description'>{descriptionText}</div>
                )}
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Login;
