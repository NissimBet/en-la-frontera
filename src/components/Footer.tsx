import React from "react";
import CustomLink from "./Link";
import { link } from "fs";
import styled from "styled-components";

const StyledColumn = styled.div`
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  border-top: 1px solid black;
  padding: 10px 40px;
`;

const StyledList = styled.ul`
  list-style: none;
`;

interface FooterColumnParams {
  title: string;
  links: Array<{
    to: string;
    name: string;
  }>;
}

const FooterColumn: React.FunctionComponent<FooterColumnParams> = ({
  title,
  links
}) => {
  return (
    <StyledColumn>
      <h3>{title}</h3>
      <StyledList>
        {links.map(({ to, name }) => (
          <li key={name}>
            <CustomLink to={to}>{name}</CustomLink>
          </li>
        ))}
      </StyledList>
    </StyledColumn>
  );
};

export default () => {
  return (
    <Container>
      <Content>
        <FooterColumn
          title="Otros Links"
          links={[{ to: "https://google.com", name: "Google" }]}
        />
        <FooterColumn
          title="Nosotros"
          links={[{ to: "https://facebook.com", name: "Face" }]}
        />
        <FooterColumn
          title="Contactanos"
          links={[{ to: "https://youtube.com", name: "utub" }]}
        />
        <div>
          <h3>Logo</h3>
          <ul>
            <li>
              <img src="/" alt="Pollo" />
            </li>
          </ul>
        </div>
      </Content>
    </Container>
  );
};
