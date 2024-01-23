import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsletter w-5/6  flex flex-col items-center justify-center mx-auto my-auto mt-14 px-28 mb-32 bg-gradient-to-b from-pink-100 to-white gap-10 py-8'>
      <h1 className='text-black text-4xl font-medium'>Get Exclusive Offers On Your Email</h1>
      <p className='text-gray-400 text-lg'>Subscribe to our newsletter and stay updated</p>
      <div className='flex items-center justify-around bg-gray-200 w-96 h-10 rounded-full border-solid border-0 border-black'>
        <input className='ml-10 w-80 border-none outline-none font-sans text-md text-black bg-gray-200 rounded-full' type='email' placeholder='Your Email id'/>
        <button className='w-36 h-10 py-1 px-2 rounded-full bg-black text-white text-sm cursor-pointer'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
