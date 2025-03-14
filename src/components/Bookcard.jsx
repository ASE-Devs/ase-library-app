import React from "react";
import bookcardimage from "../assets/images/bestselling.jpg"; // Default image
import { Link } from "react-router";
import { Star, StarHalf, Star as StarEmpty } from "lucide-react";

const Bookcard = ({ id, image, title, author, rating = 1, description }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex text-yellow-500">
        {[...Array(fullStars)].map((_, index) => (
          <Star
            key={`full-${index}`}
            size={18}
            fill="currentColor"
            stroke="none"
          />
        ))}
        {hasHalfStar && (
          <StarHalf size={18} fill="currentColor" stroke="none" />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <StarEmpty
            key={`empty-${index}`}
            size={18}
            stroke="currentColor"
            className="text-gray-300"
          />
        ))}
      </div>
    );
  };

  return (
    <Link
      to={`/books/${id}`}
      className="block hover:shadow-lg transition-shadow duration-300 rounded-lg"
    >
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 p-4">
        {/* Book Image */}
        <div className="w-full flex justify-center mb-3">
          <img
            src={image || bookcardimage} // Use API image or default image
            alt={title || "Book Cover"}
            className="w-40 h-56 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Book Details */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-800 truncate">
            {title || "Book Title"}
          </h3>
          <p className="text-gray-500 text-sm">{author || "Author Name"}</p>

          {/* Star Ratings */}
          <div className="flex justify-center items-center mt-1">
            {renderStars(rating)}
            <span className="ml-2 text-gray-500 text-sm">
              {rating.toFixed(1)}/5
            </span>
          </div>

          {/* Book Description */}
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {description || "No description available."}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Bookcard;
