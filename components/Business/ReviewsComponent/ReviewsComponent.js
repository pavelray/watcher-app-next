import React, { Fragment } from "react";
import Review from "../../UI/Review/Review";
import { style } from "./ReviewsComponent.style";

const ReviewsComponent = ({ reviews }) => {
  const { results } = reviews;
  return (
    <Fragment>
      {results && !!results.length && (
        <div className="reviews">
          <div className="heading">Reviews</div>
          {results.map((review) => (
            <Review key={review.id} review={review} />
          ))}
          <style jsx>{style}</style>
        </div>
      )}
    </Fragment>
  );
};

export default ReviewsComponent;
