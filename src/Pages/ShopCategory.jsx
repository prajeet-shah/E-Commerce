import React, { useContext } from 'react'
import { ShopContext } from '../Contexts/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/item/Item';
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner block my-7 mx-auto w-4/5' src={props.banner} />
      <div className='shopcategory-indexSort flex my-0 mx-32 justify-between items-center'>
       <p>
        <span className='font-medium'>Showing 1-12 </span> out of 36 products 
       </p>
       <div className='shopcategory-sort py-3 px-6 rounded-full border-solid border-2 border-gray-400'>
        Sort by <img src={dropdown_icon}/>
       </div>
      </div>
      <div className='shopcategory-products mx-32 my-6 grid grid-cols-4 gap-y-12'>
       {all_product.map((item,i)=>{
        if(props.category === item.category){
          return <Item  key = {i} id = {item.id} name = {item.name} 
          image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
        }
        else {
           return null;
        }
       })}
      </div>
      <div className='shopcategory-loadmore flex justify-center items-center my-28 mx-auto w-36 h-10 rounded-full bg-gray-600 text-gray-300 text-md font-medium cursor-pointer '>
       Explore More
      </div>
    </div>
  )
}

export default ShopCategory
