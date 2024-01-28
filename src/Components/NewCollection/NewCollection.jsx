import React from 'react'
import new_collection from '../Assets/new_collections';
import Item from '../item/Item';
const NewCollection = () => {
  return (
    <div className='new-collections flex flex-col items-center gap-3 h-90vh mt-10 '>
      <h1 className='text-brown-100 text-3xl font-medium'>NEW COLLECTIONS</h1>
        <hr className='w-40 h-px rounded-lg bg-black -mt-1'/>
        <div className='collections grid grid-cols-4 gap-4 mt-6'>
            {new_collection.map((item , i)=>{
                return <Item  key = {i} id = {item.id} name = {item.name} 
                image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollection
