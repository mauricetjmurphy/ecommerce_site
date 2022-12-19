import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material";

import { ContentLayout } from "../../../components/Layout";
import { ProductImage } from "../components/ProductImage";
import { ProductForm } from "../components/ProductForm";
import { ProductReview } from "../components/ProductReview";
import { useFetchById } from "../../../hooks/useFetchById";
import { Spinner } from "../../../components/Spinner";

type Props = {};

export const Product = (props: Props) => {
  const navigate = useNavigate();

  const onSuccess = (data: any) => {
    console.log("success", data);
  };

  const onError = (error: any) => {
    console.log("Error", error);
  };

  const { id } = useParams();
  const { isLoading, data, error } = useFetchById({ onSuccess, onError, id });

  if (isLoading) return <Spinner />;

  if (error) return <p>{`An error has occurred: ${error}`}</p>;

  return (
    <ContentLayout title="Product Page">
      <Grid sx={{ padding: "0 150px", background: "#f4f5f7" }} container>
        <Grid sx={{ padding: "25px" }} item xs={12}>
          <Button
            onClick={() => navigate(-1)}
            color="inherit"
            variant="outlined"
          >
            Back
          </Button>
        </Grid>
        <ProductImage image={data.data.Product_Image} />
        <ProductForm
          brand={data.data.brand}
          availability={data.data.availability}
          productValue={data.data.Product_Value}
          color={data.data.color}
          description={data.data.description}
        />
        <ProductReview />
      </Grid>
    </ContentLayout>
  );
};
