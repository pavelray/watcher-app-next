import React, { Fragment } from "react";
import Review from "../../UI/Review/Review";
import { SubHeading } from "../../UI/Typography/Typography";
import { style } from "./ReviewsComponent.style";

const ReviewsComponent = ({ reviews }) => {
  const { results } = reviews;
  return (
    <Fragment>
      {results && !!results.length && (
        <div className="reviews">
          <SubHeading text="Reviews" />
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
