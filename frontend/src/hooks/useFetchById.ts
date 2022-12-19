import { useQuery } from "react-query";

import { getProduct } from "../features/product/api/getProduct";

type useFetchProps = {
  onSuccess: (data: any) => void;
  onError: (error: any) => void;
  id: string | undefined;
};

export const useFetchById = ({ onSuccess, onError, id }: useFetchProps) => {
  return useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(id),
    cacheTime: 5000,
  });
};
