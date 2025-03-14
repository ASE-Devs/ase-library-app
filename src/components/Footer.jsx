import React from "react";

export default function Footer() {
  return (
    <footer className="bg-red-600 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {/* Logo & Description */}
          <div>
            <h2 className="text-4xl font-bold flex items-center">
              <span className="text-white font-extrabold text-3xl">ASE </span> <span className="text-2xl"><h1>Library</h1>
                </span>
            </h2>
            <p className="mt-2 text-sm font-bold">
              Get the breathing space now, and we’ll extend your term at the other end year for go.
            </p>
            {/* we will insert the social media icons in them by linking them to the respective social media platforms */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-gray-700"></a>
              <a href="#" className="text-gray-500 hover:text-gray-700"></a>
              <a href="#" className="text-gray-500 hover:text-gray-700"></a>
              <a href="#" className="text-gray-500 hover:text-gray-700"></a>
            </div>
          </div>

          {/* Book Categories, the file has to be responsive when you resize the window and also when you click it, it should lead you somewhere*/}
          <div>
            <h3 className="font-bold text-lg">Book Category</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:underline font-semibold">History</a></li>
              <li><a href="#" className="hover:underline font-semibold">Horror - Thriller</a></li>
              <li><a href="#" className="hover:underline font-semibold">Love Stories</a></li>
              <li><a href="#" className="hover:underline font-semibold">Science Fiction</a></li>
              <li><a href="#" className="hover:underline font-semibold">Digital Marketing</a></li>
              <li><a href="#" className="hover:underline font-semibold">Software Development</a></li>
            </ul>
          </div>

          {/* Site Map, when you click on it, it should lead you to their respective pages */}
          <div>
            <h3 className="font-bold text-lg">Site Map</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:underline font-semibold">Home</a></li>
              <li><a href="#" className="hover:underline font-semibold">About Us</a></li>
              <li><a href="#" className="hover:underline font-semibold">FAQs</a></li>
              <li><a href="#" className="hover:underline font-semibold">Blog</a></li>
              <li><a href="#" className="hover:underline font-semibold">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-white">
          <p>Copyright &copy;2025 All rights reserved | ASE Library</p>
        </div>
      </div>
    </footer>
  );
}
