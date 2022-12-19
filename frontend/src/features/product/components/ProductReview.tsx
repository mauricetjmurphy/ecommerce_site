import * as React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";

import { FormContainer } from "../../../components/Form";

import { ProductReviewForm } from "./ProductReviewForm";
import { ProductReviewList } from "./ProductReviewList";

type Props = {};

export const ProductReview = (props: Props) => {
  // const { isLoggedIn } = useSelector((state) => state.auth);
  const isLoggedIn = true;
  return (
    <Grid sx={{ padding: "25px" }} container>
      <ProductReviewForm />
      <ProductReviewList />
    </Grid>
  );
};
