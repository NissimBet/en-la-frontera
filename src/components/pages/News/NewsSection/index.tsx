import React from "react";
import styled from "styled-components";

import NewsSidebar from "./NewsSectionSidebar";
import NewsSectionMainContent from "./MainContent";
import RecentNews, { RecentNewsData } from "../../../News/RecentNews";
import { NewsArticleData } from "../../../../utils/querySimulator";
import { DailyTopNewsInterface } from "../../../News/DailyTopNews";
import { SliderNewsData } from "../../../News/RelevantNewsSlider";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  grid-template-rows: auto auto;
  grid-template-areas: "main side" "bot bot";
  gap: 30px;
`;

const BottomContent = styled.div`
  grid-area: bot;
`;

export interface NewsSectionPageProps {
  sectionName: string;
  news: NewsArticleData;
}

const NewsSectionPage: React.FunctionComponent<NewsSectionPageProps> = ({
  sectionName,
  news
}) => {
  const recentNews: Array<RecentNewsData> = [
    {
      titulo: "Noticia 1",
      descripcion:
        "Google Noticias es un agregador y buscador de noticias automatizado que rastrea de forma constante la información de los principales medios de comunicación online. El sitio web de Google News, elaborado por Google, se actualiza cada 15 minutos y fue ",
      autor: "Yo",
      id: "1",
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "Noticia 2",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: "2",
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "Noticia 3",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: "3",
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "Noticia 4",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: "3",
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "Noticia 5",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: "3",
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "Noticia 6",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: "3",
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "Noticia 7",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: "3",
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "Noticia 8",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: "3",
      imagen: "/assets/SpiderSignal.jpeg"
    }
  ];

  const topNews: DailyTopNewsInterface = {
    autor: "gabriel",
    titulo: "titulo",
    descripcion: "smn",
    imagen: "/assets/SpiderSignal.jpeg",
    id: "1"
  };

  const relevantNews: Array<SliderNewsData> = [
    {
      titulo: "El rey de corazones",
      descripcion: "Ariel Camacho",
      autor: "Smn karnal",
      id: "1",
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "El rey de corazones",
      descripcion: "Ariel Camacho",
      autor: "Miguelin",
      id: "2",
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "El rey de corazones",
      descripcion: "Ariel Camacho",
      autor: "Tu",
      id: "3",
      imagen: "/assets/SpiderSignal.jpeg"
    }
  ];

  return (
    <Container>
      <NewsSectionMainContent
        sectionName={sectionName}
        topNews={topNews}
        relevantNews={relevantNews}
      />
      <NewsSidebar />
      <BottomContent>
        <RecentNews recentNews={recentNews} />
      </BottomContent>
    </Container>
  );
};

export default NewsSectionPage;
