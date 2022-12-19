import * as React from "react";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";

type FormContainerProps = {
  initialValues: object;
  validationSchema: object;
  onSubmit: any;
  children?: JSX.Element | JSX.Element[];
  submit: boolean;
};

export const FormContainer = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  submit,
}: FormContainerProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          {children}
          {submit && (
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "10px 0", width: "100%" }}
              type="submit"
            >
              Submit
            </Button>
          )}
        </Form>
      )}
    </Formik>
  );
};
