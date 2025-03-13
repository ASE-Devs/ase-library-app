import { useState } from "react";

const DeleteBookForm = ({ bookId, onDelete }) => {
  const [confirm, setConfirm] = useState(false);

  const handleDelete = () => {
    // Call the delete API or function
    onDelete(bookId);
    setConfirm(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-red-600">Delete Book</h2>
      <p className="text-gray-700">Are you sure you want to delete this book? This action cannot be undone.</p>

      {!confirm ? (
        <button
          onClick={() => setConfirm(true)}
          className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-700"
        >
          Delete
        </button>
      ) : (
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Confirm Delete
          </button>
          <button
            onClick={() => setConfirm(false)}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteBookForm;
