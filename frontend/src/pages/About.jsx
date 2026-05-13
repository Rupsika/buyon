import React from 'react'
import Title from '../components/Title'
import aboutus from '../assets/aboutus.png'

const About = () => {
  return (
    <div className='border-t pt-16 px-4 sm:px-[5vw]'>

      {/* Header */}
      <div className='text-2xl text-center mb-12'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* Story Section */}
      <div className='flex flex-col md:flex-row gap-12 mb-20 items-start'>

        <div className='w-full md:w-1/2 flex justify-center'>
          <img
            src={aboutus}
            alt='About Us'
            className='w-auto max-w-full max-h-[480px] md:max-h-[520px] object-contain rounded-lg shadow-md'
          />
        </div>

        <div className='flex flex-col justify-start gap-6 md:w-1/2 text-gray-600'>
          <p className='text-base leading-relaxed'>
            We started with a simple idea — clothing should be effortless. Born from a passion for
            clean design and quality craftsmanship, our brand has grown into a destination for
            those who believe style is a form of self-expression.
          </p>
          <p className='text-base leading-relaxed'>
            Every piece in our collection is thoughtfully designed, ethically sourced, and made to
            last. We work with carefully selected manufacturers who share our commitment to quality
            and sustainability.
          </p>

          <div className='border-l-4 border-black pl-4'>
            <h3 className='text-black font-semibold text-lg mb-1'>Our Mission</h3>
            <p className='text-gray-500 text-sm leading-relaxed'>
              To make timeless, accessible fashion that empowers people to look and feel their best —
              every single day.
            </p>
          </div>

          {/* Stats Row */}
          <div className='grid grid-cols-3 gap-4 pt-4 border-t border-gray-100'>
            <div className='text-center'>
              <p className='text-2xl font-bold text-black'>10K+</p>
              <p className='text-xs text-gray-500 mt-1'>Happy Customers</p>
            </div>
            <div className='text-center border-x border-gray-100'>
              <p className='text-2xl font-bold text-black'>500+</p>
              <p className='text-xs text-gray-500 mt-1'>Products</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl font-bold text-black'>30+</p>
              <p className='text-xs text-gray-500 mt-1'>Countries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='text-2xl text-center mb-10'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20'>
        <div className='group border border-gray-200 rounded-lg px-8 py-10 flex flex-col gap-4 hover:border-black hover:shadow-lg transition-all duration-300'>
          <div className='w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300'>
            ✦
          </div>
          <h4 className='font-semibold text-black text-lg'>Quality Assurance</h4>
          <p className='text-gray-500 text-sm leading-relaxed'>
            Every item goes through a rigorous quality check before reaching your door. We settle
            for nothing less than excellent.
          </p>
        </div>

        <div className='group border border-gray-200 rounded-lg px-8 py-10 flex flex-col gap-4 hover:border-black hover:shadow-lg transition-all duration-300'>
          <div className='w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300'>
            ↩
          </div>
          <h4 className='font-semibold text-black text-lg'>Hassle-Free Returns</h4>
          <p className='text-gray-500 text-sm leading-relaxed'>
            Not happy? No problem. We offer easy 30-day returns so you can shop with complete
            confidence.
          </p>
        </div>

        <div className='group border border-gray-200 rounded-lg px-8 py-10 flex flex-col gap-4 hover:border-black hover:shadow-lg transition-all duration-300'>
          <div className='w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300'>
            ◎
          </div>
          <h4 className='font-semibold text-black text-lg'>Exceptional Support</h4>
          <p className='text-gray-500 text-sm leading-relaxed'>
            Our team is available 7 days a week to help with sizing, orders, or anything else you
            need.
          </p>
        </div>
      </div>

    </div>
  )
}

export default About