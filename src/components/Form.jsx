import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Form = ({ onAdd }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    pages: "0",
    publishedDate: "",
    genre: "",
    publisher: "",
    summary: "",
    language: "English",
    image: null, // Added image state
  });

  const [buttonText, setButtonText] = useState("Add to Library");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    if (type === "file") {
      // If input is a file, store the file object
      setBook((prevBook) => ({
        ...prevBook,
        image: files[0], // Only taking the first selected file
      }));
    } else {
      setBook((prevBook) => ({
        ...prevBook,
        [name]: name === "pages" ? parseInt(value, 10) || "" : value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    Object.entries(book).forEach(([key, value]) => {
      if (key === "image" && value) {
        formData.append(key, value); // Append the image file
      } else {
        formData.append(key, value);
      }
    });

    setButtonText("Adding to Library...");

    try {
      const response = await axios.post(
        "https://library-api-hyt0.onrender.com/api/v1/books",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      onAdd(response.data);

      // Reset form
      setBook({
        title: "",
        author: "",
        pages: "0",
        publishedDate: "",
        genre: "",
        publisher: "",
        summary: "",
        language: "English",
        image: null, // Reset image
      });

      setButtonText("Added to Library");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add book to Library");
      setButtonText("Add to Library");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-700">Pages</label>
            <input
              type="number"
              name="pages"
              placeholder="Pages"
              value={book.pages}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700">Date Published</label>
            <input
              type="date"
              name="publishedDate"
              value={book.publishedDate}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-700">Genre</label>
            <input
              type="text"
              name="genre"
              placeholder="Genre"
              value={book.genre}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700">Publisher</label>
            <input
              type="text"
              name="publisher"
              placeholder="Publisher"
              value={book.publisher}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>
        <textarea
          name="summary"
          placeholder="Summary"
          value={book.summary}
          onChange={handleChange}
          className="w-full p-2 border rounded resize-none"
          rows="3"
        ></textarea>
        <div>
          <label className="block text-gray-700">Language</label>
          <input
            type="text"
            name="language"
            placeholder="Language"
            value={book.language}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Upload Book Cover</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-950"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default Form;
