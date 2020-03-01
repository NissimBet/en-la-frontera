import React from "react";
import Link from "./Link";
import styled from "styled-components";

const links = [
  { name: "Home", to: "/" },
  { name: "Reynosa", to: "/contact" },
  { name: "Nuevo Laredo", to: "/about" },
  { name: "Miguel Alemán", to: "/news" },
  { name: "Río Bravo", to: "/" },
  { name: "Matamoros", to: "/contact" },
  { name: "Ciudad Victoria", to: "/about" },
  { name: "Mante", to: "/news" },
  { name: "Tampico", to: "/news" },
  { name: "Valle de Texas", to: "/news" }
];

const Container = styled.div`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  padding: 16px 0px;
`;

const LinkList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  max-width: 1200px;
  margin: 0 auto;
`;

export default () => {
  return (
    <Container>
      <LinkList>
        {links.map(({ name, to }) => (
          <li>
            <Link to={to}>{name}</Link>
          </li>
        ))}
      </LinkList>
    </Container>
  );
};
