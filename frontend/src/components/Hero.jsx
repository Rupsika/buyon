import React from 'react'
import { assets } from '../assets/assets'

// ✏️ Change colors here
const colors = {
  background: '#faf8f5',  // left-panel background
  dark:       '#1c1c1c',  // heading text
  charcoal:   '#2d2420',  // "Shop Now" button
  muted:      '#9b8b7a',  // eyebrow text & lines
  line:       '#c8b8a8',  // eyebrow decorative lines
  body:       '#6b6057',  // description paragraph
}

const Hero = () => {
  return (
    <div
      className='flex flex-col sm:flex-row h-125 sm:h-140 lg:h-195'
      style={{ background: colors.background }}
    >

      {/* Left side - Text */}
      <div className='w-full sm:w-1/2 h-full flex items-center justify-center px-8 lg:px-16'>
        <div className='-mt-8' style={{ color: colors.dark }}>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-0.5' style={{ background: colors.line }}></p>
            <p className='font-medium text-sm md:text-base tracking-widest' style={{ color: colors.muted }}>OUR BESTSELLERS</p>
            <p className='w-8 md:w-11 h-0.5' style={{ background: colors.line }}></p>
          </div>
          <h1 className='prata-regular text-4xl sm:text-5xl lg:text-6xl leading-tight mt-4' style={{ color: colors.dark }}>
            Latest Arrivals
          </h1>
          <p className='mt-4 text-sm sm:text-base max-w-md leading-relaxed' style={{ color: colors.body }}>
            Discover fresh styles and everyday essentials curated for your wardrobe.
          </p>
          <button
            className='mt-8 px-8 py-3 text-sm tracking-widest transition-colors text-white'
            style={{ background: colors.charcoal }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
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