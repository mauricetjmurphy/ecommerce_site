import * as React from "react";
import { Field, ErrorMessage, useField, useFormikContext } from "formik";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";

import { TextError } from "./TextError";
import { formStyles } from "./form.styles";

export type SelectOption = {
  key: string;
  value: string;
};

type FormSelectProps = {
  label?: string;
  name: string;
  options?: SelectOption[];
};

type CustomizedSelectProps = {
  children?: JSX.Element | JSX.Element[];
  form?: any;
  field: {
    name: string;
    value: string;
  };
};

export const FormSelect = ({ name, options, ...rest }: FormSelectProps) => {
  // const [field, meta] = useField(name);
  // const { setFieldValue } = useFormikContext();

  // const handleChange = (e: any) => {
  //   setFieldValue(name, e.target.value);
  // };

  // const configTextField: any = {
  //   select: true,
  //   variant: "outlined",
  //   fullWidth: true,
  //   onChange: handleChange,
  //   ...field,
  //   ...rest,
  // };

  // if (meta && meta.touched && meta.error) {
  //   configTextField.error = true;
  //   configTextField.helperText = meta.error;
  // }

  // return (
  //   <TextField {...configTextField}>
  //     {Object.keys(options).map((item: any, index: number) => {
  //       return <MenuItem key={index}>{options[item]}</MenuItem>;
  //     })}
  //   </TextField>
  // );

  return (
    <div style={{ margin: "5px 10px", width: "100%", color: "black" }}>
      <label id={name}>Amount</label>
      <Field
        style={formStyles.selectField}
        {...rest}
        as="select"
        id={name}
        name={name}
        {...rest}
      >
        {options?.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
