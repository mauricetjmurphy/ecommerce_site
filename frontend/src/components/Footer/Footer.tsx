import * as React from "react";
import { Box, Stack } from "@mui/material";

import { FooterContainer } from "./footer.styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <Stack direction="row">
        <Box>{`© ${new Date().getFullYear()} Maurice Murphy`}</Box>
      </Stack>
    </FooterContainer>
  );
};
