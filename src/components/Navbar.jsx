import React, { useState } from "react";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white p-4 flex items-center justify-between md:flex-row flex-col md:px-20">
      <div className="flex items-center space-x-4">
        <span className="text-4xl font-bold text-red-600">
          ASE <span className="text-[#232F3E] text-2xl">Library</span>
        </span>
      </div>

      {/* Hamburger effect on mobile screens */}
      <button
        className="md:hidden text-[#232F3E] text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Search Bar for both mobile and big screens */}

      <div className="mx-4 flex items-center bg-white text-black px-2 py-3 rounded-full border-2  md:w-[500px] mt-2 md:mt-0">
        <input
          type="text"
          placeholder="Search by author or publisher or title"
          className="flex-1 p-1 outline-none"
        />
        <button className="p-2 text-gray-900">
          <FaSearch className="w-5 h-5 text-red-600 " />
        </button>
      </div>

      <div className="hidden md:flex space-x-6 text-lg">
        <Link
          to="/About"
          className="hover:text-red-600 text-[#232F3E] font-semibold"
        >
          Home
        </Link>
        <Link
          to="/About"
          className="hover:text-red-600 text-[#232F3E] font-semibold"
        >
          Categories
        </Link>
        <Link
          to="/About"
          className="hover:text-red-600 text-[#232F3E] font-semibold"
        >
          About
        </Link>
        <Link
          to="/About"
          className="hover:text-red-600 text-[#232F3E] font-semibold"
        >
          Library
        </Link>
        <Link
          to="/About"
          className="hover:text-red-600 text-[#232F3E] font-semibold"
        >
          Contact
        </Link>
      </div>

      {/* Mobile friendly sign-in button */}

      <div className="md:hidden flex items-center space-x-4">
        <button className="bg-red-600 text-white px-4 py-2 rounded-full ">
          Sign in
        </button>
      </div>

      {/* Sign-in for bigger screens */}
      <button className="bg-red-600 hover:bg-yellow-400 text-white text-[20px] px-4 py-2 rounded-full hidden md:block">
        Sign in
      </button>
    </nav>
  );
};

export default Navbar;
