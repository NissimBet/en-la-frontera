import React from "react";
import styled from "styled-components";
import HomeMainContent from "./MainContent";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  & > * {
    border: 1px solid red;
  }

  & > *:first-child {
    flex: 5;
    margin-right: 10px;
  }
  & > *:nth-child(2) {
    flex: 2;
    margin-left: 10px;
  }
`;

const HomePage: React.FunctionComponent = () => {
  return (
    <Container>
      <HomeMainContent />
      <h1>Home Page 2</h1>
    </Container>
  );
};

export default HomePage;
