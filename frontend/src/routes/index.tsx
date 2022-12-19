import * as React from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";

import routes from "./Routes";

export const AppRoutes = () => {
  // const { isLoggedIn } = useSelector((state) => state.auth);
  const isLoggedIn = true;

  const routing = useRoutes(routes(isLoggedIn));

  return <>{routing}</>;
};
