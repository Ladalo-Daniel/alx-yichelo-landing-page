"use client"

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

 const data = [
  {
    name: "Welcome screen",
    desc: " Our platform analyzes your browsing history, preferences, and trends to offer tailored product suggestions. Say goodbye to endless searches and hello to finding your perfect tech match effortlessly.",
    image:"/fea1.png",
    link: "#",
  },
  {
    name: "Product Catalogue",
    desc: " Find your perfect smartphone match here, from top-of-the-line models to budget-friendly options. Discover the latest features, camera capabilities, and performance benchmarks to suit your needs.",
    image:"/fea3.png",
    link: "#",
  },
  {
    name: "Product Details",
    desc: "Our detailed exploration of Gadgets showcases their specifications, features, and capabilities, providing you with a comprehensive understanding of what to expect from this tech gadgets.",
    image:"/fea2.png",
    link: "#",
  },
 
];


const FeaturedSection = () => {

  return (
    <section id='feature' className=" mt-0  px-0 overflow-hidden bg-white lg:pt-30 max-w-7xl mx-auto pb-6  w-full  flex flex-col">
       <h1 className=' lg:ml-16 max-lg:mx-4 mt-6 text-2xl text-black font-semibold mb-2'>Our Features</h1>

       <div className=' lg:ml-12 flex flex-col  '>
       <div className="xl:flex-[1.5] flex flex-col  lg:grid-cols-2 lg:grid gap-10">
        {
          data.map((d, idx) => (
          <div
            key={idx}
            className="bg-white px-5 lg:w-full py-4 md:py-1 gap-5 flex flex-col  items-center justify-start rounded-2xl"
          >
            <Image
              src={d.image}
              width={1000}
              height={1000}
              className="md:w-full w-full rounded-md object-cover"
              alt="iphone"
            />
            <div className="flex max-sm:flex-col gap-1 md:gap-4 max-sm:mt-5">
              <h1 className="text-2xl  text-orange-600 hover:underline">
               {d.name}
              </h1>
            </div>
            <p className="text-base md:text-lg font-sans">
           {d.desc}
            </p>
           </div>
          ))
        }
        </div>
          
       </div>
    </section>
  )
}

export default FeaturedSection