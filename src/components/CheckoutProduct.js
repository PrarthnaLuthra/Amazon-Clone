import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import {addToBasket, removeFromBasket} from '../slices/basketSlice'
// import {selectTotal} from '../slices/basketSlice'




function CheckoutProduct({id, title, price, description, category, image ,rating,hasPrime}) {
   const dispatch = useDispatch()

const removeItemFromBasket=()=>{
    dispatch(removeFromBasket({id}))

}
const addItemToBasket = () => {
    const product = { id, title, price, description, category, image,rating,hasPrime };

    //sending product as an action to redux store.... basket slice

    dispatch(addToBasket(product));
  };
  

  return (
      
    <div className='grid grid-cols-5 '>
        <Image
        src={image}
        height={200}
        width={200}
        objectFit="contain"
        
        />
        <div className='col-span-3 mx-5'>
            <p className='font-semibold'>{title}</p>
            <div className='flex'>
                {Array(rating).fill().map((_,i)=>(

                    <StarIcon key={i} className="h-5 text-yellow-500"/>

                ))}
            </div>
            <p className='text-xs my-2 line-clamp-3'>
                {description}
            </p>
            <Currency quantity={price * 76.11} currency='INR'/>

            {hasPrime && (
                <div className='flex items-center space-x-2'>
                    <img loading='lazy'
            className="w-12"
            src="https://www.nicepng.com/png/full/115-1159983_amazon-prime-logo-prime-amazon.png"
          />
          <p className="text-xs text-gray-500">FREE One-Day Delivery </p>

                </div>
            )}

        </div>
        <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button
        onClick={addItemToBasket}
        className="mt-auto button font-semibold"
      >
        Add to Cart
      </button>
        <button onClick={removeItemFromBasket} className='button font-semibold'> Remove from Cart </button>
        </div>
    </div>
  )
}

export default CheckoutProduct