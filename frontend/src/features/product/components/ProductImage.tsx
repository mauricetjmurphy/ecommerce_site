import * as React from "react";
import { Grid } from "@mui/material";

import { ProductImageContainer } from "./product.styles";

type ProductImageProps = {
  image: string;
};

export const ProductImage = ({ image }: ProductImageProps) => {
  return (
    <Grid sx={{ padding: "25px" }} item sm={6} xs={12}>
      <ProductImageContainer src={image} alt="" />
    </Grid>
  );
};
