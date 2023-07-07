import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram, Linkedin } from 'feather-icons-react';

const Footer2 = () => {
  return (
    <footer className='w-full bg-black text-white'>
        <div className="md:flex md:justify-between md:items-center sm:px-12 sm:flex sm:justify-center px-4  pt-4 pb-2">
            <h1
            className="lg:text-2xl text-2xl md:text-lg sm:text-lg md:mb-0 mb-2 lg:leading-normal font-semibold
            md:w-2/5"
            >
            <span className="text-iutdsred">Join IUTDS,</span> Become a member
            </h1>
        </div>
        <div className="md:flex md:justify-between md:items-center sm:grid sm:px-12 sm:justify-items-center px-4 pb-6">
            <div>
                <Link href="\contact" className='hover:text-iutdsred text-white'>Contact us</Link>
            </div>
            
            
            <div className='flex gap-6 mt-4'>
                <Link href='/' className="hover:text-iutdsred">
                    <Facebook size={24} />
                </Link>
                <Link href='/' className="hover:text-iutdsred">
                    <Instagram size={24} />
                </Link>
                <Link href='/' className="hover:text-iutdsred">
                    <Linkedin size={24} />
                </Link>
                 
            </div>

        </div>

        

        <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
        text-center pt-2 text-gray-400 text-sm pb-2"
        >
            <span>© 2023 IUTDS | All rights reserved.</span>
            <span>Terms · Privacy Policy</span>
      </div>

      <hr className="border-t-4 border-iutdsred my-4" />
      <div className='flex justify-center gap-8 pb-4'>
        <span> I U T </span> 
        <span> D E B A T I N G </span> 
        <span> S O C I E T Y </span>
    </div>
    </footer>
  )
}

export default Footer2
