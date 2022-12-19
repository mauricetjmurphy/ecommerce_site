import axios from "axios";
import { UserResponse } from "../types";

type RegisterData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const register = (data: RegisterData): Promise<UserResponse> => {
  return axios.post("/auth/register", data);
};
