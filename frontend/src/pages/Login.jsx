import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
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
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
      <section className='pizza-images'>
  <div className='pizza-group'>
    <div className='pizza-image'>
      <img src="https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_MX.jpg" alt="Pizza 1" width="200" height="150" />
    </div>
    <div className='pizza-image'>
      <img src="https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_ZZ.jpg" alt="Pizza 2" width="200" height="150" />
    </div>
    <div className='pizza-image'>
      <img src="https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_PIZPH.jpg" alt="Pizza 3" width="200" height="150" />
    </div>
  </div>

  <div className='pizza-group'>
    <div className='pizza-image'>
      <img src="https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_PIZCZ.jpg" alt="Pizza 1" width="200" height="150" />
    </div>
    <div className='pizza-image'>
      <img src="https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_PIZUH.jpg" alt="Pizza 2" width="200" height="150" />
    </div>
    <div className='pizza-image'>
      <img src="https://cache.dominos.com/olo/6_116_2/assets/build/market/US/_en/images/img/products/larges/S_PIZBP.jpg" alt="Pizza 3" width="200" height="150" />
    </div>
  </div>
  {/* Add more pizza groups as needed */}
</section>

    </>
  )
}

export default Login