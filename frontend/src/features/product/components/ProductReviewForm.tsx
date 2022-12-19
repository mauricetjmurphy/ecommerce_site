import * as React from "react";
import * as Yup from "yup";
import { Box, Grid, Typography } from "@mui/material";

import { FormContainer, FormControl } from "../../../components/Form";

type Props = {};

export const ProductReviewForm = (props: Props) => {
  const initialValues = {
    review: "",
  };
  const validationSchema = Yup.object({
    review: Yup.string().required("Required"),
  });
  const onSubmit = (values: any) => {
    console.log("Submitted");
  };
  return (
    <Grid sx={{ padding: "15px" }} item xs={6}>
      <FormContainer
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        submit={true}
      >
        <Box sx={{ margin: "5px 10px" }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Write a review
          </Typography>
          <FormControl control="textarea" name="add review" />
        </Box>
      </FormContainer>
    </Grid>
  );
};
