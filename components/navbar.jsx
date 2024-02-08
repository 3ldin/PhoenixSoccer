"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './navlink'
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CgMenu } from "react-icons/cg";
import MenuOverlay from './menuoverlay';
import Image from 'next/image';


const navLinks = [
    {
        title: "About",
        path: '/About',
    },
    {
        title: "Programs",
        path: "/Programs",
    },
    {
        title: "Contact",
        path: "/Contact",
    },
    {
        title: "Log In | Register",
        path: "https://www.hisawyer.com/phoenix-soccer-club/auth/log-in",
    }
]


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
    return (
    <nav className='fixed mx-auto border border-transparent top-0 left-0 right-0 z-20 bg-white bg-opacity-100 drop-shadow-lg'>
        <div className='flex lg:py-3 flex-wrap items-center justify-between mx-auto pt-1 px-3'>
            
            <Link href={"/"} className='text-2xl md:text-4xl text-black font-bold'>
               <Image 
                src="/images/phoenix4.png"
                alt='logo'
                width={100}
                height={100}
               /> 
            </Link>
            <div className='mobile-menu block md:hidden pr-3'>
                
                    {!navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} className='flex items-center py-2 text-black hover:text-slate-500 hover:border-slate-500'>
                      <CgMenu className='h-8 w-8'/>
                    </button>
                ) : (
                    <button onClick={() => setNavbarOpen(false)} className='flex items-center py-2 text-black hover:text-slate-500 hover:border-slate-500'>
                    <XMarkIcon className='h-8 w-8'/>
                    </button>
                )}
                
            </div>
    <div className='menu hidden md:block  md:w-auto text-black' id="navbar">
        <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-black'>
            {navLinks.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
             ))
            }
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar 