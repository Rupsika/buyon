import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 h-[500px] sm:h-[560px] lg:h-[780px]'>
      
      {/* Left side - Text */}
      <div className='w-full sm:w-1/2 h-full flex items-center justify-center px-8 lg:px-16'>
        <div className='text-[#414141] -mt-8'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-0.5 bg-green-200'></p>
            <p className='font-medium text-sm md:text-base tracking-widest'>OUR BESTSELLERS</p>
            <p className='w-8 md:w-11 h-0.5 bg-green-200'></p>
          </div>
          <h1 className='prata-regular text-4xl sm:text-5xl lg:text-6xl leading-tight mt-4'>
            Latest Arrivals
          </h1>
          <p className='mt-4 text-sm sm:text-base text-gray-500 max-w-md leading-relaxed'>
            Discover fresh styles and everyday essentials curated for your wardrobe.
          </p>
          <button className='mt-8 px-8 py-3 bg-black text-white text-sm tracking-widest hover:bg-gray-800 transition-colors'>
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Right side - Looping Video */}
      <div className='w-full sm:w-1/2 h-full overflow-hidden'>
        <video
          className='w-full h-full object-cover'
          style={{ objectPosition: 'center 75%' }}
          src={assets.hero_video}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

    </div>
  )
}

export default Hero