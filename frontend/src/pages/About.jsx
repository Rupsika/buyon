import React from 'react'
import Title from '../components/Title'

const About = () => {
  return (
    <div className='border-t pt-16 px-4 sm:px-[5vw]'>

      {/* Header */}
      <div className='text-2xl text-center mb-10'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* Story Section */}
      <div className='flex flex-col md:flex-row gap-10 mb-16'>
        <img
          src='https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80'
          alt='Our Story'
          className='w-full md:w-1/2 object-cover rounded'
        />
        <div className='flex flex-col justify-center gap-5 md:w-1/2 text-gray-600'>
          <p>
            We started with a simple idea — clothing should be effortless. Born from a passion for
            clean design and quality craftsmanship, our brand has grown into a destination for
            those who believe style is a form of self-expression.
          </p>
          <p>
            Every piece in our collection is thoughtfully designed, ethically sourced, and made to
            last. We work with carefully selected manufacturers who share our commitment to quality
            and sustainability.
          </p>
          <div>
            <h3 className='text-black font-semibold text-lg mb-1'>Our Mission</h3>
            <p>
              To make timeless, accessible fashion that empowers people to look and feel their best —
              every single day.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='text-2xl text-center mb-8'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20'>
        <div className='border border-gray-200 rounded px-8 py-10 flex flex-col gap-4 hover:shadow-md transition-shadow'>
          <span className='text-3xl'>✦</span>
          <h4 className='font-semibold text-black text-lg'>Quality Assurance</h4>
          <p className='text-gray-500 text-sm'>
            Every item goes through a rigorous quality check before reaching your door. We settle
            for nothing less than excellent.
          </p>
        </div>

        <div className='border border-gray-200 rounded px-8 py-10 flex flex-col gap-4 hover:shadow-md transition-shadow'>
          <span className='text-3xl'>⟳</span>
          <h4 className='font-semibold text-black text-lg'>Hassle-Free Returns</h4>
          <p className='text-gray-500 text-sm'>
            Not happy? No problem. We offer easy 30-day returns so you can shop with complete
            confidence.
          </p>
        </div>

        <div className='border border-gray-200 rounded px-8 py-10 flex flex-col gap-4 hover:shadow-md transition-shadow'>
          <span className='text-3xl'>◎</span>
          <h4 className='font-semibold text-black text-lg'>Exceptional Support</h4>
          <p className='text-gray-500 text-sm'>
            Our team is available 7 days a week to help with sizing, orders, or anything else you
            need.
          </p>
        </div>
      </div>

    </div>
  )
}

export default About