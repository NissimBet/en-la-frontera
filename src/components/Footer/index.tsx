import React from "react";
import styled from "styled-components";

import FooterColumn, {
  CustomFooterColumn,
  FooterColumnItem,
  FooterColumnLink
} from "./FooterColumn";
import Image from "../Image";

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

const footerData = [
  {
    title: "Otros Links",
    links: [
      { name: "Google", to: "https://www.google.com" },
      { name: "Facebook", to: "http://www.google.com" }
    ]
  },
  {
    title: "Nosotros",
    links: [
      { name: "Home", to: "/" },
      { name: "About", to: "/about" }
    ]
  },
  {
    title: "Siguenos",
    links: [
      { name: "Face", to: "https://www.facebook.com" },
      { name: "Twitter", to: "https://www.twitter.com" }
    ]
  }
];

export default () => {
  return (
    <Container>
      <Content>
        {footerData.map(data => (
          <FooterColumn {...data} key={data.title} />
        ))}

        <CustomFooterColumn title="Logo">
          <FooterColumnItem>
            <Image src="/assets/pollo.jpeg" alt="Logo" fit="contain" />
          </FooterColumnItem>
          <FooterColumnLink to="me" name="link" />
        </CustomFooterColumn>
      </Content>
    </Container>
  );
};
