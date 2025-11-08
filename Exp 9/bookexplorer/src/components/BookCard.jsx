import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="p-4 border rounded shadow bg-white mb-4">
      <h3 className="text-xl font-semibold">{book.title}</h3>
      <p className="text-gray-600">by {book.author}</p>

      <Link
        to={`/book/${book.id}`}
        className="text-blue-500 mt-2 inline-block"
      >
        View Details →
      </Link>
    </div>
  );
}
