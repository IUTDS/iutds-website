"use client";

import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-[#000000] ">
      <nav className="flex justify-between items-center w-[92%] mx-auto z-10">
        <Link href="/">
          <img
            className="text-white"
            width={90}
            height={10}
            src="/assets/images/IUTDS Logo-02.png"
            alt="IUTDS logo"
          />
        </Link>

        <div
          className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 bg-[#000000] z-10 ${
            isMenuOpen ? "top-[10.5%]" : ""
          }`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li onClick={closeMenu}>
              <Link
                href="/about"
                className="hover:text-red-500 text-white text-xl"
              >
                About
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link
                href="/panel"
                className="hover:text-red-500 text-white text-xl"
              >
                Panel
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link
                href="/programs"
                className="hover:text-red-500 text-white text-xl"
              >
                Events
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link
                href="/achievements"
                className="hover:text-red-500 text-white text-xl"
              >
                Achievements
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link
                href="/blog"
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
            {isMenuOpen ? (
              <RxCross1 color="white" />
            ) : (
              <AiOutlineMenu color="white" />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
