import { ProductProps } from "../features/product/types";

import { formatCategory } from "./formatCategory";

export const filterProductsByCategory = (
  searchTerm: string,
  products: ProductProps[]
) => {
  products.filter((item: ProductProps) =>
    formatCategory(item.Product_Category).includes(searchTerm)
  );
};
