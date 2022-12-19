import * as React from "react";
import { Button, Divider, Grid, List, Typography } from "@mui/material";

import { cartData } from "../../../data/cartData";

import { CartListItem } from "./CartListItem";

type Props = {};

export const CartList = (props: Props) => {
  return (
    <Grid
      item
      xs={9}
      sx={{ background: "#f5f5f5", minHeight: "calc(100vh - 124px)" }}
    >
      <Typography variant={"h4"} component={"h1"}>
        Cart
      </Typography>
      <Divider />
      <List>
        {cartData.map((item) => {
          return (
            <CartListItem
              key={item.id}
              productImage={item.Product_Image}
              productTitle={item.Product_Name}
              productColor={item.color}
              productSize={item.size}
              productValue={item.Product_Value}
            />
          );
        })}
      </List>
      <Divider />
      <Button onClick={() => console.log("clicked")}>Continue Shopping</Button>
    </Grid>
  );
};
