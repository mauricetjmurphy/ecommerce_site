import * as React from "react";
import { Link } from "react-router-dom";

import { ImageTextContainer } from "./imgaeText.styles";

type ImageTextProps = {
  text: string;
  fontSize: string;
  path: string;
};

export const ImageText = ({ text, fontSize, path }: ImageTextProps) => {
  return (
    <ImageTextContainer fontSize={fontSize}>
      <Link
        style={{
          color: "#fff",
          fontSize: fontSize,
          letterSpacing: "2px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
        to={path}
      >
        {text}
      </Link>
    </ImageTextContainer>
  );
};
