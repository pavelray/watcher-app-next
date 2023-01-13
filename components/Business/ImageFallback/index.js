import React, { useState } from "react";
import Image from "next/image";

const ImageFallback = (props) => {
  const { alt, src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(false);
  const [oldSrc, setOldSrc] = useState(src);
  if (oldSrc !== src) {
    setImgSrc(false);
    setOldSrc(src);
  }
  return (
    <Image
      {...rest}
      alt={alt}
      src={imgSrc ? fallbackSrc : src}
      onError={() => {
        setImgSrc(true);
      }}
    />
  );
};

export default ImageFallback;
