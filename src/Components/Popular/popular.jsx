import React from 'react'
import data_product from '../Assets/data';
import Item from '../item/Item';
const popular = () => {
  return (
    <div className='popular flex flex-col items-center gap-4 mt-32 '>
      <h1 className='text-black text-2xl font-semibold'>POPULAR IN WOMEN</h1>
      <hr className='w-48 h-2 rounded-lg bg-brown-200' />
      <div className='popular-item mt-6 flex gap-10'>
        {data_product.map((item , i)=>{
            return <Item key = {i} id = {item.id} name = {item.name} 
            image = {item.image} new_price = {item.new_price} old_price = {item.old_price} /> 
        })}
      </div>
    </div>
  )
}

export default popular
