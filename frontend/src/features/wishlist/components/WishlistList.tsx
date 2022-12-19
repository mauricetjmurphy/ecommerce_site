import * as React from "react";
import { Box, Divider, Grid, List, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { cartData } from "../../../data/cartData";

import { WishlistListItem } from "./WishlistListItem";

const gridCellWidth = "calc((100vw - 100px)/5)";

const gridItemStyle = {
  width: gridCellWidth,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const WishlistItems = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <FavoriteBorderIcon style={{ fontSize: "35px", padding: "10px" }} />
        <Typography variant={"h4"} component={"h1"} gutterBottom>
          My Wishlist
        </Typography>
      </Box>

      <List>
        <Grid
          style={{ padding: "15px 0" }}
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item style={gridItemStyle}></Grid>
          <Grid item style={gridItemStyle}>
            <Typography variant={"body2"}>
              <b>Product Name</b>
            </Typography>
          </Grid>
          <Grid item style={gridItemStyle}>
            <Typography variant={"body2"}>
              <b>Unit Price</b>
            </Typography>
          </Grid>
          <Grid item style={gridItemStyle}>
            <Typography variant={"body2"}>
              <b>Stock status</b>
            </Typography>
          </Grid>
          <Grid item style={gridItemStyle}></Grid>
        </Grid>
        <Divider style={{ width: "100%" }} />
        {cartData.map((item) => {
          return (
            <>
              <WishlistListItem
                productImage={item.Product_Image}
                productName={item.Product_Name}
                productValue={item.Product_Value}
                availability={item.availability}
              />
            </>
          );
        })}
      </List>
    </>
  );
};
