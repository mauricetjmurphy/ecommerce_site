import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

type ProductCardProps = {
  image: string;
  title: string;
  price: string;
  productId: string;
};

export const ProductCard = ({
  image,
  title,
  price,
  productId,
}: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        "& .MuiButtonBase-root:hover": {
          bgcolor: "transparent",
        },
        "& .MuiCardActionArea-root:hover": {
          bgcolor: "transparent",
        },
        boxShadow: "none",
      }}
      onClick={() => navigate(`/products/${productId}`)}
    >
      <CardActionArea disableTouchRipple>
        <CardMedia
          sx={{
            ":hover": {
              background: "none",
            },
          }}
          component="img"
          image={image}
          alt="product image"
        />
        <CardContent
          sx={{
            ":hover": {
              background: "none",
            },
          }}
        >
          <Typography
            gutterBottom
            sx={{ fontSize: "13px", fontWeight: "light" }}
            variant="body1"
            color="text.secondary"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            sx={{ fontSize: "13px", fontWeight: "light" }}
            variant="body2"
            color="text.secondary"
          >
            {`$ ${price}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
