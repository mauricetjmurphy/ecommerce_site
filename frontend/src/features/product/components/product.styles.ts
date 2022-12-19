import styled from "styled-components";

type ProductImageProps = {
  src: string;
  alt: string;
};

export const ProductImageContainer = styled.img<ProductImageProps>`
  width: 100%;
`;
