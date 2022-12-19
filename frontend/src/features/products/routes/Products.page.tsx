import * as React from "react";
import { useLocation } from "react-router-dom";

import { ContentLayout } from "../../../components/Layout";
import { ProductList } from "../../../components/ProductList";

export const Products = () => {
  const location = useLocation();
  return (
    <ContentLayout title="Products Page">
      <ProductList numberOfItems={12} />
    </ContentLayout>
  );
};
