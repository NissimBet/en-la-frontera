import React from "react";
import styled from "styled-components";
import CustomLink from "../Link";

interface NewsDataInterface {
  titulo: string;
  autor: string;
  id: number;
  imagen: string;
  descripcion: string;
}

interface ContainerInterface {
  image: string;
}

const NewsContainer = styled.div<ContainerInterface>`
  height: 250px;

  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};
`;

const NewsTab: React.FunctionComponent<NewsDataInterface> = ({
  titulo,
  autor,
  descripcion,
  id,
  imagen
}) => {
  return (
    <div>
      <NewsContainer image={imagen}>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <p>{autor}</p>
        <CustomLink to={`/news/${id}`}>Ver más</CustomLink>
      </NewsContainer>
    </div>
  );
};

const NewsSlider: React.FunctionComponent = ({}) => {
  const relevantNews: Array<NewsDataInterface> = [
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
