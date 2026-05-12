import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      alert('Please enter email and password')
      return
    }
    // TODO: integrate real auth
    alert('Logged in')
    navigate('/orders')
  }

  return (
    <div className='border-t pt-16 px-4 sm:px-[5vw]'>
      <div className='max-w-md mx-auto'>
        <div className='text-2xl mb-4'>
          <Title text1={'SIGN'} text2={'IN'} />
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input
            type='email'
            name='email'
            autoComplete='email'
            placeholder='Email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border border-gray-300 rounded py-2 px-3 w-full'
          />

          <input
            type='password'
            name='password'
            autoComplete='current-password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border border-gray-300 rounded py-2 px-3 w-full'
          />

          <button type='submit' className='bg-black text-white py-2 rounded w-full'>
            Sign In
          </button>

          <p className='text-sm text-center text-gray-500'>
            Don't have an account? <span className='text-black underline cursor-pointer' onClick={() => navigate('/register')}>Register</span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
