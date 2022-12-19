import styled from "styled-components";

type ImageTextContainerProps = {
  fontSize: string;
};

export const ImageTextContainer = styled.div<ImageTextContainerProps>`
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 50;
`;
