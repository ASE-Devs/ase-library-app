import React, { useState } from "react";
import { Link } from "react-router-dom"; // Fix incorrect import
import PagesLayout from "../layout/PagesLayout";
import EditBook from "./Edit";

// Sample book data
const book = {
  id: 1,
  title: "Unique Paths",
  author: "Elaine Harper",
  genre: "Inspirational Fiction",
  rating: 4,
  description:
    "A compelling narrative about finding hope and strength through life's unpredictable journey.",
  publicationInfo: "Published in January 2025",
};

// Sample reviews data
const reviews = [
  {
    id: 1,
    user: { name: "James Wood", date: "March 12, 2025" },
    rating: 5,
    title: "A Life-Changing Read!",
    content:
      "Every chapter resonated deeply with me. The emotions felt real and raw.",
  },
  {
    id: 2,
    user: { name: "Sophia Turner", date: "March 8, 2025" },
    rating: 4,
    title: "Beautifully Written",
    content:
      "The author's writing style is captivating. Loved every bit of it.",
  },
];

// Function to render star ratings
const renderStars = (rating) => {
  return [...Array(5)].map((_, index) => (
    <span
      key={index}
      className={index < rating ? "text-amber-500" : "text-gray-300"}
    >
      ★
    </span>
  ));
};

const BookDetails = () => {
  const [isEditing, setIsEditing] = useState(false); // Track edit modal state

  return (
    <PagesLayout>
      <div
        className={`container mx-auto px-4 py-10 max-w-5xl ${
          isEditing ? "blur-sm" : ""
        }`}
      >
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-gray-700 cursor-pointer">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            to="/book-details"
            className="hover:text-gray-700 cursor-pointer"
          >
            Books
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{book.title}</span>
        </div>

        {/* Book Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
          {/* Book Cover with Link */}
          <Link to={`/books/${book.id}`} className="w-full">
            <div className="w-full h-96 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="font-bold mb-2 text-gray-500">Book Cover</div>
                <div className="text-sm text-gray-400">{book.title}</div>
              </div>
            </div>
          </Link>

          {/* Book Information */}
          <div>
            <Link to={`/books/${book.id}`}>
              <h1 className="text-3xl font-bold text-gray-800 mb-2 hover:underline">
                {book.title}
              </h1>
            </Link>
            <p className="text-lg text-gray-600 mb-4">
              by <span className="italic">{book.author}</span>
            </p>
            <p className="text-xs uppercase text-gray-500 tracking-wide mb-3">
              {book.genre}
            </p>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="mr-2 text-sm font-medium text-gray-600">
                Rating:
              </div>
              <div className="flex">{renderStars(book.rating)}</div>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-6">
              {book.description}
            </p>
            <p className="text-gray-400 text-xs">{book.publicationInfo}</p>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <button className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md">
                Add to Library
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg transition duration-300 shadow-md">
                Read Now
              </button>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md"
              >
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            What Readers Say
          </h2>
          <div className="grid gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="p-6 bg-white shadow-lg rounded-lg"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3 text-gray-700 text-sm font-bold">
                    {review.user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-medium text-gray-700">
                      {review.user.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {review.user.date}
                    </div>
                  </div>
                </div>

                <div className="flex mb-2">{renderStars(review.rating)}</div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  {review.title}
                </h3>
                <p className="text-gray-600">{review.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Add Review Button */}
        <div className="text-center mt-10">
          <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-full shadow-lg transition duration-300">
            Share Your Experience
          </button>
        </div>
      </div>

      {/* Edit Book Modal */}
      {isEditing && (
        <EditBook
          id={book.id}
          title={book.title}
          author={book.author}
          rating={book.rating}
          description={book.description}
          onClose={() => setIsEditing(false)}
        />
      )}
    </PagesLayout>
  );
};

export default BookDetails;
