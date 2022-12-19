import * as React from "react";

type TextErrorProps = {
  children?: JSX.Element | JSX.Element[];
};

export const TextError = ({ children }: TextErrorProps) => {
  return (
    <div style={{ padding: "0 20px", color: "red", fontSize: "14px" }}>
      {children}
    </div>
  );
};
