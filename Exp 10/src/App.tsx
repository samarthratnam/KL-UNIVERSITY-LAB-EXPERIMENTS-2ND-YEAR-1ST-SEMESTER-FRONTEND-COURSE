import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Feedback Collector
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Share your experience with us
        </p>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          <FeedbackForm />
          <FeedbackList />
        </div>
      </div>
    </div>
  );
}

export default App;
