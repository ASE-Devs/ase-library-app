import React, { useEffect, useState } from "react";
import PagesLayout from "../layout/PagesLayout";
import FilterSidebar from "../components/Filter";
import ContactForm from "../components/ContactForm";
import HeroSection from "../components/HeroSection";
import image from "../assets/images/another.jpg";
import Bookcard from "../components/Bookcard";
import Newsletter from "../components/Newsletter";

const API_URL = "https://library-api-hyt0.onrender.com/api/v1/books";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch books");
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <PagesLayout>
      <div>
        <HeroSection
          image={image}
          title="A library is a place where you can lose your innocence without losing your virginity."
          subtitle="Germaine Greer"
          buttonText="Browse More"
        />

        <div className="flex justify-center">
          <FilterSidebar className="w-full" />

          <div className="flex gap-6 p-20 flex-wrap">
            {loading ? (
              <p>Loading books...</p>
            ) : error ? (
              <p className="text-red-500">Error: {error}</p>
            ) : books.length === 0 ? (
              <p>No books available.</p>
            ) : (
              books.map((book) => (
                <Bookcard
                  key={book.id}
                  id={book.id}
                  image={
                    book.image
                      ? `https://library-api-hyt0.onrender.com/api/v1/books${book.image}`
                      : undefined
                  }
                  title={book.title}
                  author={book.author}
                  rating={Math.floor(Math.random() * 5) + 1} // Random rating for now
                  description={book.summary}
                />
              ))
            )}
          </div>
        </div>

        <Newsletter />
      </div>
    </PagesLayout>
  );
};

export default Books;
