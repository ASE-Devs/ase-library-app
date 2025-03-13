import React, { useState } from 'react';

const Form = ({ onAdd }) => {
  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
    publishedDate: '',
    genre: '',
    description: ''
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!book.title || !book.author) return;
    onAdd({ ...book, id: Date.now() }); // Assign unique ID
    setBook({ id: '', title: '', author: '', publishedDate: '', genre: '', description: '' });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" value={book.title} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="author" placeholder="Author" value={book.author} onChange={handleChange} className="w-full p-2 border rounded" required />
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-700">Date Published</label>
            <input type="date" name="publishedDate" value={book.publishedDate} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700">Genre</label>
            <input type="text" name="genre" placeholder="Genre" value={book.genre} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
        </div>
        <textarea 
          name="description" 
          placeholder="Description" 
          value={book.description} 
          onChange={handleChange} 
          className="w-full p-2 border rounded resize-none overflow-hidden"
          rows="3"
          onInput={(e) => {
            e.target.style.height = 'auto';
            e.target.style.height = e.target.scrollHeight + 'px';
          }}
        ></textarea>
        <button type="submit" className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-950">Add Book</button>
      </form>
    </div>
  );
};

export default Form;



