import React, { Fragment } from "react";
import Image from "next/image";
import { style } from "./Card.style.js";
import { GENDER } from "../../../utils/constants.js";

const ProfileCard = ({
  id,
  title,
  poster,
  gender,
  ratings,
  department,
  redirectToDetails,
}) => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-image">
          <Image src={poster} alt="Poster" width="200" height={300} />
        </div>
        <div className="card-body">
          <div className="card-body__title">{title}</div>
          <div className="card-body__info">
            <div>{GENDER[gender]}</div>
            <div>{ratings}</div>
          </div>
          <div className="card-body__genre">
            <div>Known For: {department}</div>
          </div>
        </div>
        <div className="card-footer">
          <button className="card-btn-cta" onClick={redirectToDetails}>
            Details
          </button>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export { ProfileCard };
export default ProfileCard;
