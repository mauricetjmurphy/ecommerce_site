import * as React from "react";

import { CheckboxOption, FormCheckbox } from "./FormCheckbox";
import { FormDatePicker } from "./FormDatePicker";
import { FormInput } from "./FormInput";
import { FormRadio, RadioOption } from "./FormRadio";
import { FormSelect, SelectOption } from "./FormSelect";
import { FormTextArea } from "./FormTextArea";

type FormControlProps = {
  control: string;
  type?: string;
  label?: string;
  name: string;
  options?: any;
};

export const FormControl = ({
  control,
  ...rest
}: FormControlProps): JSX.Element | null => {
  switch (control) {
    case "input":
      return <FormInput {...rest} />;
    case "textarea":
      return <FormTextArea {...rest} />;
    case "select":
      return <FormSelect {...rest} />;
    case "radio":
      return <FormRadio {...rest} />;
    case "checkbox":
      return <FormCheckbox {...rest} />;
    case "date":
      return <FormDatePicker {...rest} />;
    default:
      return null;
  }
};
