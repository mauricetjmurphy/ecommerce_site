import * as React from "react";
import { Field, ErrorMessage } from "formik";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TextField } from "@material-ui/core";

import { TextError } from "./TextError";

type FormDatePickerProps = {
  label?: string;
  name: string;
};

export const FormDatePicker = ({
  label,
  name,
  ...rest
}: FormDatePickerProps) => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Field name={name}>
          {({ form, field }: any) => {
            const { setFieldValue } = form;
            const { value } = field;
            return (
              <DatePicker
                disableFuture
                label={label}
                openTo="year"
                views={["year", "month", "day"]}
                value={value}
                onChange={(newValue) => {
                  setFieldValue(newValue);
                }}
                renderInput={(params: any) => <TextField {...params} />}
              />
            );
          }}
        </Field>
      </LocalizationProvider>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
