import { useState } from "react";
import { AddReviewPayload, OnChangeEventType } from "../types";
import "./ReviewForm.css";

export const ReviewForm = ({
  addReview,
  initialName = "",
  initialComment = "",
  submitCallBack,
  buttonText = "Add",
}: {
  addReview: (review: AddReviewPayload) => void;
  initialName?: string;
  initialComment?: string;
  submitCallBack?: () => void;
  buttonText?: string;
}) => {
  const [name, setName] = useState(initialName);
  const [comment, setComment] = useState(initialComment);

  const handleNameInputChange: OnChangeEventType = (event) => {
    setName(event.target.value);
  };

  const handleContentInputChange: OnChangeEventType = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    addReview({ name, comment });
    setName("");
    setComment("");
    submitCallBack?.();
  };
  return (
    <div className="review-form-container">
      <input
        className="review-form-input"
        value={name}
        onChange={handleNameInputChange}
        placeholder="Your name"
      />
      <input
        className="review-form-input"
        value={comment}
        onChange={handleContentInputChange}
        placeholder="Your comment"
      />
      <button
        className="review-form-button"
        onClick={handleSubmit}
        disabled={!comment || !name}
      >
        {buttonText}
      </button>
    </div>
  );
};
