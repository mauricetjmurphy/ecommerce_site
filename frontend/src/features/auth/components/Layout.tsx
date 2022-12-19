import * as React from "react";
import { Divider } from "@material-ui/core";

import { Head } from "../../../components/Head";

import { FormContainer, FormLayout, FormTitleContainer } from "./layout.styles";

type LayoutProps = {
  title: string;
  children?: JSX.Element | JSX.Element[];
};

export const Layout = ({ title, children }: LayoutProps) => {
  return (
    <FormLayout>
      <Head title={title} description={""} />
      <FormTitleContainer>
        <h1>{title}</h1>
      </FormTitleContainer>
      <Divider />
      <FormContainer>{children}</FormContainer>
    </FormLayout>
  );
};
