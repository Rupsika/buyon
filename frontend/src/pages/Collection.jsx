import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter]         = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory]             = useState([])
  const [subCategory, setSubCategory]       = useState([])
  const [sortType, setSortType]             = useState('relevant')

  // ── Toggle category in/out ───────────────────────────────
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  // ── Toggle subCategory in/out ────────────────────────────
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  // ── Filter by category + subCategory ────────────────────
  const applyFilter = () => {
    let copy = [...products]
    if (category.length > 0) {
      copy = copy.filter(item => category.includes(item.category))
    }
    if (subCategory.length > 0) {
      copy = copy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProducts(copy)
  }

  // ── Sort the already-filtered list ───────────────────────
  const applySort = () => {
    setFilterProducts(prev => {
      const copy = [...prev]
      switch (sortType) {
        case 'low-high':  return copy.sort((a, b) => a.price - b.price)
        case 'high-low': return copy.sort((a, b) => b.price - a.price)
        // 'newest' removed — products have no date field
        default:           return copy
      }
    })
  }

  useEffect(() => { setFilterProducts(products) }, [products])
  useEffect(() => { applyFilter() },               [category, subCategory])
  useEffect(() => { applySort() },                 [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* ── Filter sidebar ── */}
      <div className='min-w-60'>

        <p
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            className={`h-3 sm:hidden transition-transform ${showFilter ? 'rotate-90' : ''}`}
            src={assets.arrow_icon}
            alt='arrow icon'
          />
        </p>

        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden sm:block'}`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Men', 'Women', 'Kids'].map(cat => (
              <label key={cat} className='flex gap-2 cursor-pointer'>
                <input className='w-3' type='checkbox' value={cat} onChange={toggleCategory} />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* Subcategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden sm:block'}`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Topwear', 'Bottomwear', 'Winterwear'].map(sub => (
              <label key={sub} className='flex gap-2 cursor-pointer'>
                <input className='w-3' type='checkbox' value={sub} onChange={toggleSubCategory} />
                {sub}
              </label>
            ))}
          </div>
        </div>

      </div>

      {/* ── Right side: title + sort + grid ── */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={'COLLECTIONS'} />

          {/* Sort dropdown */}
          <select
            className='border-2 border-gray-300 text-sm px-2'
            onChange={e => setSortType(e.target.value)}
            value={sortType}
          >
            <option value='relevant'>Sort by: Relevant</option>
            <option value='low-high'>Sort by: Low to High</option>
            <option value='high-low'>Sort by: High to Low</option>
          </select>
        </div>

        {/* Product grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Collection