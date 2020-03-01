import React from "react";
import CustomLink from "./Link";
import styled from "styled-components";

const Container = styled.div`
  padding: 15px 30px;
  border-top: 1px solid black;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  max-width: 1200px;
  margin: 0 auto;
`;

const StyledColumn = styled.div`
  text-align: center;
`;

const LinkList = styled.ul`
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
      <LinkList>
        {links.map(({ to, name }) => (
          <li key={name}>
            <CustomLink to={to}>{name}</CustomLink>
          </li>
        ))}
      </LinkList>
    </StyledColumn>
  );
};

export default () => {
  return (
    <Container>
      <Content>
        <FooterColumn
          title="Otros Links"
          links={[
            { name: "Google", to: "https://www.google.com" },
            { name: "Facebook", to: "http://www.google.com" }
          ]}
        />

        <FooterColumn
          title="Nosotros"
          links={[
            { name: "Home", to: "/" },
            { name: "About", to: "/about" }
          ]}
        />

        <FooterColumn
          title="Siguenos"
          links={[
            { name: "Face", to: "https://www.facebook.com" },
            { name: "Twitter", to: "https://www.twitter.com" }
          ]}
        />

        <div>
          <h3>Logo</h3>
          <ul>
            <li>
              <img
                src="/assets/pollo.jpeg"
                alt="Logo"
                width={150}
                height={150}
              />
            </li>
          </ul>
        </div>
      </Content>
    </Container>
  );
};
