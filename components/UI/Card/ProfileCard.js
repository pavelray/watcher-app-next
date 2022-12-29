import React, { Fragment } from "react";
import Image from "next/image";
import { style } from "./Card.style.js";
import cardModuleStyle from './Card.module.scss';

const ProfileCard = ({
  id,
  title,
  poster,
  department,
  redirectToDetails,
}) => {
  return (
    <Fragment>
      <div className="card">
        <div className={cardModuleStyle.cardImage}>
          <Image src={poster} alt="Poster" width="200" height={300} onClick={redirectToDetails} />
        </div>
        <div className="card-body">
          <div className="card-body__title">{title}</div>
          <div className="card-body__genre">
            <div>Known For: {department}</div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export { ProfileCard };
export default ProfileCard;
