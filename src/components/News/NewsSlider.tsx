import React from "react";
import styled from "styled-components";

interface NewsDataInterface {
  titulo: string;
  imagen: string;
  autor: string;
  id: number;
}

const NewsTab: React.FunctionComponent<NewsDataInterface> = ({
  titulo,
  imagen,
  id,
  autor
}) => {
  return (
    <div>
      <p>{titulo}</p>
      <p>{autor}</p>
      <p>{imagen}</p>
    </div>
  );
};

const NewsSlider: React.FunctionComponent = ({}) => {
  const relevantNews: Array<NewsDataInterface> = [
    {
      autor: "Nissim",
      id: 12,
      imagen: "",
      titulo: "Algo"
    },
    {
      autor: "Nissim",
      id: 14,
      imagen: "",
      titulo: "Algo mas"
    },
    {
      autor: "Nissim",
      id: 4,
      imagen: "",
      titulo: "Algo menos"
    }
  ];

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

export default NewsSlider;
