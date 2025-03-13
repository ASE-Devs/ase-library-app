import React from "react";
import PagesLayout from "../layout/PagesLayout";
import FilterSidebar from "../components/Filter";
import ContactForm from "../components/ContactForm";
import libraryBook from "../assets/images/library.jpg";
import Bookcard from "../components/Bookcard";
import Newsletter from "../components/Newsletter";

const Books = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <PagesLayout>
      <div>
        {/* Paragraph with Background Image and Gradient Overlay */}
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${libraryBook})`,
          }}
          className="h-165 w-full bg-cover bg-center text-white flex p-4 flex-col items-center justify-center"
        >
          <p className="text-4xl md:text-8xl font-bold text-center">
            Libraries are the thin red line between civilization and barbarism
          </p>
          <p className="text-lg md:text-xl">— Neil Gaiman</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center my-20 gap-4">
          {/* Sidebar Section */}
          <div className="w-full md:w-1/4">
            <FilterSidebar />
          </div>

          {/* Books Listing Section */}
          <div className="w-full md:w-3/4 flex gap-6 flex-wrap justify-center">
            {arr.map((ar) => (
              <Bookcard key={ar} />
            ))}
          </div>
        </div>

        <Newsletter />
      </div>
    </PagesLayout>
  );
};

export default Books;
