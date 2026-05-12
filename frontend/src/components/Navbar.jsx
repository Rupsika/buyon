import React, { useState, useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const { setShowSearch, getCartCount } = useContext(ShopContext)

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      {/* Logo */}
      <Link to='/' className='flex-shrink-0'>
        <img src={assets.logo} className='w-36 h-auto object-contain' alt='Logo' />
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden sm:flex gap-8 text-base lg:text-lg text-gray-700'>
        <NavLink to='/' end className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      {/* Right Icons */}
      <div className='flex items-center gap-6'>

        {/* Search */}
        <img
          src={assets.search_icon}
          className='w-5 cursor-pointer'
          alt='Search'
          onClick={() => setShowSearch(prev => !prev)}
        />

        {/* Profile Dropdown */}
        <div className='group relative'>
          <img src={assets.profile_icon} className='w-5 cursor-pointer' alt='Profile' />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-40 py-3 px-4 bg-slate-100 text-gray-700 rounded shadow-lg border border-gray-200'>
              <Link to='/profile' className='text-sm hover:text-black'>My Profile</Link>
              <Link to='/orders' className='text-sm hover:text-black'>Orders</Link>
              <Link to='/login' className='text-sm hover:text-black'>Login</Link>
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt='Cart' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white text-[8px] rounded-full'>
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt='Menu'
        />
      </div>

      {/* Mobile Sidebar */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-700'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='Back' />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-200 text-base' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-200 text-base' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-200 text-base' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-200 text-base' to='/contact'>CONTACT</NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar