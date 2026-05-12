import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {
  const { cartItems, products, currency, delivery_fee } = useContext(ShopContext)

  // ── Calculate subtotal ──────────────────────────────────
  const getSubTotal = () => {
    let subTotal = 0
    for (const itemId in cartItems) {
      let itemInfo = products.find(product => product._id === itemId)
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          subTotal += itemInfo.price * cartItems[itemId][size]
        }
      }
    }
    return subTotal
  }

  return (
    <div>
      <div className='w-full'>
        <div className='text-2xl'>
          <Title text1={'CART'} text2={'TOTALS'} />
        </div>

        <div className='flex flex-col gap-2 mt-2 text-sm'>
          <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{currency} {getSubTotal().toFixed(2)}</p>
          </div>

          <hr className='my-2' />

          <div className='flex justify-between'>
            <p>Shipping Fee</p>
            <p>{currency} {delivery_fee.toFixed(2)}</p>
          </div>

          <hr className='my-2' />

          <div className='flex justify-between text-base font-bold'>
            <p>Total</p>
            <p>{currency} {getSubTotal() === 0 ? (0).toFixed(2) : (getSubTotal() + delivery_fee).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
