import React, { useEffect, useState } from "react";

const App = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "", year: "" });

  // Fetch all books on load
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Add new book
  const handleAddBook = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newBook.title,
        author: newBook.author,
        year: newBook.year,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setBooks([...books, data]);
        setNewBook({ title: "", author: "", year: "" });
      })
      .catch((err) => console.error("Error adding book:", err));
  };

  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        color: "white",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center" }}>📚 Book List</h1>

      <form
        onSubmit={handleAddBook}
        style={{ display: "flex", gap: "10px", justifyContent: "center", margin: "20px" }}
      >
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Year"
          value={newBook.year}
          onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
          required
        />
        <button type="submit">Add Book</button>
      </form>

      <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
        {books.length > 0 ? (
          books.map((book) => (
            <li key={book.id} style={{ margin: "10px 0" }}>
              <strong>{book.title}</strong> — {book.author} ({book.year})
            </li>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </ul>
    </div>
  );
};

export default App;
