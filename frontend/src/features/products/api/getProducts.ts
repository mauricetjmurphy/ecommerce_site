import axios from "axios";

type getProductsProps = {
  pageNumber: number;
};

export const getProducts = (
  pageNumber: number,
  numberOfItems: number
): Promise<any> => {
  return axios.get(
    `http://localhost:4000/products?_limit=${numberOfItems}&_page=${pageNumber!}`
  );
};
