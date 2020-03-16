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
    autor: "gabriel",
    descripcion: "smn",
    imagen: "/assets/SpiderSignal.jpeg",
    titulo: "asi nomas quedo",
    id: 1
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
