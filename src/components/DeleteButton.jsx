import React, { useState } from "react";

const DeleteButton = ({ onDelete }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDelete = () => {
    setShowPopup(false);
    onDelete(); // Call the delete function passed as a prop
  };

  return (
    <div>
      {/* Delete Button */}
      <button
        onClick={() => setShowPopup(true)}
        className="bg-red-600 hover:bg-red-800 text-white px-3 py-1 rounded-md transition"
      >
        Delete
      </button>

      {/* Confirmation Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg text-center">
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to delete this book?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-md transition"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteButton;
