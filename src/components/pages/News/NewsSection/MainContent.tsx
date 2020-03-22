import React from "react";

import DailyTopNews, {
  DailyTopNewsInterface
} from "../../../News/DailyTopNews";
import RelevantNews, { SliderNewsData } from "../../../News/RelevantNewsSlider";

const NewsSectionMainContent: React.FunctionComponent = () => {
  const topNews: DailyTopNewsInterface = {
    autor: "gabriel",
    titulo: "titulo",
    descripcion: "smn",
    imagen: "/assets/SpiderSignal.jpeg",
    id: 1
  };

  const relevantNews: Array<SliderNewsData> = [
    {
      titulo: "El rey de corazones",
      descripcion: "Ariel Camacho",
      autor: "Smn karnal",
      id: 1,
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "El rey de corazones",
      descripcion: "Ariel Camacho",
      autor: "Miguelin",
      id: 2,
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "El rey de corazones",
      descripcion: "Ariel Camacho",
      autor: "Tu",
      id: 3,
      imagen: "/assets/SpiderSignal.jpeg"
    }
  ];

  return (
    <div>
      <DailyTopNews {...topNews} />
      <RelevantNews relevantNews={relevantNews} />
    </div>
  );
};

export default NewsSectionMainContent;
