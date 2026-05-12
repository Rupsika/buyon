import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Product = () => {

  const { productId } = useParams()
  const navigate = useNavigate()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [activeTab, setActiveTab] = useState('description')
  const [added, setAdded] = useState(false)

  const fetchProductData = () => {
    const product = products.find(p => p._id === productId)
    if (product) {
      setProductData(product)
      setImage(product.image[0])
      setSelectedSize('')
    }
  }

  useEffect(() => {
    fetchProductData()
    window.scrollTo(0, 0)
  }, [productId, products])

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size before adding to cart.')
      return
    }
    addToCart(productData._id, selectedSize)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return productData ? (
    <div className='border-t pt-10 transition-opacity ease-in duration-500'>

      {/* ── Main Product Section ── */}
      <div className='flex gap-12 flex-col sm:flex-row'>

        {/* Left: Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>

          {/* Thumbnails */}
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll gap-2 w-full sm:w-[18%]'>
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                onClick={() => setImage(img)}
                className={`w-20 sm:w-full flex-shrink-0 cursor-pointer object-cover transition-all duration-200 ${
                  image === img ? 'border-2 border-gray-800' : 'border-2 border-transparent opacity-60 hover:opacity-100'
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className='w-full sm:w-[80%] bg-gray-50 rounded-sm overflow-hidden'>
            <img
              src={image}
              alt={productData.name}
              className='w-full h-full object-cover object-top'
              style={{ maxHeight: '600px' }}
            />
          </div>
        </div>

        {/* Right: Info */}
        <div className='flex-1 flex flex-col'>

          {/* Category badge */}
          <span className='text-xs tracking-widest text-gray-400 uppercase mb-2'>
            {productData.category} · {productData.subCategory}
          </span>

          <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 leading-snug'>
            {productData.name}
          </h1>

          {/* Stars */}
          <div className='flex items-center gap-1 mt-3'>
            {[1,2,3,4].map(i => (
              <img key={i} src={assets.star_icon} alt='star' className='w-4 h-4' />
            ))}
            <img src={assets.star_dull_icon} alt='star' className='w-4 h-4' />
            <p className='text-gray-400 text-xs ml-2'>122 reviews</p>
          </div>

          {/* Price */}
          <p className='mt-5 text-3xl font-semibold text-gray-900'>
            {currency}{productData.price}
          </p>

          {/* Description */}
          <p className='mt-4 text-sm text-gray-500 leading-relaxed md:w-4/5'>
            {productData.description}
          </p>

          <hr className='my-6' />

          {/* Size Selector */}
          <div>
            <div className='flex items-center justify-between mb-3 md:w-4/5'>
              <p className='text-sm font-semibold tracking-wide'>SELECT SIZE</p>
              <p className='text-xs text-gray-400 underline cursor-pointer hover:text-gray-600'>Size Guide</p>
            </div>
            <div className='flex gap-2 flex-wrap'>
              {productData.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[48px] px-4 py-2 text-sm font-medium transition-all duration-200 border ${
                    selectedSize === size
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-700'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className={`mt-8 md:w-4/5 py-4 text-sm font-semibold tracking-widest transition-all duration-300 ${
              added
                ? 'bg-green-600 text-white'
                : 'bg-gray-900 text-white hover:bg-gray-700'
            }`}
          >
            {added ? '✓  ADDED TO CART' : 'ADD TO CART'}
          </button>

          {/* Trust Badges */}
          <div className='mt-8 md:w-4/5 grid grid-cols-3 gap-3'>
            {[
              { icon: '✓', text: '100% Original' },
              { icon: '🚚', text: 'Cash on Delivery' },
              { icon: '↩', text: '7-Day Returns' },
            ].map((badge, i) => (
              <div key={i} className='flex flex-col items-center text-center p-3 bg-gray-50 rounded-sm'>
                <span className='text-lg mb-1'>{badge.icon}</span>
                <p className='text-xs text-gray-500'>{badge.text}</p>
              </div>
            ))}
          </div>

          {/* Payment Icons */}
          <div className='mt-6 md:w-4/5'>
            <p className='text-xs text-gray-400 mb-2'>SECURE PAYMENT</p>
            <div className='flex gap-3 items-center'>
              <img src={assets.razorpay_logo} alt='Razorpay' className='h-6 object-contain opacity-60 hover:opacity-100 transition-opacity' />
              {/* Stripe text fallback since stripe_logo may not render */}
              <div className='h-6 px-3 bg-[#635bff] rounded flex items-center'>
                <span className='text-white text-xs font-bold tracking-wide'>stripe</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Description & Reviews Tabs ── */}
      <div className='mt-20'>
        <div className='flex border-b border-gray-200'>
          {['description', 'reviews'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm capitalize tracking-wide transition-colors ${
                activeTab === tab
                  ? 'border-b-2 border-gray-900 font-semibold text-gray-900'
                  : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              {tab === 'reviews' ? 'Reviews (122)' : 'Description'}
            </button>
          ))}
        </div>

        <div className='py-8 text-sm text-gray-500 leading-relaxed'>
          {activeTab === 'description' ? (
            <div className='flex flex-col gap-4 max-w-2xl'>
              <p>{productData.description}</p>
              <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence.</p>
              <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations such as sizes and colors.</p>
            </div>
          ) : (
            <div className='flex flex-col gap-6 max-w-2xl'>
              {[
                { name: 'Alex M.',  rating: 5, text: 'Great quality! Fits perfectly and the material is very comfortable.' },
                { name: 'Sarah K.', rating: 4, text: 'Nice product, arrived quickly. Slightly different shade than in photos but still good.' },
                { name: 'Rahul P.', rating: 5, text: 'Excellent value for money. Would definitely buy again.' },
              ].map((review, i) => (
                <div key={i} className='flex gap-4 pb-6 border-b border-gray-100'>
                  <div className='w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-600 flex-shrink-0'>
                    {review.name[0]}
                  </div>
                  <div>
                    <div className='flex items-center gap-2 mb-1'>
                      <p className='font-medium text-gray-700 text-sm'>{review.name}</p>
                      <div className='flex gap-0.5'>
                        {[...Array(5)].map((_, j) => (
                          <img key={j} src={j < review.rating ? assets.star_icon : assets.star_dull_icon} alt='' className='w-3 h-3' />
                        ))}
                      </div>
                    </div>
                    <p className='text-gray-500'>{review.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Related Products ── */}
      <div className='mt-16 mb-10'>
        <div className='flex items-center gap-3 mb-8'>
          <p className='text-gray-400 tracking-widest text-xs uppercase'>Related</p>
          <p className='font-semibold text-xl'>PRODUCTS</p>
          <span className='block h-px w-10 bg-gray-400' />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
          {products
            .filter(p => p.category === productData.category && p._id !== productData._id)
            .slice(0, 5)
            .map((item, i) => (
              <div
                key={i}
                onClick={() => { navigate(`/product/${item._id}`); window.scrollTo(0, 0) }}
                className='cursor-pointer group'
              >
                <div className='overflow-hidden bg-gray-50 rounded-sm'>
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className='w-full object-cover object-top group-hover:scale-105 transition-transform duration-500'
                    style={{ height: '240px' }}
                  />
                </div>
                <p className='mt-2 text-sm text-gray-700 truncate font-medium'>{item.name}</p>
                <p className='text-sm text-gray-500'>{currency}{item.price}</p>
              </div>
            ))}
        </div>
      </div>

    </div>
  ) : (
    <div className='flex items-center justify-center h-64'>
      <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
    </div>
  )
}

export default Product