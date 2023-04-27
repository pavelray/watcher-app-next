import React, { Fragment, useEffect, useState } from "react";
import { style } from "./Modal.style";
import Image from "next/image";

export default function Modal({ children, open, onModalClose }) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(open);
  }, [open]);

  const onClose = () => {
    setOpen(false);
    onModalClose();
  };

  return (
    <Fragment>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="close" onClick={onClose}>
              <Image src="/icons/common/close.png" width="20" height="20" />
            </div>
            <div className="modal-content__body">{children}</div>
          </div>
        </div>
      )}
      <style jsx>{style}</style>
    </Fragment>
  );
}
