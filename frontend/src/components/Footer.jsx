
import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{ background: '#ffffff' }} className='mt-16 border-t border-gray-200'>

      {/* Main footer grid */}
      <div className='max-w-screen-xl mx-auto px-8 lg:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>

        {/* Brand column */}
        <div className='lg:col-span-1'>
          <img src={assets.logo} alt='BuyOn Logo' className='w-28 mb-4' />
          <p className='text-sm text-gray-500 leading-relaxed max-w-xs'>
            Fashion-forward essentials curated for your everyday wardrobe. Style that speaks.
          </p>
          {/* Social icons */}
          <div className='flex gap-4 mt-6'>
            {[
              { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
              { label: 'Twitter', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
              { label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
            ].map((s) => (
              <a key={s.label} href='#' aria-label={s.label}
                className='w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:border-[#2d2420] hover:text-[#2d2420] transition-colors duration-200'>
                <svg className='w-3.5 h-3.5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Company links */}
        <div>
          <h4 className='text-xs font-semibold tracking-widest text-[#1c1c1c] uppercase mb-6'>Company</h4>
          <ul className='flex flex-col gap-3'>
            {['Home', 'About Us', 'Collection', 'Contact'].map((item) => (
              <li key={item}>
                <Link to='/'
                  className='text-sm text-gray-500 hover:text-[#1c1c1c] transition-colors duration-200'>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support links */}
        <div>
          <h4 className='text-xs font-semibold tracking-widest text-[#1c1c1c] uppercase mb-6'>Support</h4>
          <ul className='flex flex-col gap-3'>
            {['FAQ', 'Shipping & Returns', 'Size Guide', 'Track Order', 'Privacy Policy'].map((item) => (
              <li key={item}>
                <a href='#'
                  className='text-sm text-gray-500 hover:text-[#1c1c1c] transition-colors duration-200'>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className='text-xs font-semibold tracking-widest text-[#1c1c1c] uppercase mb-6'>Contact</h4>
          <ul className='flex flex-col gap-3'>
            {[
              { icon: '✉', text: 'rupsika@buyon.com' },
              { icon: '📞', text: '+91 67329384022' },
              { icon: '📍', text: 'Hyderabad, India' },
            ].map((item) => (
              <li key={item.text} className='flex items-start gap-2 text-sm text-gray-500'>
                <span className='text-xs mt-0.5'>{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className='border-t border-gray-200'>
        <div className='max-w-screen-xl mx-auto px-8 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3'>
          <p className='text-xs text-gray-400 tracking-wide'>
            &copy; 2025 BuyOn. All rights reserved.
          </p>
          <div className='flex items-center gap-6'>
            {['Terms', 'Privacy', 'Cookies'].map((item) => (
              <a key={item} href='#'
                className='text-xs text-gray-400 hover:text-[#1c1c1c] transition-colors duration-200'>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer