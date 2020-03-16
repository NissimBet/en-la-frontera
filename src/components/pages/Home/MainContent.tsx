import React from "react";
import styled from "styled-components";
import StreamContainer from "../../StreamPlayer";
import TopNews, { TopNewsInterface } from "../../News/Top";
import NewsSlider from "../../News/NewsSlider";

const Container = styled.div`
  & > * {
    margin: 20px;
  }
`;

const HomeMainContent: React.FunctionComponent = () => {
  const TopNewsData: TopNewsInterface = {
    autor: "Nissim",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis deleniti tenetur quia at asperiores?",
    imagen: "/assets/pollo.jpeg",
    titulo: "Coronavirus mata a todos",
    id: 0
  };

  return (
    <Container>
      <StreamContainer />
      <TopNews {...TopNewsData} />
      <NewsSlider />
    </Container>
  );
};

export default HomeMainContent;
