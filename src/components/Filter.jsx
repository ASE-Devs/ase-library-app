import { useState } from "react";

export default function FilterSidebar() {
  const [selectedAuthor, setSelectedAuthor] = useState("Phil Harmonic");
  const [selectedRating, setSelectedRating] = useState("Filter by Rating");
  const [isRatingOpen, setIsRatingOpen] = useState(false);

  const genres = ["History", "Horror - Thriller", "Love Stories", "Science Fiction", "Biography"];
  const publishers = ["Green Publications", "Anondo Publications", "Rinku Publications", "Sheba Publications", "Red Publications"];
  const authors = ["Buster Hyman", "Phil Harmonic", "Cam L. Toe", "Otto Matic", "Juan Annatoo"];
  const rating = ["⭐ 1 Star", "⭐⭐ 2 Stars", "⭐⭐⭐ 3 Stars", "⭐⭐⭐⭐ 4 Stars", "⭐⭐⭐⭐⭐ 5 Stars"];


  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-64">
      {/* Filter by Genres */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Filter by Genres</h3>
        {genres.map((genre) => (
          <label key={genre} className="flex items-center space-x-2 text-gray-700 mb-1">
            <input type="radio" name="genre" className="text-red-500" />
            <span>{genre}</span>
          </label>
        ))}
      </div>    

      {/* Filter by Rating */}
      {/* Filter by Rating Dropdown */}
      <div className="mb-6 relative">
        <button
          className="w-full border rounded-lg py-2 px-3 text-gray-700 flex justify-between items-center"
          onClick={() => setIsRatingOpen(!isRatingOpen)}
        >
          {selectedRating} ▼
        </button>
        {isRatingOpen && (
          <div className="absolute w-full bg-white border rounded-lg mt-1 shadow-lg">
            {rating.map((rating, index) => (
              <button
                key={index}
                className="block w-full text-left px-3 py-2 hover:bg-gray-200"
                onClick={() => {
                  setSelectedRating(rating);
                  setIsRatingOpen(false);
                }}
              >
                {rating}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Filter by Publisher */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Filter by Publisher</h3>
        {publishers.map((publisher) => (
          <label key={publisher} className="flex items-center space-x-2 text-gray-700 mb-1">
            <input type="radio" name="publisher" className="text-red-500" />
            <span>{publisher}</span>
          </label>
        ))}
      </div>

      {/* Filter by Author Name */}
      <div>
        <h3 className="font-semibold mb-2">Filter by Author Name</h3>
        {authors.map((author) => (
          <label key={author} className="flex items-center space-x-2 text-gray-700 mb-1">
            <input
              type="radio"
              name="author"
              className="text-red-500"
              checked={selectedAuthor === author}
              onChange={() => setSelectedAuthor(author)}
            />
            <span>{author}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
