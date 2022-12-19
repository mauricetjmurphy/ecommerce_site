import * as React from "react";
import * as Yup from "yup";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

import { FormContainer, FormControl } from "../../../components/Form";

export const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values: any) => {
    console.log("submitted");
  };
  return (
    <>
      <FormContainer
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        submit={true}
      >
        <FormControl control="input" type="email" label="Email" name="email" />
        <FormControl
          control="input"
          type="password"
          label="Password"
          name="password"
        />
      </FormContainer>
      <Box style={{ padding: "10px" }}>
        <p>
          New Customer?{" "}
          <Link style={{ textDecoration: "none" }} to={"/register"}>
            Register
          </Link>
        </p>
      </Box>
    </>
  );
};
