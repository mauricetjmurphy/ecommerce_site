import axios from "axios";

export const getProduct = (id: string | undefined): Promise<any> => {
  return axios.get(`http://localhost:4000/products/${id}`);
};
