import * as React from "react";
import { useField } from "formik";
import { Box, TextField } from "@mui/material";

type FormInputProps = {
  label?: string;
  name: string;
};

const fieldStyles = {
  margin: "10px 0",
  background: "#fff",
};

export const FormInput = ({ label, name, ...rest }: FormInputProps) => {
  const [field, meta] = useField(name);

  const configTextField: any = {
    label: label,
    variant: "outlined",
    fullWidth: true,
    ...field,
    ...rest,
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return (
    <Box
      sx={{
        "& .MuiFormHelperText-root": {
          background: "transparent",
        },
        "& .MuiFormControl-root": {
          margin: "10px 0",
        },
        "& .MuiInputBase-input": {
          background: "#fff",
        },
      }}
    >
      <TextField {...configTextField} />
    </Box>
  );
};
