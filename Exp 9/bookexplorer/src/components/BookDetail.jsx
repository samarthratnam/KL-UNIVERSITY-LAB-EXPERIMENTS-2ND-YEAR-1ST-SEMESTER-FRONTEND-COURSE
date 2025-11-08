export default function BookDetail({ book }) {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold">{book.title}</h2>

      <p className="text-gray-600 mt-2 text-lg">
        Author: <strong>{book.author}</strong>
      </p>

      <p className="mt-4">{book.description}</p>

      <p className="mt-3 font-semibold text-yellow-600">
        ⭐ Rating: {book.rating}
      </p>
    </div>
  );
}
