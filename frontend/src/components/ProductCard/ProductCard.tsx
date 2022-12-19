import * as React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

import { ProductColors } from "./ProductColors";

type ProductCardProps = {
  productId?: string;
  image: string;
  title: string;
  price: string;
};

const QuickBuy = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "10px",
        right: "0",
      }}
    >
      <Button
        disableRipple
        sx={{
          padding: "8px",
          margin: "0",
          width: "35px",
          "&:hover": {
            bgcolor: "transparent",
          },
        }}
      >
        <Box
          sx={{
            width: "35px",
            height: "35px",
            borderRadius: "17.5px",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            style={{ width: "20px" }}
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.3431 4.34315C19.8434 2.84285 21.8783 2 24 2C26.1217 2 28.1566 2.84285 29.6569 4.34315C31.1571 5.84344 32 7.87827 32 10V13C32 13.5523 32.4477 14 33 14C33.5523 14 34 13.5523 34 13V10C34 7.34784 32.9464 4.8043 31.0711 2.92893C29.1957 1.05357 26.6522 0 24 0C21.3478 0 18.8043 1.05357 16.9289 2.92893C15.0536 4.8043 14 7.34784 14 10V13C14 13.5523 14.4477 14 15 14C15.5523 14 16 13.5523 16 13V10C16 7.87827 16.8429 5.84344 18.3431 4.34315ZM6 19C6 18.4477 6.44772 18 7 18H41C41.5523 18 42 18.4477 42 19V28.625C42 29.1773 42.4477 29.625 43 29.625C43.5523 29.625 44 29.1773 44 28.625V19C44 17.3431 42.6569 16 41 16H7C5.34315 16 4 17.3431 4 19V45C4 46.6569 5.34315 48 7 48H25C25.5523 48 26 47.5523 26 47C26 46.4477 25.5523 46 25 46H7C6.44772 46 6 45.5523 6 45V19ZM36.5 33C37.0523 33 37.5 33.4477 37.5 34V39.5H43C43.5523 39.5 44 39.9477 44 40.5C44 41.0523 43.5523 41.5 43 41.5H37.5V47C37.5 47.5523 37.0523 48 36.5 48C35.9477 48 35.5 47.5523 35.5 47V41.5H30C29.4477 41.5 29 41.0523 29 40.5C29 39.9477 29.4477 39.5 30 39.5H35.5V34C35.5 33.4477 35.9477 33 36.5 33Z"
              fill="black"
            ></path>
          </svg>
        </Box>
      </Button>
    </Box>
  );
};

export const ProductCard = ({
  productId,
  title,
  price,
  image,
}: ProductCardProps) => {
  return (
    <Grid item>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          disableRipple
          sx={{
            padding: "0",
            "&:hover": {
              bgcolor: "transparent",
            },
          }}
        >
          <Box>
            <img
              style={{
                objectFit: "cover",
                position: "relative",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                maxWidth: "100%",
                maxHeight: "100%",
                display: "block",
                marginBottom: "8px",
              }}
              src={image}
              alt={title}
            />
          </Box>
          <QuickBuy />
        </Button>
        <Box>
          <Button
            disableRipple
            sx={{
              padding: "0",
              marginBottom: "8px",
              "&:hover": {
                bgcolor: "transparent",
                opacity: "0.7",
              },
            }}
          >
            <Typography
              sx={{ fontSize: "13px", textAlign: "left", color: "#000" }}
            >
              {title}
            </Typography>
          </Button>
          <Button
            disableRipple
            sx={{
              padding: "0",
              marginBottom: "8px",
              justifyContent: "start",
              "&:hover": {
                bgcolor: "transparent",
                opacity: "0.7",
              },
            }}
          >
            <Typography
              sx={{ fontSize: "13px", textAlign: "left", color: "#000" }}
            >
              ${price}
            </Typography>
          </Button>
        </Box>
        <ProductColors colors={["green", "blue", "black"]} />
      </Box>
    </Grid>
  );
};
