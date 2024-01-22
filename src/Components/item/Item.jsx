import React from 'react'

const Item = (props) => {
  return (
    <div className='item w-60 hover:transform scale-105 transition-700'>
      <img src={props.image} />
      <p className='mx-2 my-0'>{props.name}</p>
      <div className='item-prices flex gap-8 '>
        <div className='item-price-new text-gray-600 text-lg font-medium'>
            {props.new_price}
        </div>
        <div className='item-price-old text-gray-400 text-lg font-normal line-through'>
            {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
