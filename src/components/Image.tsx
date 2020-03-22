import React from "react";
import styled from "styled-components";

interface StyledImageProps {
  width?: number;
  height?: number;
  fit?: string;
}

const StyledImage = styled.img<StyledImageProps>`
  ${({ width, height }) =>
    width && height
      ? `width: ${width}px; height: ${height}px`
      : !width && !height
      ? `width: 200px; height: 200px`
      : width
      ? `width: ${width}px; height: auto`
      : `width: auto; height: ${height}px`};
  /* width: ${({ width }) => (width ? width : 100)}px;
  height: ${({ height }) => (height ? height : 100)}px; */
  object-fit: ${({ fit }) => (fit ? fit : "fill")};
`;

interface ImageInterface extends StyledImageProps {
  src: string;
  alt: string;
}

const Image: React.FunctionComponent<ImageInterface> = props => {
  return <StyledImage {...props} />;
};

export default Image;
