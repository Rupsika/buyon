import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'

const Register = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { firstName, lastName, email, password, confirmPassword } = form
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert('Please fill all fields')
      return
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    // TODO: send registration to backend
    alert('Registered successfully! Please login.')
    navigate('/login')
  }

  const inputClass = 'border border-gray-300 rounded py-2 px-3 w-full'

  return (
    <div className='border-t pt-16 px-4 sm:px-[5vw]'>
      <div className='max-w-md mx-auto'>
        <div className='text-2xl mb-4'>
          <Title text1={'CREATE'} text2={'ACCOUNT'} />
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <div className='flex gap-3'>
            <input name='firstName' autoComplete='given-name' placeholder='First name' className={inputClass} value={form.firstName} onChange={handleChange} />
            <input name='lastName' autoComplete='family-name' placeholder='Last name' className={inputClass} value={form.lastName} onChange={handleChange} />
          </div>

          <input name='email' type='email' autoComplete='email' placeholder='Email' className={inputClass} value={form.email} onChange={handleChange} />

          <input name='password' type='password' autoComplete='new-password' placeholder='Password' className={inputClass} value={form.password} onChange={handleChange} />

          <input name='confirmPassword' type='password' autoComplete='new-password' placeholder='Confirm Password' className={inputClass} value={form.confirmPassword} onChange={handleChange} />

          <button type='submit' className='bg-black text-white py-2 rounded w-full mt-2'>
            Register
          </button>

          <p className='text-sm text-center text-gray-500 mt-2'>
            Already have an account? <span className='text-black underline cursor-pointer' onClick={() => navigate('/login')}>Sign in</span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
