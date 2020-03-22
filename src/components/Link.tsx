import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline black;
  }
`;

interface CustomLinkParams {
  to: string;
}

const CustomLink: React.FunctionComponent<CustomLinkParams> = ({
  children,
  to
}) => {
  if (to.search(/http(s)?:\/\//) > -1) {
    return (
      <StyledLink href={to} target="__blank">
        {children}
      </StyledLink>
    );
  }

  return (
    <Link href={to} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};
export default CustomLink;
