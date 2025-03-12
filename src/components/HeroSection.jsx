import React from "react";

const HeroSection = ({ title, subtitle, image, buttonText, }) => {
  return (
    <div className="grid grid-cols-2 items-center bg-pink-200 p-6 gap-4 w-full mx-auto">
      
      {/* The text section props that can be called in the various pages and modified */}

      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-gray-400 text-2xl">{subtitle}</p>

        {/* The button text component that can be modified and also called as a property {prop}*/}
        {buttonText && (
          <button 
            className="mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg"
          >
            {buttonText}
          </button>
        )}
      </div>

      {/* Here is the image div - further styling can be done here for it */}
      <div className="flex-1 flex justify-center">
        <img src={image} alt="Hero" 
          className="w-40 h-40 md:w-70 md:h-70 rounded-full object-cover border-8 border-white"/>
      </div>
    </div>
  );
};

export default HeroSection;
