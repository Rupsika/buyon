import React from 'react'
import { assets } from '../assets/assets' // ← missing import

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-around gap-6 my-10'>
      {/* gap-612my-10 → gap-6 my-10 (was merged) */}

      <div className='text-center'>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt='Exchange Icon' />
        <p className='font-semibold'>Easy Exchange Policy</p>  {/* missing closing quote on className */}
        <p className='text-gray-500 text-sm mt-2'>Hassle-free returns and exchanges within 30 days.</p>
      </div>

      <div className='text-center'>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt='Quality Icon' />
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-500 text-sm mt-2'>We provide 7 days free return policy.</p>
      </div>

      <div className='text-center'>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt='Support Icon' />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-500 text-sm mt-2'>We provide 24/7 customer support.</p>
      </div>

    </div>
  )
}

export default OurPolicy