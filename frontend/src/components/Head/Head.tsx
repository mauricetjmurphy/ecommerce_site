import { Helmet } from "react-helmet-async";

type HeadProps = {
  title: string;
  description: string;
};

export const Head = ({ title, description }: HeadProps) => {
  return (
    <Helmet
      title={title ? `${title} | Project Title` : undefined}
      defaultTitle="Project Title"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
