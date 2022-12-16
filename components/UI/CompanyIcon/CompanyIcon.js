import Image from "next/image";
import Link from "next/link";
import React from "react";

const CompanyIcon = ({
  imageSrc,
  imageAltText,
  width = 40,
  height = 40,
  url,
  title
}) => {
  return (
    <div>
      {url && (
        <Link href={url} passHref legacyBehavior>
          <a target="_blank">
            <Image
              src={imageSrc}
              alt={imageAltText}
              height={height}
              width={width}
              title={title}
            />
          </a>
        </Link>
      )}
      {!url && (
        <Image
          src={imageSrc}
          alt={imageAltText}
          height={height}
          width={width}
          title={title}
        />
      )}
    </div>
  );
};

export default CompanyIcon;
