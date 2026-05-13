import React, { useState } from 'react'
import Title from '../components/Title'
import contactus from '../assets/contactus.png'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all fields')
      return
    }
    setSubmitted(true)
  }

  const inputClass = 'border border-gray-300 rounded py-2 px-3 w-full focus:outline-none focus:border-black transition-colors'

  return (
    <div className='border-t pt-16 px-4 sm:px-[5vw]'>

      {/* Header */}
      <div className='text-2xl text-center mb-10'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='flex flex-col md:flex-row gap-12 mb-20 items-start'>

        {/* Left — Store Info */}
        <div className='w-full md:w-1/2 flex flex-col gap-6 text-gray-600'>

          <div className='w-full flex justify-center'>
            <img
              src={contactus}
              alt='Contact Us'
              className='w-auto max-w-full max-h-[400px] object-contain rounded-lg shadow-md'
            />
          </div>

          <div>
            <h3 className='text-black font-semibold text-lg mb-2'>Our Store</h3>
            <p className='text-sm leading-relaxed'>
              Hyderabad, Telangana, India
            </p>
          </div>

          <div>
            <h3 className='text-black font-semibold text-lg mb-2'>Get In Touch</h3>
            <p className='text-sm'>Tel: +91 6281686161</p>
            <p className='text-sm'>Email: rupsika11@gmail.com</p>
          </div>

          <div>
            <h3 className='text-black font-semibold text-lg mb-2'>Careers at Our Store</h3>
            <p className='text-sm text-gray-500 mb-3'>
              Learn more about our teams and job openings.
            </p>
            <button className='border border-black text-black text-sm py-2 px-6 rounded hover:bg-black hover:text-white transition-colors'>
              Explore Jobs
            </button>
          </div>
        </div>

        {/* Right — Contact Form */}
        <div className='w-full md:w-1/2'>
          <h3 className='text-black font-semibold text-lg mb-6'>Send Us a Message</h3>

          {submitted ? (
            <div className='border border-gray-200 rounded p-8 text-center flex flex-col gap-3'>
              <span className='text-4xl'>✓</span>
              <p className='font-semibold text-black text-lg'>Message Sent!</p>
              <p className='text-gray-500 text-sm'>
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
                className='mt-2 text-sm underline text-gray-500 cursor-pointer'
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <input
                name='name'
                type='text'
                autoComplete='name'
                placeholder='Your name'
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                name='email'
                type='email'
                autoComplete='email'
                placeholder='Your email address'
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
              <textarea
                name='message'
                rows={6}
                placeholder='Your message...'
                value={form.message}
                onChange={handleChange}
                className={inputClass + ' resize-none'}
              />
              <button
                type='submit'
                className='bg-black text-white py-2 rounded w-full hover:bg-gray-800 transition-colors'
              >
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  )
}

export default Contact