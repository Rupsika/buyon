import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import stripe_logo from '../assets/stripe_logo.png'

const PlaceOrder = () => {
  const navigate = useNavigate()
  const { cartItems, products, currency, orders, setOrders, setCartItems } = useContext(ShopContext)
  const [method, setMethod] = useState('cod')

  const handlePlaceOrder = () => {
    const form = document.getElementById('delivery-form')
    const data = new FormData(form)

    const formData = {
      firstName: data.get('given-name'),
      lastName:  data.get('family-name'),
      email:     data.get('email'),
      street:    data.get('street-address'),
      city:      data.get('address-level2'),
      state:     data.get('address-level1'),
      zipcode:   data.get('postal-code'),
      country:   data.get('country-name'),
      phone:     data.get('tel'),
    }

    const hasEmpty = Object.values(formData).some(v => !v || !v.trim())
    if (hasEmpty) {
      alert('Please fill in all fields')
      return
    }

    // ── Create order object with cart items and delivery info ──
    const orderItems = []
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          const product = products.find(p => p._id === itemId)
          orderItems.push({
            productId: itemId,
            name: product.name,
            price: product.price,
            quantity: cartItems[itemId][size],
            size: size,
            image: product.image[0]
          })
        }
      }
    }

    const newOrder = {
      orderId: `ORD-${Date.now()}`,
      date: new Date().toLocaleDateString(),
      deliveryInfo: formData,
      items: orderItems,
      paymentMethod: method,
      status: 'Confirmed'
    }

    // ── Add order to orders array and clear cart ──
    setOrders([...orders, newOrder])
    setCartItems({})
    
    console.log('Order placed with method:', method)
    console.log('Delivery info:', formData)
    alert('Order placed successfully!')
    navigate('/orders')
  }

  const inputClass = 'border border-gray-300 rounded py-1.5 px-3.5 w-full focus:outline-none focus:border-gray-500'

  // ✅ Inline style forces color regardless of any global CSS override
  const inputStyle = {
    color: '#111827',
    backgroundColor: '#ffffff',
    caretColor: '#111827',
  }

  return (
    <div className='border-t pt-16 px-4 sm:px-[5vw]'>

      <div className='text-2xl mb-4'>
        <Title text1={'PLACE'} text2={'ORDER'} />
      </div>

      <div className='flex flex-col justify-center gap-4 lg:flex-row lg:gap-20'>

        {/* ── Delivery Information ── */}
        <form
          id='delivery-form'
          autoComplete='on'
          onSubmit={(e) => e.preventDefault()}
          className='flex flex-col gap-4 w-full lg:max-w-md'
        >
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'DELIVERY'} text2={'INFORMATION'} />
          </div>

          <div className='flex gap-3'>
            <input style={inputStyle} type='text'  name='given-name'    autoComplete='given-name'    placeholder='First name'    className={inputClass} />
            <input style={inputStyle} type='text'  name='family-name'   autoComplete='family-name'   placeholder='Last name'     className={inputClass} />
          </div>

          <input   style={inputStyle} type='email' name='email'          autoComplete='email'         placeholder='Email address' className={inputClass} />
          <input   style={inputStyle} type='text'  name='street-address' autoComplete='street-address' placeholder='Street'       className={inputClass} />

          <div className='flex gap-3'>
            <input style={inputStyle} type='text'  name='address-level2' autoComplete='address-level2' placeholder='City'         className={inputClass} />
            <input style={inputStyle} type='text'  name='address-level1' autoComplete='address-level1' placeholder='State'        className={inputClass} />
          </div>

          <div className='flex gap-3'>
            <input style={inputStyle} type='text'  name='postal-code'   autoComplete='postal-code'   placeholder='Zipcode'       className={inputClass} />
            <input style={inputStyle} type='text'  name='country-name'  autoComplete='country-name'  placeholder='Country'       className={inputClass} />
          </div>

          <input   style={inputStyle} type='tel'   name='tel'            autoComplete='tel'           placeholder='Phone'         className={inputClass} />

        </form>

        {/* ── Right Side: Payment Method & Order Summary ── */}
        <div className='flex flex-col gap-8 w-full lg:max-w-md'>

          <div>
            <div className='text-xl sm:text-2xl my-3'>
              <Title text1={'PAYMENT'} text2={'METHOD'} />
            </div>

            <div className='flex flex-col gap-3'>

              {/* ── Stripe ── */}
              <div
                onClick={() => setMethod('stripe')}
                className='flex items-center gap-3 border p-3 px-4 cursor-pointer hover:bg-gray-50 transition-colors'
              >
                <p className={`min-w-4 h-4 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                <img className='h-5 mx-3' src={stripe_logo} alt='Stripe' />
              </div>

              {/* ── Razorpay ── */}
              <div
                onClick={() => setMethod('razorpay')}
                className='flex items-center gap-3 border p-3 px-4 cursor-pointer hover:bg-gray-50 transition-colors'
              >
                <p className={`min-w-4 h-4 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                <span className='text-sm font-semibold text-blue-600 mx-3'>RAZORPAY</span>
              </div>

              {/* ── Cash on Delivery ── */}
              <div
                onClick={() => setMethod('cod')}
                className='flex items-center gap-3 border p-3 px-4 cursor-pointer hover:bg-gray-50 transition-colors'
              >
                <p className={`min-w-4 h-4 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                <span className='text-sm text-gray-600 mx-3'>CASH ON DELIVERY</span>
              </div>

            </div>
          </div>

          <div className='mt-8'>
            <CartTotal />
            <button
              onClick={handlePlaceOrder}
              className='bg-black text-white text-sm mt-8 w-full py-3 tracking-widest hover:bg-gray-800 transition-colors'
            >
              PLACE ORDER
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PlaceOrder