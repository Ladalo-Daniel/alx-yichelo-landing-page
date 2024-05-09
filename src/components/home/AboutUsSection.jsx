import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutUsSection = () => {
  return (
    <section id='about' className=" mt-0  px-0 overflow-hidden bg-orange-50 lg:pt-30 max-w-7xl mx-auto pb-6  w-full  flex flex-col">
       <h1 className=' lg:ml-16 mt-6 text-2xl text-black font-semibold mb-2'>About us</h1>

        <div className="flex justify-between flex-col lg:flex-row items-start lg:gap-x-20">
        <div 
        className=" w-full relative  md:w-1/2 pb-5 lg:pb-0 lg:ml-16  lg:">
          
          <p className="text-black font-thi pb-3 lg:text-lg">
          My journey with this project began with a  passion for revolutionizing the way people interact with technology. I&apos;ve always been intrigued by the possibilities that modern gadgets offer, but it was my desire to create something impactful.
          </p>
          <p className="text-black font-thi pb-3 lg:text-lg">
          I was inspired by real-world challenges faced by users when exploring gadgets online, the overwhelming choices, lack of personalized recommendations, and tedious checkout processes. I knew there had to be a better way, and thus, Yichelo was born.
          </p>

          <h1 className=' lg:ml-16 mt-6 text-2xl text-black font-semibold mb-2' >Meet me on GitHub:</h1>
          <Link href={"https://github.com/Ladalo-Daniel"} className=' ring-1 w-[150px] text-white bg-orange-400 mt-2 p-2 lg:ml-16 rounded-md cursor-pointer' >
            Ladalo...
          </Link>

         
        </div>
        <div className=" w-full md:w-1/2 lg:relative">
          <Image
            alt="Experience Image"
            src="/fea1.png"
            width={500}
            height={200}
            className="block w-full lg:w-[500px] h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection