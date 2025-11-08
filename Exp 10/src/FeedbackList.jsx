import { useSelector } from 'react-redux';

function FeedbackList() {
  const entries = useSelector((state) => state.feedback.entries);

  const getRatingColor = (rating) => {
    if (rating >= 4) return 'bg-green-100 text-green-800';
    if (rating === 3) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const getRatingStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Feedback List ({entries.length})
      </h2>

      {entries.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No feedback submitted yet. Be the first to share your thoughts!
        </p>
      ) : (
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getRatingColor(entry.rating)}`}>
                  Rating: {entry.rating}/5
                </span>
                <span className="text-lg">
                  {getRatingStars(entry.rating)}
                </span>
              </div>

              {entry.comment && (
                <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                  {entry.comment}
                </p>
              )}

              <p className="text-xs text-gray-400 mt-2">
                {new Date(entry.timestamp).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FeedbackList;
