import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextareaAutosize } from "@mui/material";

import { TextError } from "./TextError";

type FormTextAreaProps = {
  label?: string;
  name: string;
};

export const FormTextArea = ({ label, name, ...rest }: FormTextAreaProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field
        component={TextareaAutosize}
        minRows={4}
        placeholder="Add a review..."
        style={{ width: "100%", padding: "8px" }}
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
