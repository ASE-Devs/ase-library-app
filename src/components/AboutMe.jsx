import React from "react";
import readImage from "../assets/images/read.jpg"; // Adjust the path if necessary

const AboutSection = () => {
    return (
        <section className="w-full h-screen bg-[#d8d8d8] flex items-center justify-center px-4 md:px-20">
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-8">
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-[400px] md:h-[500px]">
                    <img
                        src={readImage}
                        alt="About ASE Library"
                        className="rounded-lg shadow-lg w-full h-full object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-5xl font-bold text-red-600 mb-6">
                        About ASE Library
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        ASE Library is dedicated to providing a wide selection of books,
                        ranging from classic literature to modern-day bestsellers. We
                        believe in the power of reading to educate, inspire, and entertain.
                        Whether you're a student, a researcher, or a casual reader, ASE
                        Library is your destination for knowledge and discovery.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
