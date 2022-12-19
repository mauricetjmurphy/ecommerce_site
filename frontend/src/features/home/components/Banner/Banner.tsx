import * as React from "react";
import { Box, Button } from "@mui/material";

import { ShopSectionNavigation } from "../ShopSectionNavigation/ShopSectionNavigation";

import { BannerImage } from "./BannerImage";

type BannerProps = {
  height: string;
  images: {
    image_sm: string;
    image_md: string;
    image_lg: string;
    image_xl: string;
    alt: string;
  };
};

export const Banner = ({ height, images }: BannerProps) => {
  return (
    <Box sx={{ padding: "0 30px", height: height, position: "relative" }}>
      <BannerImage
        image_sm={images.image_sm}
        image_md={images.image_md}
        image_lg={images.image_lg}
        image_xl={images.image_xl}
        alt={images.alt}
      />
      <ShopSectionNavigation
        title={"Up to 40% off"}
        titleFontSize={"105px"}
        body={"Plus, free shipping on everything"}
        bodyFontSize={"22px"}
        aligned={"center"}
        bottomPosition={"32.5px"}
      >
        <Button
          sx={{
            borderRadius: "calc(41px /2)",
            fontSize: "12px",
            color: "#fff",
            border: "1px solid #fff",
            padding: "9px 30px",
          }}
          variant="outlined"
          disableRipple
        >
          {"Shop the sale"}
        </Button>
      </ShopSectionNavigation>
    </Box>
  );
};
