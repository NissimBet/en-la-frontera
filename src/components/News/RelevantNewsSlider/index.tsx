import React from "react";
import NewsTab from "./SliderTab";

export interface SliderNewsData {
  titulo: string;
  autor: string;
  id: string;
  imagen: string;
  descripcion: string;
}

interface NewsSliderProps {
  relevantNews: Array<SliderNewsData>;
}

const RelevantNews: React.FunctionComponent<NewsSliderProps> = ({
  relevantNews
}) => {
  return (
    <div>
      <h1>Lo más relevante</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {relevantNews.map(data => (
          <NewsTab key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default RelevantNews;
