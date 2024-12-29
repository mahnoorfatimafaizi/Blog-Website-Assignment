import React from "react";
import Link from "next/link";
import HamBurger from "./HamBurger";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between h-[100px]">
      <Image src="/images/logo.png" alt="lama blog" width={50} height={50} />
      <Link href="/">
        <div className=" ml-2 flex-1 underline font-serif text-center text-md font-semibold lg:text-3xl md:text-2xl sm:text-base md:text-left">
          ExploresByMahnoor
        </div>
      </Link>
      <div className="flex items-center gap-5 flex-1 text-xl xl:text-lg xl:gap-4 sm:justify-end">
        <Link href="/" className="hidden sm:inline">
          Home
        </Link>
        <Link href="/pages/about" className="hidden sm:inline">
          About
        </Link>
        <Link href="/pages/contact" className="hidden sm:inline">
          Contact
        </Link>
      </div>
      <div className=" sm:hidden ">
        <HamBurger />
      </div>
    </div>
  );
};

export default NavBar;
