"use client"

import Link from "next/link";
import { Menu, X } from 'feather-icons-react';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    
    const navLinks = document.querySelector('.nav-links');
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        navLinks?.classList.toggle('top-[9%]');
    };


    return (
        <div className="bg-[#000000]">
        <nav className="flex justify-between items-center w-[92%] mx-auto ">
            <div>
                <img className="w-16 text-white" src="../assets/images/IUTDS_Logo.svg" alt="IUTDS logo" />
            </div>

            <div className="nav-links duration-500 
                            md:static absolute bg-white 
                            md:min-h-fit min-h-[60vh] left-0 
                            top-[-100%] md:w-auto  w-full flex items-center px-5
                            bg-[#000000]"
            >
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <Link href="\about" className="hover:text-gray-500 text-white">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="\achievements" className="hover:text-gray-500 text-white">
                            Achievements
                        </Link>
                    </li>
                    <li>
                        <Link href="\blog" className="hover:text-gray-500 text-white">
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link href="\panel" className="hover:text-gray-500 text-white">
                            Panel
                        </Link>
                    </li>
                    <li>
                        <Link href="\programs" className="hover:text-gray-500 text-white">
                            Events
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-6">
                <div className="text-3xl cursor-pointer md:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <Menu color="white"/>
                    ) : (
                        <X color="white"/>
                    )}
                </div>
            </div>

        </nav>
       </div>
    );
};

export default Navbar;
