import axios from "axios";

import { UserResponse } from "../types";

type LoginData = {
  email: string;
  password: string;
};

export const login = (data: LoginData): Promise<UserResponse> => {
  return axios.post("/auth/login", data);
};
