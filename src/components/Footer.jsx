import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-950  py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold flex items-center">
              <span className="text-red-500 text-3xl">📖</span> ASE LIBRARY
            </h2>
            <p className="mt-2 text-sm">
              Get the breathing space now, and we’ll extend your term at the other end year for go.
            </p>
            {/* we will insert the social media icons in them by linking them to the respective social media platforms */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">🔵</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">📸</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">🔗</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">▶</a>
            </div>
          </div>

          {/* Book Categories, the file has to be responsive when you resize the window and also when you click it, it should lead you somewhere*/}
          <div>
            <h3 className="font-semibold text-lg">Book Category</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:underline">History</a></li>
              <li><a href="#" className="hover:underline">Horror - Thriller</a></li>
              <li><a href="#" className="hover:underline">Love Stories</a></li>
              <li><a href="#" className="hover:underline">Science Fiction</a></li>
              <li><a href="#" className="hover:underline">Digital Marketing</a></li>
              <li><a href="#" className="hover:underline">Software Development</a></li>
              <li><a href="#" className="hover:underline">Ecommerce</a></li>
            </ul>
          </div>

          {/* Site Map, when you click on it, it should lead you to their respective pages */}
          <div>
            <h3 className="font-semibold text-lg">Site Map</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-white">
          <p>Copyright &copy;2025 All rights reserved | This template is made with ❤️ by Colorlib</p>
        </div>
      </div>
    </footer>
  );
}
