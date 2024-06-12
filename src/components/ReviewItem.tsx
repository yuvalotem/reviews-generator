import { useUserImage } from "../hooks";
import { ReviewDataType } from "../types";
import "./ReviewItem.css";
import { ReviewForm } from "./ReviewForm";
import { useState } from "react";

type ReviewProps = ReviewDataType & {
  updateReview: (review: ReviewDataType) => void;
  deleteReview: (id: string) => void;
};

export const ReviewItem = ({
  name,
  comment,
  id,
  userId,
  gender,
  updateReview,
  deleteReview,
}: ReviewProps) => {
  const [editMode, setEditMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const img = useUserImage({ userId, gender });
  return (
    <>
      <div
        className="review-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="review-container">
          {img && <img className="review-img" src={img} alt="user" />}
          <div className="review-content">
            <b>{name}</b>
            {comment}
          </div>
        </div>
        {isHovered && (
          <div className="actions-container">
            {/* Styled library are not allowed */}
            <span className="action-item" onClick={() => setEditMode(true)}>
              ✏️
            </span>
            <span className="action-item" onClick={() => deleteReview(id)}>
              ❌
            </span>
          </div>
        )}
      </div>
      {editMode && (
        <ReviewForm
          initialName={name}
          initialComment={comment}
          addReview={(val) => updateReview({ ...val, userId, id, gender })}
          submitCallBack={() => setEditMode(false)}
          buttonText="Save"
        />
      )}
    </>
  );
};
