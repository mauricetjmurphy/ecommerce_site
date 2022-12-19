import * as React from "react";
import {
  Avatar,
  Grid,
  IconButton,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type CartListItemProps = {
  productImage: string;
  productTitle: string;
  productColor: string;
  productSize: string;
  productValue: string;
};

export const CartListItem = ({
  productImage,
  productTitle,
  productColor,
  productSize,
  productValue,
}: CartListItemProps) => {
  return (
    <ListItem>
      <Grid container>
        <Grid item>
          <ListItemAvatar>
            <Avatar variant="square" alt={productTitle} src={productImage} />
          </ListItemAvatar>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item xs={12}>
              <Typography>{productTitle}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{productColor}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{productSize}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography>{`$${productValue}`}</Typography>
        </Grid>
        <Grid item>{"Custom amount input"}</Grid>
        <Grid item>
          <IconButton>
            <DeleteForeverIcon />
          </IconButton>
        </Grid>
      </Grid>
    </ListItem>
  );
};
