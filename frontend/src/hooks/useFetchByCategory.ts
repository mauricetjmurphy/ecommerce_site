import { useQuery } from "react-query";

import { getProducts } from "../features/products";
import { formatCategory } from "../utils/formatCategory";

type useFetchProps = {
  onSuccess: (data: any) => void;
  onError: (error: any) => void;
  pageNumber: number;
  category: string;
  numberOfItems: number;
};

export const useFetchByCategory = ({
  onSuccess,
  onError,
  pageNumber,
  category,
  numberOfItems,
}: useFetchProps) => {
  return useQuery({
    queryKey: ["product", pageNumber, numberOfItems],
    queryFn: () => getProducts(pageNumber, numberOfItems),
    cacheTime: 50000,
    select: (data) => {
      console.log(data);

      return data.data.filter((item: any) => {
        item.Product_Category.toLowerCase().includes(category.toLowerCase());
      });
    },
  });
};
