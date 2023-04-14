import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = ["Home", "About", "Program", "Contact Us"];
  return (
    <div className="container flex items-center justify-between py-2 relative ">
      <div className="flex items-center gap-2 ">
        <Image
          className="w-36 "
          src="/img/logo.png"
          height={500}
          width={500}
          alt="Cruise"
        />
      </div>
      <ul
        id="navMenu"
        className={` md:flex absolute transition-all duration-300 ease-in-out  w-full left-0 bg-transparent shadow-xl backdrop-filter backdrop-blur-lg ${
          isOpen ? "top-[3.25rem]" : "-top-96"
        }`}
      >
        <li className="py-4 px-4 font-semibold text-sky-900 text-xl cursor-pointer hover:bg-sky-500 hover:text-slate-100 ">
          Home
        </li>
        <li className="py-4 px-4 font-semibold text-sky-900 text-xl cursor-pointer hover:bg-sky-500 hover:text-slate-100 ">
          About
        </li>
        <li className="py-4 px-4 font-semibold text-sky-900 text-xl cursor-pointer hover:bg-sky-500 hover:text-slate-100 ">
          Program
        </li>
        <li className="py-4 px-4 font-semibold text-sky-900 text-xl cursor-pointer hover:bg-sky-500 hover:text-slate-100 ">
          Contact Us
        </li>
      </ul>
      <button id="navButton" onClick={handleToggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-blue-500 border"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;

// top-[3.25rem]
// -top-96
