import React, { useState } from "react";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between md:px-20 relative">
      {/* Library name */}
      <div className="flex items-center space-x-4">
        <span className="text-4xl font-bold text-red-600">
          ASE <span className="text-[#232F3E] text-2xl">Library</span>
        </span>
      </div>

      {/* Desktop Search Bar (Always Visible) */}
      <div className="hidden md:flex mx-4 items-center bg-gray-100 text-black px-2 py-2 rounded-full border w-[500px]">
        <input
          type="text"
          placeholder="Search by author or publisher or title"
          className="flex-1 p-1 outline-none bg-transparent"
        />
        <button className="p-2 text-gray-900">
          <FaSearch className="w-5 h-5 text-red-600" />
        </button>
      </div>

      {/* Mobile Icons */}
      <div className="flex md:hidden space-x-4">
        {/* Search Icon (toggles search input on mobile) */}
        <button
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="text-[#232F3E] text-2xl"
        >
          {isSearchOpen ? <FaTimes /> : <FaSearch />}
        </button>

        {/* Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#232F3E] text-2xl"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Search Bar (Only Shows When Clicked) */}
      {isSearchOpen && (
        <div className="absolute top-16 left-0 w-full px-4 md:hidden">
          <div className="flex items-center bg-gray-100 text-black px-2 py-2 rounded-full border">
            <input
              type="text"
              placeholder="Search by author or publisher or title"
              className="flex-1 p-1 outline-none bg-transparent"
            />
            <button className="p-2 text-gray-900">
              <FaSearch className="w-5 h-5 text-red-600" />
            </button>
          </div>
        </div>
      )}

      {/* Desktop nav links */}
      <div className="hidden md:flex space-x-6 text-lg">
        <a href="#" className="hover:text-red-600 text-[#232F3E] font-semibold">
          Home
        </a>
        <a href="#" className="hover:text-red-600 text-[#232F3E] font-semibold">
          Categories
        </a>
        <a href="#" className="hover:text-red-600 text-[#232F3E] font-semibold">
          About
        </a>
        <a href="#" className="hover:text-red-600 text-[#232F3E] font-semibold">
          Library
        </a>
        <a href="#" className="hover:text-red-600 text-[#232F3E] font-semibold">
          Contact
        </a>
      </div>

      {/* Mobile nav links */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center p-4 space-y-4 md:hidden">
          <a
            href="#"
            className="hover:text-red-600 text-[#232F3E] font-semibold"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-red-600 text-[#232F3E] font-semibold"
          >
            Categories
          </a>
          <a
            href="#"
            className="hover:text-red-600 text-[#232F3E] font-semibold"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-red-600 text-[#232F3E] font-semibold"
          >
            Library
          </a>
          <a
            href="#"
            className="hover:text-red-600 text-[#232F3E] font-semibold"
          >
            Contact
          </a>
          <button className="bg-red-600 text-white px-4 py-2 rounded-full">
            Sign in
          </button>
        </div>
      )}

      {/* Sign-in Button */}
      <button className="bg-red-600 hover:bg-[#232F3E] text-white text-[20px] px-4 py-2 rounded-full hidden md:block">
        Sign in
      </button>
    </nav>
  );
};

export default Navbar;
