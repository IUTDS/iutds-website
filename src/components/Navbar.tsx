"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "feather-icons-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const navLinks = document.querySelector(".nav-links");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    navLinks?.classList.toggle("top-[9%]");
  };

  return (
    <div className="bg-[#000000] py-3">
      <nav className="flex justify-between items-center w-[92%] mx-auto z-10">
        <Link href="\">
          <div mt-5>
            <Image
              className="text-white"
              width={70}
              height={70}
              src="/assets/images/logo_bright.png"
              alt="IUTDS logo"
            />
          </div>
        </Link>

        <div
          className="nav-links duration-500 
                            md:static absolute
                            md:min-h-fit min-h-[60vh] left-0 
                            top-[-100%] md:w-auto  w-full flex items-center px-5
                            bg-[#000000] z-10"
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <Link
                href="\about"
                className="hover:text-red-500 text-white text-xl"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="\panel"
                className="hover:text-red-500 text-white text-xl"
              >
                Panel
              </Link>
            </li>
            <li>
              <Link
                href="\programs"
                className="hover:text-red-500 text-white text-xl"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="\achievements"
                className="hover:text-red-500 text-white text-xl"
              >
                Achievements
              </Link>
            </li>
            <li>
              <Link
                href="\blog"
                className="hover:text-red-500 text-white text-xl"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6 z-10">
          <div
            className="text-3xl cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <Menu color="white" /> : <X color="white" />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
