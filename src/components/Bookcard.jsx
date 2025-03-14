import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
import bookcardimage from '../assets/images/bestselling.jpg';

const Bookcard = ({
    id,
    image = bookcardimage,
    title = "Book Title",
    author = "Author Name",
    rating = 1,
    description = "No description available."
}) => {

    // Render stars based on rating
    const renderStars = () => {
        return [...Array(5)].map((_, index) =>
            index < rating ? (
                <FaStar key={index} className="text-yellow-500 text-sm" />
            ) : (
                <FaRegStar key={index} className="text-gray-300 text-sm" />
            )
        );
    };

    return (
        <Link
            to={`/books/${id}`}
            className="block transition-transform duration-300 hover:scale-105"
        >
            <div className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden w-64">

                {/* Book Image */}
                <div className="overflow-hidden h-72">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                </div>

                {/* Book Details */}
                <div className="p-4 space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
                    <p className="text-sm text-gray-500 truncate">{author}</p>

                    <div className="flex items-center space-x-1">
                        {renderStars()}
                    </div>

                    <p className="text-gray-600 text-sm line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Bookcard;
