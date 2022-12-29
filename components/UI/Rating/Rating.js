import React from "react";
import { style } from "./Rating.style";

const Rating = ({ratingValue = 50, height, width}) => {
  return (
    <div className="rating" style={{height: height, width: width}}>
      <div className="rating-image" style={{width: `${ratingValue}%`}}></div>
      <style jsx>{style}</style>
    </div>
  );
};

export default Rating;
