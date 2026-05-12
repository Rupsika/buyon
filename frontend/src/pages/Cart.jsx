import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  const { products, currency, cartItems, setCartItems } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    const tempData = []
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({ _id: itemId, size, quantity: cartItems[itemId][size] })
        }
      }
    }
    setCartData(tempData)
  }, [cartItems])

  const updateQuantity = (itemId, size, quantity) => {
    let data = structuredClone(cartItems)
    data[itemId][size] = quantity
    setCartItems(data)
  }

  const removeFromCart = (itemId, size) => {
    let data = structuredClone(cartItems)
    delete data[itemId][size]
    setCartItems(data)
  }

  const increaseQuantity = (itemId, size) => {
    let data = structuredClone(cartItems)
    data[itemId][size] += 1
    setCartItems(data)
  }

  const decreaseQuantity = (itemId, size) => {
    let data = structuredClone(cartItems)
    if (data[itemId][size] > 1) {
      data[itemId][size] -= 1
      setCartItems(data)
    } else {
      removeFromCart(itemId, size)
    }
  }

  return (
    <div className='border-t pt-14'>

      {/* Title */}
      <div className='text-2xl mb-6'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {cartData.length === 0 ? (
        /* ── Empty State ── */
        <div className='flex flex-col items-center justify-center py-24 gap-4'>
          <img src={assets.cart_icon} alt='empty cart' className='w-16 opacity-20' />
          <p className='text-xl text-gray-400'>Your cart is empty</p>
          <p className='text-sm text-gray-400'>Looks like you haven't added anything yet.</p>
          <button
            onClick={() => navigate('/collection')}
            className='mt-4 bg-black text-white px-8 py-3 text-sm tracking-widest hover:bg-gray-800 transition-colors'
          >
            CONTINUE SHOPPING
          </button>
        </div>
      ) : (
        <div>
          {/* ── Cart Items ── */}
          <div className='flex flex-col'>
            {cartData.map((item, index) => {
              const productData = products.find(p => p._id === item._id)
              return (
                <div
                  key={index}
                  className='py-5 border-t border-gray-100 grid grid-cols-[4fr_1fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
                >
                  {/* Product Info */}
                  <div className='flex items-center gap-4 sm:gap-6'>
                    <img
                      className='w-20 sm:w-24 object-cover cursor-pointer rounded-sm'
                      src={productData.image[0]}
                      alt={productData.name}
                      onClick={() => navigate(`/product/${item._id}`)}
                    />
                    <div>
                      <p
                        className='text-sm sm:text-base font-medium cursor-pointer hover:underline underline-offset-2'
                        onClick={() => navigate(`/product/${item._id}`)}
                      >
                        {productData.name}
                      </p>
                      <p className='text-lg font-semibold mt-1'>
                        {currency}{productData.price.toFixed(2)}
                      </p>
                      <span className='inline-block mt-2 px-3 py-0.5 border border-gray-300 text-xs text-gray-600 bg-gray-50'>
                        {item.size}
                      </span>
                    </div>
                  </div>

                  {/* Quantity Control */}
                  <div className='flex items-center border border-gray-300 w-fit rounded-sm overflow-hidden'>
                    <button
                      onClick={() => decreaseQuantity(item._id, item.size)}
                      className='px-3 py-2 text-base hover:bg-gray-100 active:bg-gray-200 transition-colors'
                    >
                      −
                    </button>
                    <input
                      onChange={(e) =>
                        e.target.value === '' || e.target.value === '0'
                          ? removeFromCart(item._id, item.size)
                          : updateQuantity(item._id, item.size, Number(e.target.value))
                      }
                      className='w-10 text-center text-sm border-l border-r border-gray-300 py-2 outline-none'
                      type='number'
                      min={1}
                      value={item.quantity}
                    />
                    <button
                      onClick={() => increaseQuantity(item._id, item.size)}
                      className='px-3 py-2 text-base hover:bg-gray-100 active:bg-gray-200 transition-colors'
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal + Remove */}
                  <div className='flex flex-col items-end gap-2'>
                    <p className='text-sm font-medium hidden sm:block text-gray-500'>
                      {currency}{(productData.price * item.quantity).toFixed(2)}
                    </p>
                    <img
                      onClick={() => removeFromCart(item._id, item.size)}
                      className='w-4 cursor-pointer opacity-40 hover:opacity-100 transition-opacity'
                      src={assets.bin_icon}
                      alt='remove'
                    />
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── Totals & Checkout ── */}
          <div className='flex justify-end mt-10 mb-20'>
            <div className='w-full sm:w-[420px]'>
              <CartTotal />
              <button
                onClick={() => navigate('/place-order')}
                className='bg-black text-white text-sm mt-6 px-8 py-3 w-full tracking-widest hover:bg-gray-800 transition-colors'
              >
                PROCEED TO CHECKOUT
              </button>
              <button
                onClick={() => navigate('/collection')}
                className='mt-3 w-full text-sm text-gray-500 underline underline-offset-4 hover:text-black transition-colors'
              >
                Continue Shopping
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  )
}

export default Cart