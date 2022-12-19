import * as React from "react";
import { Box } from "@mui/material";

import { ImageProps } from "../../types";

import { BannerImageElement } from "./bannerImage.styles";

export const BannerImage = ({
  image_sm,
  image_md,
  image_lg,
  image_xl,
  alt,
}: ImageProps) => {
  return (
    <BannerImageElement
      srcSet={`${image_sm} 320w, ${image_md} 600w, ${image_lg} 1200w, ${image_xl} 1920w`}
      sizes="(min-width: 1200px) 1200px, 100vw"
      src={image_xl}
      alt={alt}
    />
  );
};
