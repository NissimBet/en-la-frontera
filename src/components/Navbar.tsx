import React from "react";
import Link from "./Link";
import styled from "styled-components";

const links = [
  { name: "Inicio", to: "/" },
  { name: "Reynosa", to: "/reynosa" },
  { name: "Nuevo Laredo", to: "/nuevo-laredo" },
  { name: "Miguel Alemán", to: "/miguel-aleman" },
  { name: "Río Bravo", to: "/rio-bravo" },
  { name: "Matamoros", to: "/matamoros" },
  { name: "Ciudad Victoria", to: "/ciudad-victoria" },
  { name: "Tampico", to: "/tampico" },
  { name: "Valle de Texas", to: "/valle-de-texas" }
];

const Container = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  padding: 15px 0;
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
        {links.map(value => (
          <li key={value.name}>
            <Link to={value.to}>{value.name}</Link>
          </li>
        ))}
      </LinkList>
    </Container>
  );
};
