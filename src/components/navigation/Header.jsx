"use client"

import { MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import Logo from '../Logo';
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


const navItems = [
    {
        name: "Feature",
        link: "#feature",
    },
    {
        name: "About",
        link: "#about",

    },
    
]

function Header() {

    const [mobileNav, setMobileNav] = useState(false)
    const [nav, setNav] = useState(false);
    const navRef = useRef(null)

    const handleMobileOpen = () => {
        setMobileNav(!mobileNav)
    }

    useEffect(() => {
      if (typeof window !== "undefined") {
        //access to window
        const changeBackground = () => {
          if (window.scrollY >= 80) {
            setNav(true);
          } else {
            setNav(false);
          }
        };
  
        window.addEventListener("scroll", changeBackground);
      }
    }, []);

    const rounter = useRouter()
    const path = usePathname()
    console.log(path)



  return (
    <nav className={`flex ra  px-1 lg:px-14 flex-row items-center max-w-7xl mx-auto  justify-between z-50 ${nav ? " ra bg-orange-60 transition-all" : "ra bg-orange-60"} w-full  h-[80px]  `}>
        {/* IMAGELOGO_HERE */}
        <div className=' flex flex-row gap-2 items-center px-5'>
            {/* <div className=' lg:hidden' onClick={handleMobileOpen}>
                {
                    mobileNav ? 
                    (
                     <X size={50} className=' text-gray-50 rounded-md ring-1 ring-blue-50 cursor-pointer' />
                    ) :
                    (
                     <MenuIcon size={50} className=' text-gray-50 p-2  rounded-md ring-1 ring-blue-50 cursor-pointer' />
                    ) &&
                    (
                     <MenuIcon size={40} className=' text-gray-50 p-2  rounded-md ring-1 ring-blue-50 cursor-pointer' />
                    )
                }
            </div> */}
            <Link href={"/"} className=' max-md:hidden max-lg:ml-3'>
                 <Logo name="ichelo" />
             </Link>
            <Link href={"/"} className=' md:hidden ml-3' >
                  <Logo />
             </Link>
        </div>

        {/* DESKTOP_MENU */}
       
       {/* LOGIN_BUTTON */}
       <div className=' flex flex-row items-center gap-2'>
       
        <div className=' flex flex-row gap-4 items-center'>
            <ul className=' lg:flex flex-row items-center gap-3 hidden  '>
            {navItems.map((item, idx) => (
                <li key={idx} >
                    <Link 
                    href={item.link}
                    className={`${path === item.link ? " font-bold  px-6 py-1  text-white duration-100 rounde text-lg " : ""}px-3 text-sm py-  text-white font-medium duration-100 hover:text-normalBlue rounde  `}
                    >{item.name}</Link>
                </li>
            ))}
           </ul>
          <Link 
          href="https://alx-portfolio-project-yichelo-gadget-e-commerce-store.vercel.app/" 
          onClick={mobileNav && handleMobileOpen}
          className='  py-2.5 lg:py-2 text-white text-lg hover:opacity-80 rounded-md max-sm:text-sm md:text-lg bg-orange-400  px-2 lg:px-4 mr-5 max-lg:mr-0'
          >
            Get Started
          </Link>

          <div className=' lg:hidden mr-2' onClick={handleMobileOpen}>
                {
                    mobileNav ? 
                    (
                     <X size={50} className=' text-gray-50 rounded-md ring-1 ring-blue-50 cursor-pointer' />
                    ) :
                    (
                     <MenuIcon size={50} className=' text-gray-50 p-2  rounded-md ring-1 ring-blue-50 cursor-pointer' />
                    ) &&
                    (
                     <MenuIcon size={40} className=' text-gray-50 p-2  rounded-md ring-1 ring-blue-50 cursor-pointer' />
                    )
                }
            </div>
        </div>
       </div>


         
      {/* MOBILEMENU */}
      {mobileNav && (
        <div className="fixed lg:hidden inset-0 transition-opacity">
        <div
          className="absolute inset-0 bg-gray-400 opacity-75"
          onClick={handleMobileOpen}
        />
        </div>
      )}


      {/* MOBILEMENU */}
     { 
       mobileNav &&
        (    
            <div ref={navRef} className={ ` ${mobileNav ? "  transition-all transform  w-[264px] duration-1000  shadow-2xl" : ""}   flex flex-col lg:hidden transition-all left-0 w-0   gap-3 top-[0px] absolute bg-orange-600 h-[100vh] px-3 py-4  duration-1000  `}>
            <X  
            onClick={mobileNav && handleMobileOpen}
            size={30}
            className=' absolute right-2 top-2 ring-1 ring-white p-2 cursor-pointer rounded-md text-gray-50'/>

            <div className=' h-[80px] w-[150px]'>
            <Link href={"/"}  onClick={handleMobileOpen}>
                 <Logo name="ichelo" mobileMenu={true} />
             </Link>
            </div>
            <hr className=' text-green-50' />
            <div className=' mt-1'>
                {navItems.map((item, idx) => (
                    <span key={idx} className=' flex flex-col gap-6' >
                        <Link 
                        href={item.link}
                        onClick={handleMobileOpen}
                        className={`${path === item.link ? " text-white hover:opacity-75   px-3 py-2.5   duration-100 rounde text-lg " : ""}px-3 text-sm py-2.5  text-white duration-100 hover:text-sky-800 round  `}
                        >{item.name}
                        </Link>
                    </span>
                 ))}
            </div>

            <hr className=' absolute bottom-8 px-3 py-2 text-lg w-[250px] text-sky-500' />

            <p className=' absolute bottom-2 px-3 py-2 text-lg text-gray-500'>&copy; Yichelo 2024</p>

            
          </div>
        )
      }


    </nav>
  )
}

export default Header