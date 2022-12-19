import * as React from "react";
import { Navigate } from "react-router-dom";

import { MainLayout } from "../components/Layout";
import { Wishlist } from "../features/wishlist";
import { Cart } from "../features/cart";
import { Home } from "../features/home";
import { Product } from "../features/product";
import { Login, Register } from "../features/auth";
import { Products } from "../features/products";

const routes = (isLoggedIn: boolean) => [
  // {
  //   path: "/app",
  //   element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
  //   children: [
  //     { path: "/profile", element: <Profile /> },
  //     { path: "/inventory", element: <Inventory /> },
  //   ],
  // },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:id", element: <Product /> },
      { path: "/cart", element: <Cart /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
];

export default routes;
