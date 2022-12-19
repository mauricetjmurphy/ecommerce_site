import * as React from "react";

import { Layout } from "../components/Layout";
import { LoginForm } from "../components/LoginForm";

export const Login = () => {
  return (
    <Layout title="Log in to your account">
      <LoginForm />
    </Layout>
  );
};
