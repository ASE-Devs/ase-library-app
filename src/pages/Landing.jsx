import { Link } from "react-router";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Library Books</h1>

      <div className="grid gap-4">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="p-4 border rounded-md shadow">
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-gray-600">Author: {book.author}</p>

              {/* Link to Delete Page */}
              <Link
                to={`/delete/${book.id}`}
                className="bg-red-500 text-white px-4 py-2 mt-2 inline-block rounded hover:bg-red-700"
              >
                Delete Book
              </Link>
            </div>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
