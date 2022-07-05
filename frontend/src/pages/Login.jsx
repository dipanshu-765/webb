import React, { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

import './Login.css'

const Login = () => {
  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector( state => state.auth )
  const { email, password } = formData

  useEffect(() => {
    if(isError) {
      toast.error('message')
    }
    if(isSuccess || user) {
      console.log(user)
      navigate('/')
    }

    dispatch(reset())                 //Sends to redux, redux calls reset function by passing state value
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = e => {
    e.preventDefault()

    const userData = {
      email,
      password
    }

    dispatch(login(userData))
  }

  if(isLoading) {
    return <Spinner />
  }

  return (
    <div className='login-form' style={{'width': '100vw', 'height': '100vh'}}>
      <div className='login-form-container'>
        <h1>
          <span className='icon'><FaSignInAlt /></span><span className='text'>Login</span>
        </h1>
        <p>LOGIN AND START PLAYING YOUR FAVOURITE MUSIC</p>

        <form className='form' onSubmit={onSubmit}>
          <div className='form-group'>
              <input
              type="email"
              className='form-control' 
              id='email' 
              name='email' 
              value={email} 
              placeholder='Enter your Email'
              onChange={onChange}
              required 
              />
          </div>
          <div className='form-group'>
              <input
              type="password"
              className='form-control' 
              id='password' 
              name='password' 
              value={password} 
              placeholder='Enter your Password'
              onChange={onChange} 
              required
              />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
                SUBMIT
            </button>
            <p>DON'T HAVE AN ACCOUNT?</p>
            <button className='btn btn-block'>
              <Link to='../register'>
                SIGN UP
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login