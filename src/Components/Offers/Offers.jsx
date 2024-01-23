import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png';
const Offers = () => {
  return (
    <div className='offers w-4/6 h-60vh flex mx-auto my-auto mt-20 py-0 px-32 bg-gradient-to-t from-white to-pink-100'>
      <div className='offers-left flex-1 flex flex-col justify-center'>
        <h1 className='text-black text-3xl'>Exclusive</h1>
        <h1 className='text-black text-3xl'>Offers For You</h1>
        <p className='text-black text-lg font-medium'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='w-44 h-10 bg-red-600 border-none text-white text-lg font-medium rounded-3xl mt-12 cursor-pointer'>Check Now</button>
      </div>
      <div className='offers-right'>
        <img src={exclusive_image}/>
      </div>
    </div>
  )
}

export default Offers
