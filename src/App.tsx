import { useEffect } from "react";
import "./App.css";
import { useReviews } from "./hooks/useReviews";
import { ReviewItem, ReviewForm } from "./components";

function App() {
  const { reviews, addReview, loadReviews, updateReview, deleteReview } =
    useReviews();

  useEffect(() => {
    loadReviews();
  }, [loadReviews]);

  return (
    <div className="app-container">
      <h1>Reviews</h1>
      <div className="review-list">
        {reviews.map((review, i) => (
          <ReviewItem
            key={review.name + review.comment + i}
            {...review}
            updateReview={updateReview}
            deleteReview={deleteReview}
          />
        ))}
      </div>
      <ReviewForm addReview={addReview} />
    </div>
  );
}

export default App;
