import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const TRACKING_STEPS = [
  { label: 'Order Placed',     icon: '🛒' },
  { label: 'Processing',       icon: '⚙️' },
  { label: 'Shipped',          icon: '📦' },
  { label: 'Out for Delivery', icon: '🚚' },
  { label: 'Delivered',        icon: '✅' },
]

const getStepIndex = (status) => {
  switch (status?.toLowerCase()) {
    case 'confirmed':        return 1
    case 'processing':       return 1
    case 'shipped':          return 2
    case 'out for delivery': return 3
    case 'delivered':        return 4
    default:                 return 0
  }
}

const TrackingBar = ({ status }) => {
  const currentStep = getStepIndex(status)
  return (
    <div className='mt-4 mb-2'>
      <p className='font-semibold text-gray-700 mb-4'>Order Tracking:</p>
      <div className='relative flex items-center justify-between'>
        <div className='absolute top-5 left-0 right-0 h-1 bg-gray-200 z-0' />
        <div
          className='absolute top-5 left-0 h-1 bg-black z-0 transition-all duration-500'
          style={{ width: `${(currentStep / (TRACKING_STEPS.length - 1)) * 100}%` }}
        />
        {TRACKING_STEPS.map((step, index) => {
          const isCompleted = index <= currentStep
          return (
            <div key={index} className='relative z-10 flex flex-col items-center gap-2 flex-1'>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg border-2 transition-all duration-300
                ${isCompleted ? 'bg-black border-black text-white' : 'bg-white border-gray-300 text-gray-400'}`}>
                {step.icon}
              </div>
              <p className={`text-xs text-center leading-tight ${isCompleted ? 'text-black font-medium' : 'text-gray-400'}`}>
                {step.label}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Orders = () => {
  const { orders, currency } = useContext(ShopContext)
  const [expandedOrder, setExpandedOrder] = useState(null)

  const getOrderTotal = (items) =>
    items.reduce((total, item) => total + item.price * item.quantity, 0)

  const toggleOrder = (orderId) =>
    setExpandedOrder(prev => prev === orderId ? null : orderId)

  return (
    <div className='border-t pt-16 px-4 sm:px-[5vw]'>

      <div className='text-2xl mb-8'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      {orders.length === 0 ? (
        <div className='flex flex-col items-center justify-center py-24 gap-4'>
          <p className='text-4xl'>🛍️</p>
          <p className='text-xl text-gray-400'>You have no orders yet</p>
          <p className='text-sm text-gray-400'>Start shopping to place your first order</p>
        </div>
      ) : (
        <div className='flex flex-col gap-5'>
          {orders.map((order, index) => {
            const isExpanded = expandedOrder === order.orderId
            return (
              <div key={index} className='border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow'>

                {/* ── Collapsed Header ── */}
                <div
                  className='flex flex-col sm:flex-row sm:items-center gap-4 p-5 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors'
                  onClick={() => toggleOrder(order.orderId)}
                >
                  {/* ✅ Stacked item images */}
                  <div className='flex -space-x-3 flex-shrink-0'>
                    {order.items.slice(0, 3).map((item, i) => (
                      <img
                        key={i}
                        src={item.image}
                        alt={item.name}
                        className='w-14 h-14 object-cover rounded-lg border-2 border-white shadow-sm'
                        style={{ zIndex: order.items.length - i }}
                      />
                    ))}
                    {order.items.length > 3 && (
                      <div className='w-14 h-14 rounded-lg border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600 shadow-sm'>
                        +{order.items.length - 3}
                      </div>
                    )}
                  </div>

                  {/* Order Info */}
                  <div className='flex-1 min-w-0'>
                    <p className='text-base font-semibold text-gray-800'>{order.orderId}</p>
                    <p className='text-sm text-gray-500 mt-0.5'>Placed on {order.date}</p>
                    <p className='text-sm text-gray-600 mt-1'>
                      {order.items.length} item{order.items.length > 1 ? 's' : ''}
                      &nbsp;·&nbsp;
                      <span className='font-semibold text-gray-800'>{currency}{getOrderTotal(order.items).toFixed(2)}</span>
                    </p>
                  </div>

                  {/* Status Badges */}
                  <div className='flex items-center gap-3 flex-shrink-0'>
                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                      order.status === 'Delivered'          ? 'bg-green-100 text-green-800' :
                      order.status === 'Out for Delivery'   ? 'bg-orange-100 text-orange-700' :
                      order.status === 'Shipped'            ? 'bg-blue-100 text-blue-800' :
                                                              'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                    <span className='px-3 py-1.5 bg-gray-200 text-gray-700 rounded-full text-xs font-medium'>
                      {order.paymentMethod === 'cod' ? 'Cash on Delivery' : order.paymentMethod.toUpperCase()}
                    </span>
                    <span className='text-gray-400 text-sm'>{isExpanded ? '▲' : '▼'}</span>
                  </div>
                </div>

                {/* ── Expanded Details ── */}
                {isExpanded && (
                  <div className='p-5 border-t border-gray-200 flex flex-col gap-6'>

                    {/* Tracking */}
                    <TrackingBar status={order.status} />

                    {/* Items */}
                    <div>
                      <p className='font-semibold text-gray-700 mb-3'>Items:</p>
                      <div className='flex flex-col gap-2'>
                        {order.items.map((item, itemIndex) => (
                          <div key={itemIndex} className='flex items-center gap-3 p-3 bg-gray-50 rounded-lg'>
                            <img src={item.image} alt={item.name} className='w-14 h-14 object-cover rounded-md' />
                            <div className='flex-1'>
                              <p className='text-sm font-medium text-gray-800'>{item.name}</p>
                              <div className='flex gap-4 text-xs text-gray-500 mt-1'>
                                <span>Size: {item.size}</span>
                                <span>Qty: {item.quantity}</span>
                                <span>{currency}{item.price.toFixed(2)} each</span>
                              </div>
                            </div>
                            <p className='font-semibold text-gray-800 text-sm'>
                              {currency}{(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Delivery Info */}
                    <div className='p-4 bg-blue-50 rounded-lg border border-blue-100'>
                      <p className='font-semibold text-gray-700 mb-2'>Delivery Address:</p>
                      <p className='text-sm text-gray-700'>{order.deliveryInfo.firstName} {order.deliveryInfo.lastName}</p>
                      <p className='text-sm text-gray-700'>{order.deliveryInfo.street}</p>
                      <p className='text-sm text-gray-700'>{order.deliveryInfo.city}, {order.deliveryInfo.state} {order.deliveryInfo.zipcode}</p>
                      <p className='text-sm text-gray-700'>{order.deliveryInfo.country}</p>
                      <p className='text-sm text-gray-700 mt-1'>📞 {order.deliveryInfo.phone}</p>
                      <p className='text-sm text-gray-700'>✉️ {order.deliveryInfo.email}</p>
                    </div>

                    {/* Order Total */}
                    <div className='flex justify-end border-t border-gray-200 pt-4'>
                      <div className='text-right'>
                        <p className='text-sm text-gray-500'>Order Total</p>
                        <p className='text-2xl font-bold text-gray-800'>
                          {currency}{getOrderTotal(order.items).toFixed(2)}
                        </p>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Orders