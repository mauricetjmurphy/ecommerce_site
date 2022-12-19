import { Category } from "@mui/icons-material";
import axios from "axios";
import { useQuery } from "react-query";

import { ProductProps } from "../features/product";
import { getProducts } from "../features/products/api/getProducts";
import { filterProductsByCategory } from "../utils/filterProductsByCategory";
import { formatCategory } from "../utils/formatCategory";

type useFetchProps = {
  onSuccess: (data: any) => void;
  onError: (error: any) => void;
  pageNumber: any;
  numberOfItems: number;
};

export const useFetch = ({
  onSuccess,
  onError,
  pageNumber,
  numberOfItems,
}: useFetchProps) => {
  return useQuery({
    queryKey: ["products", pageNumber, numberOfItems],
    queryFn: () => getProducts(pageNumber, numberOfItems),
    cacheTime: 50000,
    keepPreviousData: true,
  });
};
