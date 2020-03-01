import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
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
    <Link href={to}>
      <StyledLink href={to}>{children}</StyledLink>
    </Link>
  );
};
export default CustomLink;
