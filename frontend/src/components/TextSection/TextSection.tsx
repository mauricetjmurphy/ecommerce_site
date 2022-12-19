import * as React from "react";
import { Box, Typography } from "@mui/material";

import { textSectionStyles } from "./textSection.styles";

type TextSectionProps = {
  title?: string;
  body: string;
};

export const TextSection = ({ title, body }: TextSectionProps) => {
  return (
    <Box>
      <Typography sx={textSectionStyles.title} variant={"h4"} component={"h1"}>
        {title}
      </Typography>
      <Typography sx={textSectionStyles.body} variant={"body1"} component={"p"}>
        {body}
      </Typography>
    </Box>
  );
};
