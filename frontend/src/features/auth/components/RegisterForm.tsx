import * as React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";

import { FormContainer, FormControl } from "../../../components/Form";

export const RegisterForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().required("Required"),
  });
  const onSubmit = (values: any) => {
    console.log();
  };
  return (
    <>
      <FormContainer
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        submit={true}
      >
        <FormControl
          control="input"
          type="text"
          label="Full Name"
          name="name"
        />
        <FormControl control="input" type="email" label="Email" name="email" />
        <FormControl
          control="input"
          type="password"
          label="Password"
          name="password"
        />
        <FormControl
          control="input"
          type="password"
          label="Confirm Password"
          name="confirmPassword"
        />
      </FormContainer>
      <Box style={{ padding: "10px" }}>
        <p>
          Already have an account?{" "}
          <Link style={{ textDecoration: "none" }} to={"/login"}>
            Sign In
          </Link>
        </p>
      </Box>
    </>
  );
};
