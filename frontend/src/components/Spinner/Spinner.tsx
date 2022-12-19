import { clsx } from "clsx";
import { ClockLoader } from "react-spinners";

import "../../index.css";

import { SpinnerContainer } from "./spinner.styles";

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <ClockLoader size={100} color="#36d7b7" />
    </SpinnerContainer>
  );
};
