import React from "react";
import Link from "next/link";

const TopBanner = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center container mx-auto min-w-full z-0">
      <div className="w-full relative">
        <img
          className="w-full h-auto md:h-auto object-fill md:object-cover rounded-b-topbanner"
          src="/assets/images/Trivium_Cover.png"
          alt="Trivium"
        />
        <div className="hidden md:block">
          <div className="md:absolute md:top-1/2 md:left-1/4 md:transform -translate-y-1/4 -translate-x-1/2 md:text-left z-10 flex flex-col">
            <div className="tracking-tight font-light leading-[1.15] text-black md:text-4xl text-xs uppercase">
              Welcome to{" "}
            </div>
            <div className="tracking-tight font-extrabold leading-[1.15] text-black md:text-6xl text-xs uppercase">
              IUT Debating Society
            </div>
            <p className="tracking-tight leading-[1.15] text-black md:text-2xl">
              Where logic meets rhetoric and prudence meets eloquence
            </p>
          </div>
          <div className="absolute bottom-24 left-0 right-0 text-center">
            <Link
              href="https://drive.google.com/drive/folders/15L2KVAX_HnE_iQDYtoAnVq8drvvfHEJX"
              rel="noopener noreferrer"
              target="_blank"
              className="text-2xl px-10 py-4 rounded-lg bg-iutdsred uppercase text-white hover:bg-red-600 transition duration-300"
            >
              Read Trivium 5.0, Official Publication of IUT IV
            </Link>
          </div>
        </div>
        <div className="md:hidden mt-10 flex flex-col items-center">
          {" "}
          {/* Center the content horizontally */}
          {/* Display only on smaller screens */}
          <div className="text-center">
            <Link
              href="https://drive.google.com/drive/folders/15L2KVAX_HnE_iQDYtoAnVq8drvvfHEJX"
              rel="noopener noreferrer"
              target="_blank"
              className="text-xs px-10 py-4 rounded-lg bg-iutdsred uppercase text-white hover:bg-red-600 transition duration-300"
            >
              Read Trivium 5.0, Official Publication of IUT IV
            </Link>
          </div>
          <div className="text-xl text-center tracking-tight font-extralight leading-[1.15] uppercase pt-10">
            Welcome to
          </div>
          <div className="text-3xl font-black uppercase">
            IUT Debating Society
          </div>
          <p className="text-sm tracking-tightest text-center">
            Where logic meets rhetoric and prudence meets eloquence
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
