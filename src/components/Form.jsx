import React, { useState } from "react";

const Form = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !publisher) {
      alert("Please fill in all fields");
      return;
    }

    const newBook = {
      title,
      author,
      publisher,
    };

    console.log("Book Added:", newBook); // Simulating data submission
    onAdd(); // Close modal after submission

    // Reset form fields
    setTitle("");
    setAuthor("");
    setPublisher("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <h2 className="text-2xl font-semibold text-[#232F3E]">Add New Book</h2>

      {/* Title Input */}
      <div>
        <label className="block text-[#232F3E] mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book title"
          className="w-full px-4 py-2 border rounded-lg outline-none focus:border-red-600"
          required
        />
      </div>

      {/* Author Input */}
      <div>
        <label className="block text-[#232F3E] mb-1">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author's name"
          className="w-full px-4 py-2 border rounded-lg outline-none focus:border-red-600"
          required
        />
      </div>

      {/* Publisher Input */}
      <div>
        <label className="block text-[#232F3E] mb-1">Publisher</label>
        <input
          type="text"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
          placeholder="Enter publisher's name"
          className="w-full px-4 py-2 border rounded-lg outline-none focus:border-red-600"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-[#232F3E]"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
