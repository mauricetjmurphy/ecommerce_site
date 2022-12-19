import * as React from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

type ProductReviewListItemProps = {
  id: number;
  comment: string;
  date: string;
};

export const ProductReviewListItem = ({
  id,
  comment,
  date,
}: ProductReviewListItemProps) => {
  return (
    <ListItem>
      <ListItemIcon>
        <ListItemAvatar>
          <FaceIcon />
        </ListItemAvatar>
      </ListItemIcon>
      <ListItemText primary={comment} secondary={date} />
    </ListItem>
  );
};
