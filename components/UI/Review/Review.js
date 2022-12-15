import React from "react";
import { style } from "./Review.styles";

const Review = ({ review }) => {
  const {
    author,
    author_details: { rating },
    content,
    created_at,
  } = review;
  const createdDate = new Date(created_at).toLocaleDateString();
  return (
    <div className="review">
      <div className="review-header">
        <p className="review-author"> {author}</p>
        <p className="review-stats">
          <label className="rating"> {rating}/10</label>
        </p>
      </div>

      <p className="review-description">
        <span className="quote">&ldquo;</span>
        {content}
        <span className="quote">&rdquo;</span>
      </p>
      <p className="review-stats">
        <label className="date">{createdDate}</label>
      </p>
      <style jsx>{style}</style>
    </div>
  );
};

export default Review;
