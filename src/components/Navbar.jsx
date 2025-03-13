import React, { useState } from "react";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";
import Form from "../components/Form";
import { Link } from "react-router-dom"; // Import Link for routing

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="bg-white shadow-md p-4 flex items-center justify-between md:px-20 relative">

        {/* Library Name */}
        <div className="flex items-center space-x-4">
          <span className="text-4xl font-bold text-red-600">
            ASE <span className="text-[#232F3E] text-2xl">Library</span>
          </span>
        </div>

        {/* Desktop Search Bar */}
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
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-[#232F3E] text-2xl"
          >
            {isSearchOpen ? <FaTimes /> : <FaSearch />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#232F3E] text-2xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-red-600 text-[#232F3E] font-semibold">Home</Link>
          <a href="#" className="hover:text-red-600 text-[#232F3E] font-semibold">Categories</a>
          <a href="#" className="hover:text-red-600 text-[#232F3E] font-semibold">About</a>

          {/* ✅ Link to Books Page */}
          <Link to="/books" className="hover:text-red-600 text-[#232F3E] font-semibold">Library</Link>

          <a href="#" className="hover:text-red-600 text-[#232F3E] font-semibold">Contact</a>
        </div>

        {/* Add Book Button */}
        <button
          onClick={openModal}
          className="bg-red-600 hover:bg-[#232F3E] text-white text-[20px] px-4 py-2 rounded-full hidden md:block"
        >
          Add Book
        </button>
      </nav>

      {/* Modal Overlay with Blur */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-[90%] md:w-[600px]">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
            >
              <FaTimes size={24} />
            </button>
            <Form onAdd={() => closeModal()} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
