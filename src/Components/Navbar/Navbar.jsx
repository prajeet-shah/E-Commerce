import React, { useState } from 'react'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [menu , setMenu] = useState('shop');
  return (
    <div className='navbar flex justify-around p-4  shadow-lg shadow-blue-200/50  '>
        <div className='logo flex items-center gap-2'>
        <img src={logo}/>
        <p className='text-black-500 text-2xl font-medium'>SHOPPER</p>
        </div>
        <ul className='nav-menu flex items-center list-none gap-8 text-brown-400 font-medium '>
        <li onClick={() => setMenu('shop')} className='flex flex-col items-center justify-center gap-2 cursor-pointer '> <Link to={'/'} >Shop</Link> {menu==='shop' ? <hr className='border-none w-4/5 h-1 rounded-sm bg-red-400'/> : ''} </li>
        <li onClick={() => setMenu('men')} className='flex flex-col items-center justify-center gap-2 cursor-pointer '> <Link to={'/mens'}>Men</Link> { menu === 'men' ? <hr className='border-none w-4/5 h-1 rounded-sm bg-red-400'/> : ''}</li>
        <li onClick={() => setMenu('women')} className='flex flex-col items-center justify-center gap-2 cursor-pointer '> <Link to={'/womens'}>Women</Link> {menu=== 'women' ? <hr className='border-none w-4/5 h-1 rounded-sm bg-red-400'/> : ''}</li>
        <li onClick={() => setMenu('kids')} className='flex flex-col items-center justify-center gap-2 cursor-pointer '> <Link to={'/kids'}>Kids</Link> {menu === 'kids' ? <hr className='border-none w-4/5 h-1 rounded-sm bg-red-400'/> : ''}</li>
        </ul>

        <div className='nav-cart-icon flex items-center gap-10'>
        <Link to={'/loginsignup'}><button className=' h-10 w-28 outline-none border-2 border-black-500 rounded-3xl text-brown-300 font-normal bg-white cursor-pointer active:bg-blue-100'>Login</button></Link>
        <Link to={'/cart'}><img src={cart_icon} /></Link>
        
        
        <div className='cart_icon_count w-4 h-4 flex justify-center items-center -mt-8 -ml-12 rounded-3xl text-sm bg-red-600 text-white cursor-pointer'>0</div>
        </div>

    </div>
  )
}

export default Navbar;
