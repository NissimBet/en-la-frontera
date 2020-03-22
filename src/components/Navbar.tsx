import React from "react";
import Link from "./Link";
import styled from "styled-components";

import { NoticiasUbicaciones } from "./../utils/NewsPages";

const links = [{ name: "Inicio", link: "/" }, ...NoticiasUbicaciones];

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
            <Link to={value.link}>{value.name}</Link>
          </li>
        ))}
      </LinkList>
    </Container>
  );
};
