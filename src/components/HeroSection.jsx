import React from "react";

const HeroSection = ({ title, subtitle, buttonText, image }) => {
  return (
    <div>
      <div className="grid grid-cols-2 items-center bg-pink-200 p-10 gap-4 w-[95%] mx-auto rounded-lg">

        {/* The text/button and image section props that can be called in the various pages and modified */}
        
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="text-gray-600 text-xl mt-2">{subtitle}</p>
          {buttonText && (
            <button className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:text-blue-900">
              {buttonText}
            </button>
          )}
        </div>
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
