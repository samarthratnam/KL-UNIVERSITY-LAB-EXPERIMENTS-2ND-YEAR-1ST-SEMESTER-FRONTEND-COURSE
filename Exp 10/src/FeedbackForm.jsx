import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback } from './redux/feedbackSlice';

function FeedbackForm() {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating) {
      setError('Please select a rating');
      return;
    }

    dispatch(addFeedback({
      rating: parseInt(rating),
      comment: comment.trim()
    }));

    setRating('');
    setComment('');
    setError('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Submit Feedback</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
            Rating <span className="text-red-500">*</span>
          </label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
              setError('');
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>

        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
            Comment (Optional)
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            placeholder="Share your thoughts..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
