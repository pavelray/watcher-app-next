import React, { Fragment, useState } from "react";
import Modal from "../../UI/Modal/Modal";

import { style } from "./ViewTrailer.style";

const ViewTrailer = ({ trailerVideo }) => {
  const [viewModal, setViewModal] = useState(false);
  const showModal = () => {
    setViewModal(true);
  };

  const onModalClose = () => {
    setViewModal(false);
  };
  return (
    <Fragment>
      {!!trailerVideo.length && (
        <div className="video-container">
          <button className="video-container-cta-btn" onClick={showModal}>
            Watch Trailer
          </button>
          <Modal open={viewModal} onModalClose={onModalClose}>
            {trailerVideo.slice(0, 1).map((video) => (
              <iframe
                className="video-frame"
                key={video.key}
                title={video.type}
                src={`https://www.youtube.com/embed/${video.key}`}
              ></iframe>
            ))}
          </Modal>
        </div>
      )}
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
