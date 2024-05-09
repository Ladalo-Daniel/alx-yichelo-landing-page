import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className="  px-0 overflow-hidden rad relative lg:pt-30 max-w-7xl mx-auto   w-full object-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
        <div className=' flex max-lg:flex-col flex-row items-center '>
            <div className=' max-lg:w-full w-1/2 ml-16 ' >
                <h1 className=' max-lg:hidden max-lg:text-4xl text-7xl max-lg:pt-7 text-white font-bold'>Discover and Access your Favorite Gadgets Easily</h1>
                <h1 className=' lg:hidden max-lg:text-4xl text-7xl max-lg:pt-7 text-white font-bold'>Discover <br /> and Access your <br /> Favorite Gadgets Easily</h1>
                <p className=' text-white text-2xl mt-3'>Get a Device for your Preferred Brand Immediately.</p>
            </div>
            <div className=' max-lg:w-full w-1/2'>
                <Image
                className=" max-lg:h-[18rem] h-[30rem]"
                src="hero-pic.svg"
                alt="Hero-Picture"
                width={1000}
                height={1000}
                />
            </div>
        </div>

    </section>
  )
}

export default HeroSection