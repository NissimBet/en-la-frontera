import React from "react";
import styled from "styled-components";
import SideAds from "../../Ads/SideAds";
import TopNews, { TopNewsData } from "../../News/TopNews";

const Container = styled.div`
  padding: 0px 10px;
`;

const SideContent: React.FunctionComponent = () => {
  const topNews: Array<TopNewsData> = [
    {
      titulo: "Noticia",
      descripcion: "Google Noticias es un agregador y buscador de noticias ...",
      autor: "Yo",
      id: 1,
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "Noticia",
      descripcion: "Google Noticias es un agregador y buscador de noticias ...",
      autor: "Yo",
      id: 1,
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "Noticia",
      descripcion: "Google Noticias es un agregador y buscador de noticias ...",
      autor: "Yo",
      id: 1,
      imagen: "/assets/SpiderSignal.jpeg"
    }
  ];

  return (
    <Container>
      <h2 style={{ padding: "10px" }}>Top 5</h2>
      <TopNews topNews={topNews} />
    </Container>
  );
};

export default SideContent;
