import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { nanoid } from "nanoid";

import { shopCategoryListStyles } from "./shopCategoryList.styles";

type ShopCategoryListProps = {
  categories: {
    image: string;
    title: string;
  }[];
};

export const ShopCategoryList = ({ categories }: ShopCategoryListProps) => {
  return (
    <Grid sx={shopCategoryListStyles.grid} style={{ width: "100vw" }} container>
      {categories.map((item) => {
        return (
          <Grid
            sx={shopCategoryListStyles.gridItem}
            key={nanoid()}
            item
            xs={12}
            sm={3}
            md={3}
            lg={3}
          >
            <Box sx={shopCategoryListStyles.gridImageContainer}>
              <img
                style={shopCategoryListStyles.gridImage}
                src={item.image}
                alt=""
              />
              <Typography sx={shopCategoryListStyles.title}>
                {item.title}
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};
