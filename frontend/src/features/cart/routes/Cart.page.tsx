import * as React from "react";
import { Grid } from "@mui/material";

import { ContentLayout } from "../../../components/Layout";
import { CartForm } from "../components/CartForm";
import { CartList } from "../components/CartList";

import { CartContainer } from "./cart.styles";

type Props = {};

export const Cart = (props: Props) => {
  return (
    <ContentLayout title="Cart Page">
      <CartContainer>
        <Grid container>
          <CartList />
          <CartForm />
        </Grid>
      </CartContainer>
    </ContentLayout>
  );
};
