import React from 'react';
import bookcardimage from '../assets/images/bestselling.jpg';
import { Link } from 'react-router';
import SingleBooks from '../pages/SingleBooks';

const Bookcard = ({ id, image = bookcardimage, title, author, rating, description }) => {
    return (
        <Link to={`/books/${id}`} className="block hover:shadow-lg transition-shadow duration-300 rounded-md">
            <div className="overflow-hidden w-43 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">

                {/* Book Image */}
                <div className="overflow-hidden">
                    <img src={image} alt={title || "Book Image"} className="w-40 h-56 object-cover" />
                </div>

                {/* Book Details */}
                <div className="py-2 px-3">
                    <p className="text-lg font-semibold text-gray-800">{title || "Book Title"}</p>
                    <p className="text-gray-500 mb-1">{author || "Author Name"}</p>

                    <div className="flex items-center mb-1">
                        <span className="text-yellow-500">{'★'.repeat(rating || 1)}</span>
                        <span className="text-gray-400 ml-1">{rating || 1}/5</span>
                    </div>

                    <p className="text-gray-600 text-sm">{description || "No description available."}</p>
                </div>
            </div>
        </Link>
    );
};

export default Bookcard;
