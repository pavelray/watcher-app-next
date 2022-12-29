import React from "react";
import Link from "next/link";
import { COLLECTION_TYPE } from "../../../utils/constants";
import { getGenre } from "../../../utils/helperMethods";
import MediaCard from "../../Business/MediaCard";
import { v4 as uuidv4 } from "uuid";
import { style } from "./CardSlider.style.js";
import { SubHeading } from "../Typography/Typography";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const CardSlider = ({ title, data, type, dataType }) => {
  const renderViewAllLink = () => {
    if (
      dataType !== COLLECTION_TYPE.SIMILAR &&
      dataType !== COLLECTION_TYPE.TRENDING
    ) {
      return (
        <Link href={`/viewAll?dataType=${dataType}&type=${type}&page=1`}>
          view all
        </Link>
      );
    }
    return null;
  };

  return (
    <div className="slide-container">
      <div className="slide-container__title--wrapper">
        <SubHeading text={title} />
        <div className="slide-container__sub">{renderViewAllLink()}</div>
      </div>
      <AliceCarousel
        autoWidth
        mouseTracking
        responsive={{
          0: { items: 1, itemsFit: "contain" },
          568: { items: 2, itemsFit: "contain" },
          786: { items: 5, itemsFit: "contain" },
          1024: { items: 7, itemsFit: "contain" },
        }}
        controlsStrategy="alternate"
        disableDotsControls={true}
      >
        {data?.map((tr) => {
          return (
            <MediaCard
              key={`${tr.id}_${uuidv4()}`}
              id={tr.id}
              title={tr.title || tr.name}
              poster={tr.poster_path || tr.profile_path}
              releaseDate={tr.release_date || tr.first_air_date}
              type={type}
              {...tr}
            />
          );
        })}
      </AliceCarousel>
      {/* <div className="slide-container__scroll-wrapper">
        <div className="slide-container__content">
          {data?.map((tr) => {
            return (
              <MediaCard
                key={`${tr.id}_${uuidv4()}`}
                id={tr.id}
                title={tr.title || tr.name}
                poster={tr.poster_path || tr.profile_path}
                releaseDate={tr.release_date || tr.first_air_date}
                type={type}
                {...tr}
              />
            );
          })}
        </div>
      </div> */}
      <style jsx>{style}</style>
    </div>
  );
};

export default CardSlider;
