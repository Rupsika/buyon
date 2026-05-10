import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const location = useLocation()

  // Auto-hide search bar when navigating away from /collection
  useEffect(() => {
    if (!location.pathname.includes('collection')) {
      setShowSearch(false)
    }
  }, [location.pathname])

  if (!showSearch || !location.pathname.includes('collection')) return null

  return (
    <div className='border-b bg-gray-50 py-4 px-4'>
      <div className='max-w-xl mx-auto flex items-center gap-3 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm'>

        {/* Search icon */}
        <img src={assets.search_icon} alt='search' className='w-4 h-4 opacity-50' />

        {/* Input */}
        <input
          type='text'
          placeholder='Search for products...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent'
          autoFocus
        />

        {/* Clear button — shows only when there's text */}
        {search && (
          <button
            onClick={() => setSearch('')}
            className='text-gray-400 hover:text-gray-600 transition-colors text-lg leading-none'
          >
            ×
          </button>
        )}

        {/* Divider */}
        <span className='w-px h-4 bg-gray-200' />

        {/* Close search bar */}
        <button
          onClick={() => { setShowSearch(false); setSearch('') }}
          className='text-gray-400 hover:text-gray-700 transition-colors text-lg leading-none'
        >
          ✕
        </button>

      </div>
    </div>
  )
}

export default SearchBar