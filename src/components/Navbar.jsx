import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-2 flex items-center justify-between md:flex-row flex-col md:p-4">
      {/* Logo and Na-  me of Library for both mobile and big screens*/}

      <div className="w-full flex justify-between items-center md:w-auto">
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            <FaBars className="w-6 h-6" />
          </button>

          {/* IF WE GET TO USE A LOGO -it goes here */}

          {/* <img src="/assets/images/ourlogo.jpg" alt="Logo" className="w-8 h-8" /> */}

          <span className="text-2xl font-bold text-yellow-500">
            ASE <span className="text-gray-100 text-xl">Library</span>
          </span>
        </div>

        {/* Mobile friendly shopping cart and sign-in button */}

        <div className="md:hidden flex items-center space-x-4">
          <button className="relative">
            <FaShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs px-2 rounded-full">
              0
            </span>
          </button>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold">
            Sign in
          </button>
        </div>
      </div>

      {/* Search Bar for both mobile and big screens */}

      <div className="mx-4 flex items-center bg-white text-black px-2 rounded-md w-full md:w-[400px] mt-2 md:mt-0">
        <input
          type="text"
          placeholder="Search by author or publisher or title"
          className="flex-1 p-1 outline-none"
        />
        <button className="p-2 text-gray-900">
          <FaSearch className="w-5 h-5 text-yellow-500" />
        </button>
      </div>

      {/* Shopping cart and text for bigger screens */}

      <div
        className={`flex flex-col md:flex-row md:items-center space-x-4 w-full md:w-auto mt-2 md:mt-0 ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        <span className="block md:inline">FAQ</span>
        <span className="block md:inline">Track Order</span>
        <button className="relative hidden md:block">
          <FaShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs px-2 rounded-full">
            0
          </span>
        </button>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hidden md:block">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
