import Link from 'next/link'
import React from 'react'

const HeroSearch = () => {
  return (
        <div className=' w-[94%] max-lg:w-[94%] max-lg:mx-4 ml-16 searc blur-6 text-payWhite bg-orange-400 opacity-95  rounded-md absolute max-sm:bottom-[1.5rem] max-sm:px-4 max-md:bottom-[2rem] bottom-[0.5rem]  '>
            <div
            className=" w-full px-4 mx-auto mt-12 my-5">
            <div className=" flex flex-row gap-2">
               <div className="w-full py-3 pl-4 pr-4 text-gray-500 border rounded-sm outline-none bg-gray-50 focus:bg-white focus:border-blue-600">
                <p><strong>Reliability:</strong> You can trust us for genuine products, transparent reviews, and reliable customer service. </p>
               </div>
               <div className="w-full py-3 pl-4 pr-4 text-gray-500 border rounded-sm outline-none bg-gray-50 focus:bg-white focus:border-blue-600">
                <p><strong>Convienience:</strong> We stands out as a reliable and convenient e-commerce platform for electronics and Gadgets.</p>
               </div>
               
            </div>
            
            <Link href={"https://alx-portfolio-project-yichelo-gadget-e-commerce-store.vercel.app/"} className=' bg-white text-black py-2 rounded-lg mt-5 px-6 mb-5 hover:opacity-90'>Explore now</Link>
        </div>
        </div>
  )
}

export default HeroSearch