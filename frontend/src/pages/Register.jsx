import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { FaSignInAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'

import { reset, register } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import './Register.css'

const Register = () => {
  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const { name, email, password } = formData
  const { user, isLoading, isError, isSuccess, message } = useSelector( state => state.auth )

  useEffect(()=>{
    if(isError) {
      toast.error('message')
    }

    if(isSuccess || user) 
      navigate('/')

    dispatch(reset())
  }, [user, isLoading, isError, isSuccess, message, navigate, dispatch])

  const onChange = e => {
    setFormData(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
      })
    )
  }

  const onSubmit = e => {
    dispatch(register(formData))
    e.preventDefault()
  }

  if(isLoading) {
    return <Spinner />
  }
  
  return (
    <div className='register-form' style={{'width': '100vw', 'height': '100vh'}}>
      <div className='register-form-container'>
        <h1>
          <span className='icon'><FaSignInAlt /></span><span className='text'>SIGN UP</span>
        </h1>
        <p>SIGN UP AND START PLAYING YOUR FAVOURITE MUSIC</p>

        <form className='form' onSubmit={onSubmit}>
          <div className='form-group'>
              <input
              className='form-control' 
              id='name' 
              name='name' 
              value={name} 
              placeholder='Enter your Name'
              onChange={onChange} 
              required
              />
          </div>
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
            <p>ALREADY HAVE AN ACCOUNT?</p>
            <button className='btn btn-block'>
              <Link to='../login'>
                LOGIN
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register