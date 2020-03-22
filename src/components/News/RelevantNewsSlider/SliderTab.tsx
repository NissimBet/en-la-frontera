import React from "react";
import styled from "styled-components";
import CustomLink from "../../Link";

interface NewsDataInterface {
  titulo: string;
  autor: string;
  id: string;
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

export default NewsTab;
