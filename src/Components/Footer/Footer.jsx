import React from 'react'
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon  from '../Assets/whatsapp_icon.png';
const Footer = () => {
  return (
    <div className='footer flex flex-col items-center justify-center gap-6'>
     <div className='footer-logo flex items-center gap-5'>
        <img src={footer_logo} />
        <p className='text-black text-2xl font-semibold'>SHOPPER</p>
     </div> 
     <ul className='footer-links flex list-none gap-10 text-black text-lg'>
        <li className='cursor-pointer'>Company</li>
        <li className='cursor-pointer'>Products</li>
        <li className='cursor-pointer'>Offices</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
     </ul>
     <div className='footer-social-icon flex gap-8 '>
        <div className='footer-icons-container p-4 pb-2 bg-white border-solid  border-pink-100' >
            <img src={instagram_icon} />
        </div>
        <div className='footer-icons-container p-4 pb-2 bg-white border-solid border-pink-100' >
            <img src={pinterest_icon} />
        </div>
        <div className='footer-icons-container p-4 pb-2 bg-white border-solid border-pink-100' >
            <img src={whatsapp_icon} />
        </div>
     </div>

     <div className='footer-copyright flex flex-col items-center gap-px w-full mb-10 text-black text-md'>
        <hr className='w-4/5 border-none rounded h-px bg-black'/>
        <p>Copyright @ 2024 -All Right Reserved.</p>
     </div>
    </div>
  )
}

export default Footer
