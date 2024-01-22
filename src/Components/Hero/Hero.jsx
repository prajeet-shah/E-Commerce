import React from 'react'
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero h-screen bg-gradient-to-b from-pink-100 to-white flex'>
      <div className='hero-left flex-1 flex flex-col justify-center gap-8 pl-28 leading-4'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className='hand-hand-icon'>
                <p>new</p>
                <img src={hand_icon} />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className='hero-latest-btn'>
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
