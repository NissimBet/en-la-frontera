import React from "react";
import StreamContainer from "../../StreamPlayer";
import TopNews, { TopNewsInterface } from "./../../News/Top";
import styled from "styled-components";
import NewsSlider from "./../../News/NewsSlider";
import Ad from "../../Ads/Ads";
import RecentNews from "../../News/RecentNews";
const Container = styled.div`
  & > * {
    margin: 20px;
  }
`;

const HomeMainContent: React.FunctionComponent = () => {
  const TopNewsData: TopNewsInterface = {
    titulo: "asi nomas quedo",
    autor: "gabriel",
    descripcion: "smn",
    imagen: "/assets/SpiderSignal.jpeg",
    id: 1,
    link: "EstructuraNews"
  };
  return (
    <Container>
      <StreamContainer />
      <TopNews {...TopNewsData} />
      <NewsSlider />
      <Ad />
      <RecentNews />
    </Container>
  );
};

export default HomeMainContent;
