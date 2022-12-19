import * as React from "react";
import * as Yup from "yup";
import { Box, Button, Grid, Typography } from "@mui/material";

import { FormSelect } from "../../../components/Form/FormSelect";
import { FormContainer, FormControl } from "../../../components/Form";

type ProductFormProps = {
  brand: string;
  availability: string;
  productValue: string;
  color: string;
  description: string;
};

export const ProductForm = ({
  brand,
  availability,
  productValue,
  color,
  description,
}: ProductFormProps) => {
  const dropDownOptions = Array.from({ length: 10 }, (_, i) => i + 1).map(
    (item) => {
      return { key: `${item}`, value: `Option ${item}` };
    }
  );
  const initialValues = {
    selectOption: "",
  };
  const validationSchema = Yup.object({
    selectOption: Yup.string().required("Required"),
  });
  const onSubmit = (values: any) => {
    console.log();
  };
  return (
    <Grid sx={{ padding: "25px" }} item sm={6} xs={12}>
      <FormContainer
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        submit={false}
      >
        <Box>
          <Box style={{ margin: "5px 10px" }}>
            <Typography variant="h4" component="h1" gutterBottom>
              {brand}
            </Typography>
            <Typography variant="body1" component="h2" gutterBottom>
              {availability}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
            >{`$${productValue}`}</Typography>
            <Typography
              variant="body1"
              component="h2"
              gutterBottom
            >{`Colour:${color}`}</Typography>
          </Box>
          <FormControl
            control="select"
            name="selectOption"
            options={dropDownOptions}
          />
          <Button
            style={{ margin: "5px 10px" }}
            variant="contained"
            disableElevation
            fullWidth
          >
            Add to cart
          </Button>
          <Button
            style={{ margin: "5px 10px" }}
            variant="outlined"
            color="inherit"
            fullWidth
          >
            Add to whishlist
          </Button>
          <Box style={{ margin: "5px 10px" }}>
            <Typography
              variant="body1"
              component="h2"
              gutterBottom
            >{`${"0"} Review${"s"}`}</Typography>
            <Typography variant="h5" component="h1" gutterBottom>
              Description
            </Typography>
            <Typography variant="body1">{description}</Typography>
          </Box>
        </Box>
      </FormContainer>
    </Grid>
  );
};
