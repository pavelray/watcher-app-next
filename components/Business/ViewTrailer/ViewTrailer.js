import React, { Fragment } from "react";
import { ButtonPrimary } from "../../UI/Buttons/Buttons";

import { style } from "./ViewTrailer.style";

const ViewTrailer = ({ trailerVideo, setViewModal }) => {
  const showModal = () => {
    setViewModal(true);
  };

  return (
    <Fragment>
      {!!trailerVideo.length && <ButtonPrimary handleOnClick={showModal} />}
      {!!!trailerVideo.length && (
        <div className="no-trailer">
          Sorry!! No Trailer available currently.{" "}
        </div>
      )}
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default ViewTrailer;
