import React from "react";
import TopNews, { TopNewsData } from "../../../News/TopNews";

const NewsSidebar: React.FunctionComponent = () => {
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
    <div>
      <TopNews topNews={topNews} />
    </div>
  );
};

export default NewsSidebar;
