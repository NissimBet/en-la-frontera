import React from "react";
import styled from "styled-components";
import HomeMainContent from "./MainContent";
import SecondContent from "./SecondContent";
import EstructuraNatural from "./../../News/EstructuraNews";
const Container = styled.div`
  display: flex;
  justify-content: space-between;

  & > * {
    border: 1px solid black;
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

const Homepage: React.FunctionComponent = () => {
  return (
    <Container>
      <EstructuraNatural />
      <SecondContent />
    </Container>
  );
};

export default Homepage;
