import React from 'react'
import Image from "next/image";

function footer() {
    const myLoader=({src})=>{
        return "./images/amazon.png";
      }
  return (
    <footer>
        <div className='footer text-white text-center p-3 items-center font-sm'>

            Back To Top

        </div>
        <div className = 'flex flex-row border-b-[1.5px] border-gray-500 bg-amazon_blue-light text-white justify-around p-6 py-30 ' >
            
            <div>
                <h1 className='font-bold'>Get to Know Us</h1>
                <p className='link mt-2 text-sm'>About Us</p>
                <p className='link mt-1 text-sm'>Careers</p>
                <p className='link mt-1 text-sm'>Press Releases</p>
                <p className='link mt-1 text-sm'>Amazon Cares</p>
                <p className='link mt-1 text-sm'>Gift a Smile</p>
                <p className='link mt-1 text-sm'>Amazon Science</p>
            </div>
            <div> 
                <h1 className='font-bold'>Connect with Us</h1>
                <p className='link mt-2 text-sm'>Facebook</p>
                <p className='link mt-1 text-sm'>Twitter</p>
                <p className='link mt-1 text-sm'>Instagram</p>
            </div>
            <div>
                <h1 className='font-bold'>Make Money with Us</h1>
                <p className='link mt-2 text-sm'>Sell on Amazon</p>
                <p className='link mt-1 text-sm'>Sell under Amazon Accelarator</p>
                <p className='link mt-1 text-sm'>Amazon Global Selling</p>
                <p className='link mt-1 text-sm'>Become an Affiliate</p>
                <p className='link mt-1 text-sm'>Fulfilment by Amazon</p>
                <p className='link mt-1 text-sm'>Advertise Your Products</p>
                <p className='link mt-1 text-sm'>Amazon Pay on Merchants</p>
                
            </div>
            <div>
                <h1 className='font-bold'>Let Us Help You</h1>
                <p className='link mt-2 text-sm'>COVID-19 and Amazon</p>
                <p className='link mt-1 text-sm'>Your Account</p>
                <p className='link mt-1 text-sm'>Returns Centre</p>
                <p className='link mt-1 text-sm'>100% Purchase Protection</p>
                <p className='link mt-1 text-sm'>Amazon App Download</p>
                <p className='link mt-1 text-sm'>Amazon Assistant Download</p>
                <p className='link mt-1 text-sm'>Help</p>
            </div>
        </div>
        <div className='bg-amazon_blue-light flex flex-col p-6'>
        <Image 
             loader={myLoader}
             src={"./images/amazon.png"}
             width={70}
             height={20}
             objectFit="contain"
             className="cursor-pointer "/>
             <div className='flex  text-white text-xs justify-around mt-5  space-x-1 whitespace-nowrap ' >
                 <p className='link'>Australia</p>
                 <p className='link'>Brazil</p>
                 <p className='link'>Canada</p>
                 <p className='link'>France</p>
                 <p className='link'>Germany</p>
                 <p className='link'>Italy</p>
                 <p className='link'>Japan</p>
                 <p className='link'>Mexico</p>
                 <p className='link'>Netherlands</p>
                 <p className='link'>Poland</p>
                 <p className='link'>United Arab Emirates</p>
                 <p className='link'>United Kingdom</p>
                 <p className='link'>United States</p>
                       

             </div>
           
       

        </div>
        <div className = 'flex flex-row bg-amazon_blue text-white justify-around p-6 py-30 '>
        <div>
                <h1 className='font-boldmd link text-xs'>AbeBooks</h1>
                <p className='link text-xs text-gray-400 '>Books,art</p>
                <p className='link text-xs text-gray-400 mb-5'>& collectibles</p>
                <h1 className='font-boldmd link text-xs'>Shopbop</h1>
                <p className='link text-xs text-gray-400 '>Designer</p>
                <p className='link text-xs text-gray-400'>Fashion Brands</p>


            </div>
            <div>
                <h1 className='font-boldmd link text-xs'>Amazon Web Services</h1>
                <p className='link text-xs text-gray-400 '>Scalable Cloud</p>
                <p className='link text-xs text-gray-400 mb-5'>Computing Services</p>
                <h1 className='font-boldmd link text-xs'>Amazon Business</h1>
                <p className='link text-xs text-gray-400 '>Everything For</p>
                <p className='link text-xs text-gray-400'>Your Business</p>


            </div>
            <div>
                <h1 className='font-boldmd link text-xs'>Audible</h1>
                <p className='link text-xs text-gray-400 '>Download</p>
                <p className='link text-xs text-gray-400 mb-5'>Audio Books</p>
                <h1 className='font-boldmd link text-xs'>Prime Now</h1>
                <p className='link text-xs text-gray-400 '>2-hour Delivery</p>
                <p className='link text-xs text-gray-400'>on Everyday Items</p>


            </div>
            <div>
                <h1 className='font-boldmd link text-xs'>DPReview</h1>
                <p className='link text-xs text-gray-400 '>Digital</p>
                <p className='link text-xs text-gray-400 mb-5'>Photography</p>
                <h1 className='font-boldmd link text-xs'>Amazon Prime Music</h1>
                <p className='link text-xs text-gray-400 '>90 million songs, ad-free</p>
                <p className='link text-xs text-gray-400'>Over 15 million podcasts episodes</p>


            </div>
            <div>
                <h1 className='font-boldmd link text-xs'>IMDb</h1>
                <p className='link text-xs text-gray-400 '>Movies, TV</p>
                <p className='link text-xs text-gray-400 mb-5'>& Celebrities </p>
                


            </div>

            

        </div>
        <div className='text-white bg-amazon_blue text-xs text-center '>
                Amazon clone/Prarthna Luthra
            </div>
        
      
    </footer>
  )
}

export default footer