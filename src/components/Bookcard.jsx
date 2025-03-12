import React from 'react';
import bookcardimage from '../assets/images/bestselling.jpg';

const Bookcard = ({ image = bookcardimage, title, author, rating, description }) => {
    return (
        <div className=" overflow-hidden w-43">
            <div className=" overflow-hidden">
                <img src={image} alt={title || "Book Image"} className="w-40 object-cover" />
            </div>

            <div className="py-2">
                <p className="text-l font-semibold">{title || "Book Title"}</p>
                <p className="text-gray-500">{author || "Author Name"}</p>

                <div className="flex items-center">
                    <span className="text-yellow-500">{'★'.repeat(rating || 1)}</span>
                    <span className="text-gray-400 ">{rating || 1}/5</span>
                </div>

                <p className="text-gray-700 text-sm">{description || "No description available."}</p>
            </div>
        </div>
    );
};

export default Bookcard;
