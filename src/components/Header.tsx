import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  max-width: 500px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 56px;
  font-weight: bold;
  align-self: center;
`;

const Author = styled.span`
  font-weight: bold;
  font-style: italic;
`;

export default () => {
  return (
    <Header>
      <Title>En La Frontera</Title>
      <p>
        con <Author>Miguel Turriza</Author>
      </p>
    </Header>
  );
};
