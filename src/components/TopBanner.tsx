import React from "react";
import Link from "next/link";

const TopBanner = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center container mx-auto min-w-fit z-0">
      {/* The z-0 class gives the TopBanner a lower stacking order */}
      <div className="w-full relative">
        <img
          className="w-full h-auto md:h-auto object-fill md:object-cover"
          src="/assets/images/IUTDS_IV_Banner.png"
          alt="IUTDS Group Photo"
        />
        <div className="md:absolute md:top-1/2 md:right-0 md:transform -translate-y-10 md:-translate-x-32 text-center md:text-right z-10 flex flex-col items-center">
          <div className="hidden md:block">
            <div className="tracking-tight font-light leading-[1.15] text-white md:text-3xl text-xs uppercase">
              Welcome to{" "}
            </div>
            <div className="tracking-tight font-extrabold leading-[1.15] text-white md:text-5xl text-xs uppercase">
              IUT Debating Society
            </div>
            <p className="tracking-tighter leading-[1.15] text-white md:text-xl text-xs">
              Where logic meets rhetoric and prudence meets eloquence
            </p>
          </div>
          <div className="py-8 hidden md:block">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSepaAMXajB0oPrQVB4Iv7BBZ_8XJQ64l3bHjLZZhy1DjKL7OA/viewform"
              passHref
              className="text-xl px-10 py-4 rounded-lg bg-iutdsred uppercase text-white hover:bg-red-600 transition duration-300"
            >
              IV Pre-Registration
            </Link>
          </div>
          <div className="md:hidden mt-20">
            {" "}
            {/* Display only on smaller screens */}
            <div className="text-xl tracking-tight font-extralight leading-[1.15] uppercase">
              Welcome to{" "}
            </div>
            <div className="text-3xl font-black uppercase">
              IUT Debating Society
            </div>
            <p className="text-sm tracking-tightest">
              Where logic meets rhetoric and prudence meets eloquence
            </p>
            <div className="pt-8">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSepaAMXajB0oPrQVB4Iv7BBZ_8XJQ64l3bHjLZZhy1DjKL7OA/viewform"
                passHref
                className="text-base px-10 py-4 rounded-lg bg-iutdsred uppercase text-white hover:bg-red-600 transition duration-300"
              >
                IV Pre-Registration
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
