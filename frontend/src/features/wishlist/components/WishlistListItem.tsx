import * as React from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@material-ui/core";
import { Button, Divider, Grid, IconButton, Stack } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type WishlistListItemProps = {
  productImage: string;
  productName: string;
  productValue: string;
  availability: string;
};

const gridCellWidth = "calc((100vw - 100px)/5)";

const gridItemStyle = {
  width: gridCellWidth,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const WishlistListItem = ({
  productImage,
  productName,
  productValue,
  availability,
}: WishlistListItemProps) => {
  return (
    <>
      <ListItem style={{ padding: "15px 0" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item style={gridItemStyle}>
            <Stack direction={"row"} spacing={2}>
              <IconButton>
                <DeleteForeverIcon />
              </IconButton>
              <ListItemAvatar>
                <Avatar variant="square" alt={productName} src={productImage} />
              </ListItemAvatar>
            </Stack>
          </Grid>
          <Grid item style={gridItemStyle}>
            <Typography style={{ textAlign: "center" }} variant={"body2"}>
              {productName}
            </Typography>
          </Grid>
          <Grid item style={gridItemStyle}>
            <Typography variant={"body2"}>{`$${productValue}`}</Typography>
          </Grid>
          <Grid item style={gridItemStyle}>
            <Typography variant={"body2"}>{availability}</Typography>
          </Grid>
          <Grid item style={gridItemStyle}>
            <Stack>
              <Typography
                variant={"body2"}
              >{`Added on:${"Insert Date"}`}</Typography>
              <Button variant="contained" size="small">
                Add to cart
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </ListItem>
      <Divider style={{ width: "100%" }} />
    </>
  );
};
