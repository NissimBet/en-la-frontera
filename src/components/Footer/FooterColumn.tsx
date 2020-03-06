import React from "react";
import styled from "styled-components";
import CustomLink from "./../Link";

const StyledColumn = styled.div``;

const ColumnTitle = styled.h3`
  text-align: center;
  width: 100%;
`;

const LinkList = styled.ul`
  list-style: none;
`;

export const FooterColumnItem = styled.li`
  margin: 15px 0;
`;

interface FooterColumnParams {
  title: string;
  links: Array<ColumnLinkInterface>;
}

interface ColumnLinkInterface {
  to: string;
  name: string;
}

export const FooterColumnLink: React.FunctionComponent<ColumnLinkInterface> = ({
  name,
  to
}) => (
  <FooterColumnItem>
    <CustomLink to={to}>{name}</CustomLink>
  </FooterColumnItem>
);

interface CustomFooterColumnInterface {
  title: string;
}

// TODO :: Esto se puede combinar con el de abajo
export const CustomFooterColumn: React.FunctionComponent<CustomFooterColumnInterface> = ({
  children,
  title
}) => {
  return (
    <StyledColumn>
      <ColumnTitle>{title}</ColumnTitle>
      <LinkList>{children}</LinkList>
    </StyledColumn>
  );
};

const FooterColumn: React.FunctionComponent<FooterColumnParams> = ({
  title,
  links
}) => {
  return (
    <StyledColumn>
      <ColumnTitle>{title}</ColumnTitle>
      <LinkList>
        {links.map(({ to, name }) => (
          <FooterColumnLink key={name} to={to} name={name} />
        ))}
      </LinkList>
    </StyledColumn>
  );
};

export default FooterColumn;
