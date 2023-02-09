import Link from "next/link";
import React, { Fragment } from "react";
import {
  API_IMAGE_URL,
  CREDIT_TYPE,
  NO_IMG_PLACEHOLDER_USER,
} from "../../../utils/constants";
import { slugify } from "../../../utils/helperMethods";
import Avatar from "../../UI/Avater/Avatar";

import { style } from "./CastAndCrew.style";

const CastAndCrew = ({
  credits,
  type,
  title,
  id,
  showViewAll = true,
  mediaType,
}) => {
  return (
    <Fragment>
      {!!credits.length && (
        <div className="cast-wrapper">
          <div className="cast-title">
            {title}
            {showViewAll && (
              <span className="view-all">
                <Link href={`/cast/all?id=${id}&type=${mediaType}`} rel="canonical">
                  View All
                </Link>{" "}
              </span>
            )}
          </div>

          <div className="cast">
            {credits?.map((credit) => {
              const { profile_path, job = "", name, character = "" } = credit;
              const avatarImg =
                profile_path && profile_path !== null
                  ? `${API_IMAGE_URL}/w154/${credit.profile_path}`
                  : NO_IMG_PLACEHOLDER_USER;
              return (
                <Link
                  key={credit.id}
                  href={`/person/${credit.id}/${slugify(credit.name)}`}
                  rel="canonical"
                >
                  <Avatar
                    imageSrc={avatarImg}
                    role={job || character}
                    text={name}
                    key={credit.id}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      )}
      <style jsx> {style} </style>
    </Fragment>
  );
};

export default CastAndCrew;
