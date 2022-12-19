import styled from "styled-components";

type ImageProps = {
  brightness: any;
};

export const ImageElement = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(${(props) => props.brightness});
`;
