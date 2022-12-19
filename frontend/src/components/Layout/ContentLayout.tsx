import * as React from "react";

import { Head } from "../Head";

import { ContentLayoutContainer } from "./contentLayout.styles";

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} description={""} />
      <ContentLayoutContainer>{children}</ContentLayoutContainer>
    </>
  );
};
