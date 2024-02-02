import React, { useEffect } from "react";
import Image from "next/image";
import { API_IMAGE_URL } from "../../../utils/constants";
import { style } from "./Review.styles";

const Review = ({ review }) => {
  const {
    author,
    author_details: { rating, avatar_path },
    content,
    created_at,
  } = review;
  console.log(review);
  const createdDate = new Date(created_at)
    .toDateString()
    .split(" ")
    .slice(1)
    .join();

  const checkForOverflow = () => {
    const expandableElements = document.querySelectorAll("[data-expandable]");
    expandableElements.forEach((expandableElement) => {
      if (expandableElement.classList.contains("expanded")) return;
      const expandableText =
        expandableElement.querySelector("[data-expand-text]");
      const overflowing =
        expandableText.scrollHeight > expandableText.clientHeight + 1;
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
        <p className="review-author">
          {avatar_path !== null ? (
            <Image
              width={40}
              height={40}
              src={`${API_IMAGE_URL}/w200${avatar_path}`}
              alt="Avater_Image"
              className="avater"
            />
          ) : (
            <span>{author.charAt(0).toUpperCase()}</span>
          )}{" "}
          {author}
        </p>
        <p className="review-stats">
          <label className="rating"> {rating}/10</label>
          <label className="date"> {createdDate}</label>
        </p>
      </div>
      <div data-expandable>
        <p
          data-expand-text
          className="review-description"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <button data-expand-button onClick={toggleText} className="read-more">
          Read More
        </button>
      </div>

      <style jsx>{style}</style>
    </div>
  );
};

export default Review;
