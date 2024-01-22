import React from 'react'
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero h-screen bg-gradient-to-b from-pink-100 to-white flex'>
      <div className='hero-left flex-1 flex flex-col justify-center gap-8 pl-28 leading-4'>
        <h2 className='text-black text-3xl font-bold'>NEW ARRIVALS ONLY</h2>
        <div>
            <div className='hero-hand-icon flex items-center gap-6'>
                <p className=' text-black text-7xl font-semibold'>new</p>
                <img className='w-24' src={hand_icon} />
            </div>
            <p className=' text-black text-7xl font-semibold' >collections</p>
            <p className=' text-black text-7xl font-semibold'>for everyone</p>
        </div>
        <div className='hero-latest-btn flex justify-center items-center gap-5 w-60 h-8 rounded-3xl mt-10 bg-red-600 text-white text-xl font-normal'>
            <div>Latest Collection</div>
            <img src={arrow_icon}></img>
        </div>
      </div>
      <div className='hero-right'>
        <img src={hero_image}></img>
      </div>
    </div>
  )
}

export default Hero
