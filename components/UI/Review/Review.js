import React, { useEffect } from "react";
import { style } from "./Review.styles";

const Review = ({ review }) => {
  const {
    author,
    author_details: { rating },
    content,
    created_at,
  } = review;
  const createdDate = new Date(created_at).toLocaleDateString();

  const checkForOverflow = () => {
    const expandableElements = document.querySelectorAll("[data-expandable]");
    expandableElements.forEach((expandableElement) => {
      if (expandableElement.classList.contains("expanded")) return;
      const expandableText =
        expandableElement.querySelector("[data-expand-text]");
      const overflowing =
        expandableText.scrollHeight > expandableText.clientHeight+1;
      expandableElement.dataset.overflow = overflowing;
    });
  };

  const toggleText = (e) => {
    const expandableElement = e.target.closest("[data-expandable]");
    expandableElement.classList.toggle("expanded");
    setExpandButtonText(e.target);
  };

  const setExpandButtonText = (button) => {
    const expandableElement = button.closest("[data-expandable]");
    const expanded = expandableElement.classList.contains("expanded");
    button.innerText = expanded ? "Read Less" : "Read More";
  };

  useEffect(() => {
    checkForOverflow();
  }, []);

  return (
    <div className="review">
      <div className="review-header">
        <p className="review-author"> {author}</p>
        <p className="review-stats">
          <label className="rating"> {rating}/10</label>
        </p>
      </div>
      <div data-expandable>
        <p
          data-expand-text
          className="review-description"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <button data-expand-button onClick={toggleText} className='read-more'>
          Read More
        </button>
      </div>
      <p className="review-stats">
        <label className="date">{createdDate}</label>
      </p>
      <style jsx>{style}</style>
    </div>
  );
};

export default Review;
