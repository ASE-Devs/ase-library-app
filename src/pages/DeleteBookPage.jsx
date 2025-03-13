import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const DeleteBookPage = () => {
  const { id } = useParams(); // Get book ID from URL
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch book details
  useEffect(() => {
    fetch(`/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching book:", err);
        setLoading(false);
      });
  }, [id]);

  // Delete book function
  const handleDelete = async () => {
    try {
      await fetch(`/api/books/${id}`, { method: "DELETE" });
      alert("Book deleted successfully!");
      navigate("/"); // Redirect back to homepage
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="p-6">
      {loading ? (
        <p>Loading...</p>
      ) : book ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-red-600">Confirm Deletion</h2>
          <p className="text-gray-700">
            Are you sure you want to delete <strong>{book.title}</strong>?
          </p>

          <div className="flex gap-4 mt-4">
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Yes, Delete
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <p>Book not found.</p>
      )}
    </div>
  );
};

export default DeleteBookPage;
