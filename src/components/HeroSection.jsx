import React from "react";
import { Link } from "react-router";

const HeroSection = ({ title, subtitle, buttonText, image }) => {
  return (
    <div>
      {/* The navigation links at the top of the hero section */}
      <nav className="w-full bg-white text-black py-4 px-8 flex justify-center space-x-6 shadow-sm">
        <Link to="/" className="hover:text-yellow-500 font-semibold">
          Home
        </Link>
        <Link to="/categories" className="hover:text-yellow-500 font-semibold">
          Categories
        </Link>
        <Link to="/about" className="hover:text-yellow-500 font-semibold">
          About
        </Link>
        <Link to="/pages" className="hover:text-yellow-500 font-semibold">
          Pages
        </Link>
        <Link to="/blog" className="hover:text-yellow-500 font-semibold">
          Blog
        </Link>
        <Link to="/contact" className="hover:text-yellow-500 font-semibold">
          Contact
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="grid grid-cols-2 items-center bg-pink-200 p-6 gap-4 w-[95%] mx-auto rounded-lg ">
        {/* The text section props that can be called in the various pages and modified */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="text-gray-600 text-xl mt-2">{subtitle}</p>

          {/* The button text component that can be modified and also called as a property {prop}*/}
          {buttonText && (
            <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg">
              {buttonText}
            </button>
          )}
        </div>

        {/* Here is the image div - further styling can be done here for it */}
        <div className="flex justify-center md:justify-end">
          <img
            src={image}
            alt="Hero"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-8 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
