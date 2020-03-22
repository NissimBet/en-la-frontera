import React from "react";
import styled from "styled-components";

import StreamContainer from "../../StreamPlayer";
import RecentNews, { RecentNewsData } from "../../News/RecentNews";
import DailyTopNews, { DailyTopNewsInterface } from "../../News/DailyTopNews";
import RelevantNews, { SliderNewsData } from "../../News/RelevantNewsSlider";
import Ad from "../../Ads/Ad";

const Container = styled.div`
  & > * {
    margin: 20px;
  }
`;

export interface HomeMainContentProps {
  topArticle: DailyTopNewsInterface;
  relevantNews: Array<SliderNewsData>;
  recentNews: Array<RecentNewsData>;
}

const HomeMainContent: React.FunctionComponent<HomeMainContentProps> = ({
  topArticle,
  relevantNews,
  recentNews
}) => {
  /* const TopNewsData: DailyTopNewsInterface = {
    autor: "gabriel",
    titulo: "titulo",
    descripcion: "smn",
    imagen: "/assets/SpiderSignal.jpeg",
    id: "1",
    section: "reynosa"
  };

  const relevantNews: Array<SliderNewsData> = [
    {
      titulo: "El rey de corazones",
      descripcion: "Ariel Camacho",
      autor: "Smn karnal",
      id: "1",
      imagen: "/assets/SpiderSignal.jpeg",
      section: "reynosa"
    },
    {
      titulo: "El rey de corazones",
      descripcion: "Ariel Camacho",
      autor: "Miguelin",
      id: "2",
      imagen: "/assets/SpiderSignal.jpeg",
      section: "reynosa"
    },
    {
      titulo: "El rey de corazones",
      descripcion: "Ariel Camacho",
      autor: "Tu",
      id: "3",
      imagen: "/assets/SpiderSignal.jpeg",
      section: "reynosa"
    }
  ];

  const recentNews: Array<RecentNewsData> = [
    {
      titulo: "Noticia 1",
      descripcion:
        "Google Noticias es un agregador y buscador de noticias automatizado que rastrea de forma constante la información de los principales medios de comunicación online. El sitio web de Google News, elaborado por Google, se actualiza cada 15 minutos y fue ",
      autor: "Yo",
      id: "1",
      imagen: "/assets/SpiderSignal.jpeg",
      section: "reynosa"
    },
    {
      titulo: "Noticia 2",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: "2",
      imagen: "/assets/SpiderSignal.jpeg",
      section: "reynosa"
    },
    {
      titulo: "Noticia 3",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: "3",
      imagen: "/assets/SpiderSignal.jpeg",
      section: "reynosa"
    },
    {
      titulo: "Noticia 4",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: "3",
      imagen: "/assets/SpiderSignal.jpeg",
      section: "reynosa"
    },
    {
      titulo: "Noticia 5",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: "3",
      imagen: "/assets/SpiderSignal.jpeg",
      section: "reynosa"
    },
    {
      titulo: "Noticia 6",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: "3",
      imagen: "/assets/SpiderSignal.jpeg",
      section: "reynosa"
    },
    {
      titulo: "Noticia 7",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: "3",
      imagen: "/assets/SpiderSignal.jpeg",
      section: "reynosa"
    },
    {
      titulo: "Noticia 8",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: "3",
      imagen: "/assets/SpiderSignal.jpeg",
      section: "reynosa"
    }
  ];
 */
  return (
    <Container>
      <StreamContainer />
      <DailyTopNews {...topArticle} />
      <RelevantNews relevantNews={relevantNews} />
      <Ad />
      <RecentNews recentNews={recentNews} />
    </Container>
  );
};

export default HomeMainContent;
