import { useParams } from "react-router-dom";
import BookDetail from "../components/BookDetail";

export default function BookPage({ books }) {
  const { id } = useParams();
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="p-6 text-red-500 text-xl">Book not found</div>
    );
  }

  return (
    <div className="p-6">
      <BookDetail book={book} />
    </div>
  );
}
