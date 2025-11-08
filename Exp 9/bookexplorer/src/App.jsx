import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import { books as booksData } from "./data/books";

import Home from "./pages/Home";
import BookPage from "./pages/BookPage";

export default function App() {
  const [books, setBooks] = useState([]);

  // Simulate API loading
  useEffect(() => {
    setTimeout(() => {
      setBooks(booksData);
    }, 300);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/book/:id" element={<BookPage books={books} />} />
      </Routes>
    </div>
  );
}
