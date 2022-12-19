import * as React from "react";
import { Grid, List, ListItem, Typography } from "@mui/material";
import { Reviews } from "@mui/icons-material";

import { ProductReviewListItem } from "./ProductReviewListItem";

const reviews = [
  {
    id: 1,
    comment: "What a great srevice. I would highly recommend it to anyone.",
    date: "22/5/22 12.30pm",
  },
  {
    id: 2,
    comment: "I love this product so much",
    date: "01/02/21 14.25pm",
  },
];

export type Review = {
  id: number;
  comment: string;
  date: string;
};

export const ProductReviewList = () => {
  return (
    <Grid sx={{ padding: "15px" }} item xs={6}>
      <Typography sx={{ padding: "8px 16px" }} variant={"h5"} component={"h1"}>
        Reviews
      </Typography>
      <List>
        {reviews.map((item: Review) => {
          return (
            <ProductReviewListItem
              key={item.id}
              id={item.id}
              comment={item.comment}
              date={item.date}
            />
          );
        })}
      </List>
    </Grid>
  );
};
