import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";

type ShopSectionNavigationProps = {
  title: string;
  titleFontSize: string;
  body: string;
  bodyFontSize: string;
  aligned: "left" | "center" | "right";
  bottomPosition: string;
  children: JSX.Element | JSX.Element[];
};

export const ShopSectionNavigation = ({
  title,
  titleFontSize,
  body,
  bodyFontSize,
  aligned,
  bottomPosition,
  children,
}: ShopSectionNavigationProps) => {
  return (
    <Box
      sx={{
        zIndex: 800,
        position: "absolute",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100%",
        display: "flex",
        justifyContent:
          aligned === "left" ? "start" : aligned === "right" ? "end" : "center",
        alignItems: "end",
      }}
    >
      <Box
        sx={{
          textAlign: aligned,
          maxWidth: "450px",
          padding: "36px",
          paddingBottom: bottomPosition,
          color: "#fff",
          fontWeight: "light",
        }}
      >
        <Typography
          sx={{ fontSize: titleFontSize, letterSpacing: "1px" }}
          variant={"h4"}
          component={"h1"}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          sx={{ fontSize: bodyFontSize, letterSpacing: "1px" }}
          variant={"body1"}
          component={"p"}
          gutterBottom
        >
          {body}
        </Typography>
        <Stack
          spacing={2}
          direction={"row"}
          sx={{
            marginTop: "30px",
            display: "flex",
            justifyContent:
              aligned === "left"
                ? "start"
                : aligned === "right"
                ? "end"
                : "center",
          }}
        >
          {children}
        </Stack>
      </Box>
    </Box>
  );
};
