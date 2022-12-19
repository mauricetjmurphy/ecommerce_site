import * as React from "react";
import { Grid, Skeleton, Stack, Typography } from "@mui/material";
import { nanoid } from "nanoid";

import { ProductCard } from "../ProductCard/ProductCard";
import { PageButtons } from "../PageButtons/PageButtons";
import { useFetch } from "../../hooks/useFetch";

type ProductListProps = {
  numberOfItems: number;
  category?: string;
  pageButtons?: Boolean;
  title?: string;
};

export const ProductList = ({
  numberOfItems,
  category,
  pageButtons = true,
  title,
}: ProductListProps) => {
  const [pageNumber, setPageNumber] = React.useState(1);

  const onSuccess = (data: any) => {
    console.log("success");
  };

  const onError = (error: any) => {
    console.log("Error", error);
  };

  const { isLoading, isError, error, data } = useFetch({
    onSuccess,
    onError,
    pageNumber,
    numberOfItems,
  });

  if (!isLoading) {
    console.log("data", data);
  }

  if (isError) return <p>{`An error has occurred: ${error}`}</p>;

  return (
    <>
      <Typography
        sx={{ fontSize: "24px", textAlign: "center", fontWeight: "light" }}
        variant={"h4"}
        component={"h1"}
      >
        {title}
      </Typography>
      <Grid sx={{ padding: "20px 30px 50px" }} container spacing={2}>
        {isLoading &&
          Array.from(Array(12), (_, index) => index + 1).map((product: any) => {
            return (
              <Grid key={nanoid()} item xs={12} sm={4} md={6} lg={3}>
                <Stack>
                  <Skeleton
                    variant="rectangular"
                    height={220}
                    animation="wave"
                  />
                  <Typography variant="body1" color="text.secondary">
                    <Skeleton variant="text" />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <Skeleton variant="text" />
                  </Typography>
                </Stack>
              </Grid>
            );
          })}

        {!isLoading &&
          data.data.map((product: any) => {
            return (
              <Grid
                sx={{
                  "& .MuiPaper-root:hover": {
                    background: "none",
                  },
                }}
                key={nanoid()}
                item
                xs={12}
                sm={4}
                md={6}
                lg={3}
              >
                <ProductCard
                  productId={product.id}
                  image={product.Product_Image}
                  title={product.Product_Name}
                  price={product.Product_Value}
                />
              </Grid>
            );
          })}
      </Grid>
      {pageButtons && (
        <PageButtons pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </>
  );
};
