import BookCard from "../components/BookCard";

export default function Home({ books }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📚 Book Explorer</h1>

      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
