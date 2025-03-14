import { useState } from "react";

const EditBook = ({ id, title, author, rating, description, onClose }) => {
  const [editedBook, setEditedBook] = useState({
    title,
    author,
    rating,
    description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated book:", editedBook); // Replace with an API call
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md bg-black/30">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit Book</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="title"
            value={editedBook.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Title"
          />
          <input
            type="text"
            name="author"
            value={editedBook.author}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Author"
          />
          <input
            type="number"
            name="rating"
            value={editedBook.rating}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Rating"
          />
          <textarea
            name="description"
            value={editedBook.description}
            onChange={handleChange}
            className="w-full p-2 border rounded resize-none"
            rows="3"
            placeholder="Description"
          ></textarea>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
