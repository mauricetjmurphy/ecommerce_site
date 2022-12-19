import * as React from "react";
import { Button, Grid, Typography } from "@mui/material";

type Props = {};

export const CartForm = (props: Props) => {
  return (
    <Grid item xs={3} sx={{ background: "#e8e8e8" }}>
      <Typography>Order Summary</Typography>
      <Grid container>
        <Grid item>
          <Typography>{`${"0"} items`}</Typography>
        </Grid>
        <Grid item>
          <Typography>{`${"Insert Price"}`}</Typography>
        </Grid>
        <Grid item>
          <Typography>Delivery fee</Typography>
        </Grid>
        <Grid item>
          <Typography>{`${"Insert Delivery Fee"}`}</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography>Total Cost</Typography>
        </Grid>
        <Grid item>
          <Typography>{`${"Insert Total Cost"}`}</Typography>
        </Grid>
      </Grid>
      <Button
        sx={{ background: "#000", color: "#fff" }}
        variant="contained"
        color="inherit"
        disableElevation
      >
        Proceed to checkout
      </Button>
      <Typography>Shipping and tax calculated at checkout</Typography>
    </Grid>
  );
};
