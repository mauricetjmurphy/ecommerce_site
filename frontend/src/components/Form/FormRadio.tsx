import * as React from "react";
import { Field, ErrorMessage } from "formik";

import { TextError } from "./TextError";

export type RadioOption = {
  key: string;
  value: string;
};

type FormRadioProps = {
  label?: string;
  name: string;
  options?: RadioOption[];
};

export const FormRadio = ({
  label,
  name,
  options,
  ...rest
}: FormRadioProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="" id={name} name={name} {...rest}>
        {({ field }: any) => {
          return options?.map((item) => {
            <React.Fragment key={item.key}>
              <input
                type="radio"
                id={item.value}
                {...field}
                value={item.value}
                checked={field.value === item.value}
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
