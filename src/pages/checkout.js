import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Image from 'next/image'
import { useSelector } from "react-redux";
import { selectItems , selectTotal} from "../slices/basketSlice";
import CheckoutProduct from '../components/CheckoutProduct';
import { useSession } from 'next-auth/react';
import Currency from 'react-currency-formatter';

function Checkout() {
  const items= useSelector(selectItems);
  const { data: session } = useSession();
  const total=useSelector(selectTotal)
  return (
    <div className='bg-gray-100'>
        
        <Header/>

        <main className='  lg:flex max-w-screen-2xl mx-auto'>
            {/* Left */}
            <div className='flex-grow m-5 shadow-sm'>
                <Image
                src="https://content26.com/wp-content/uploads/prime-day-2018-banner.jpg"
                width={1020}
                height={250}
                objectFit="contain"

                />
                <div className='flex flex-col p-5 space-y-10 bg-white'>
                <h1 className='font-semibold text-3xl border-b-1 pb-4'>
                  {items.length === 0 ? 'Your Amazon Cart is empty': 'Shopping Cart'}</h1>
                  {items.length===0 && 
                    <p>
                    Your shopping cart is waiting. Give it purpose fill it with groceries, clothing, household supplies, electronics and more.
                    Continue shopping on the <a href='/' className='text-blue-500'>Amazon.in homepage</a>
                  </p>
                
              }

                  {/* {!items.length  `<p>
                      Your shopping cart is waiting. Give it purpose fill it with groceries, clothing, household supplies, electronics and more.
                      Continue shopping on the <a href='/'>Amazon.in homepage</a>
                    </p>`} */}
                   
                  
                  {items.map((item,i)=>(
                    <CheckoutProduct
                    key={i}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                    rating={item.rating}
                    hasPrime={item.hasPrime}
                    
                    />
                  ))}
                  

            </div>
            </div>
            


            {/* Right */}
            <div className='flex flex-col bg-white p-10 shadow-md'>
              {items.length>0 && (
                <>
                <h2 className='font-bold whitespace-nowrap'> Subtotal ({items.length} items): {" "}
                <span className='font-bold'><Currency quantity={total*76.11} currency="INR"/></span></h2>
                <button disabled={!session} className={`button mt-2 font-semibold ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                  {!session? 'Sign In to checkout': "Proceed to checkout"}
                </button>
                </>

              )}
            </div>

        </main>



        <Footer/>
        

    </div>
  )
}

export default Checkout