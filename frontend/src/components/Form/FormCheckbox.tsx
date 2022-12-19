import * as React from "react";
import { Field, ErrorMessage } from "formik";

import { TextError } from "./TextError";

export type CheckboxOption = {
  key: string;
  value: string;
};

type FormCheckboxProps = {
  label?: string;
  name: string;
  options?: CheckboxOption[];
};

export const FormCheckbox = ({
  label,
  name,
  options,
  ...rest
}: FormCheckboxProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}>
        {({ field }: any) => {
          return options?.map((item) => {
            <React.Fragment key={item.key}>
              <input
                type="checkbox"
                id={item.value}
                {...field}
                value={item.value}
                checked={field.value.includes(item.value)}
              />
              <label htmlFor={item.value}>{item.key}</label>;
            </React.Fragment>;
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
