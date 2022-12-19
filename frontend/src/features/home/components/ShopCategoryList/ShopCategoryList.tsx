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
    <Grid sx={shopCategoryListStyles.grid} container spacing={3}>
      {categories.map((item) => {
        return (
          <Grid
            style={shopCategoryListStyles.gridItem}
            key={nanoid()}
            item
            xs={12}
            sm={4}
            md={6}
            lg={3}
          >
            <img
              style={shopCategoryListStyles.gridImage}
              src={item.image}
              alt=""
            />

            <Typography sx={shopCategoryListStyles.title}>
              {item.title}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};
