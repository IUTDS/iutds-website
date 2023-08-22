import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black md:rounded-tl-full md:rounded-tr-full rounded-tl-3xl rounded-tr-3xl border md:p-3 md:pt-8 md:pb-4 pt-4 pb-2 text-center">
      <div className="flex flex-col items-center">
        <div className="flex gap-10 text-white pb-2">
          <Link href="https://www.facebook.com/iutdebatingsociety">
            <BsFacebook size={25} className="hover:text-red-500" />
          </Link>
          <Link href="https://www.instagram.com/iut_ds/">
            <BsInstagram size={25} className="hover:text-red-500" />
          </Link>
          <Link href="https://www.linkedin.com/company/iut-debating-society/">
            <BsLinkedin size={25} className="hover:text-red-500" />
          </Link>
        </div>
        <Link
          href="mailto:iutds@iut-dhaka.edu"
          className="md:text-lg pb-2 text-sm text-slate-300 lowercase
          hover:brightness-200 hover:text-white"
        >
          iutds@iut-dhaka.edu
        </Link>
        <hr className="border-iutdsred w-full my-4" />
        <p className="md:text-xl text-lg text-white tracking-widest font-light uppercase">
          IUT Debating Society
        </p>
      </div>
    </footer>
  );
};

export default Footer;
