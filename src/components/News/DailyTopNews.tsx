import React from "react";
import styled from "styled-components";
import CustomLink from "../Link";

const Container = styled.div``;

interface ContainerInterface {
  image: string;
}

const NewsContainer = styled.div<ContainerInterface>`
  height: 350px;

  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  background-image: ${({ image }) => `url(${image})`};
  background-size: 100%;
  background-repeat: no-repeat;
  background-origin: 50%;
  background-position: center;
`;

const TextContainer = styled.div`
  background-color: #fff7;

  padding: 20px 10px;
  margin: 20px;

  border-radius: 25px;
`;

export interface DailyTopNewsInterface {
  titulo: string;
  descripcion: string;
  imagen: string;
  autor: string;
  id: number;
}

const DailyTopNews: React.FunctionComponent<DailyTopNewsInterface> = ({
  titulo,
  descripcion,
  imagen,
  autor,
  id
}) => {
  return (
    <Container>
      <h1>Noticia del Día</h1>

      <NewsContainer image={imagen}>
        <TextContainer>
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
          <p>{autor}</p>
        </TextContainer>
      </NewsContainer>
      <CustomLink to={`/news/${id}`}>Ver mas ...</CustomLink>
    </Container>
  );
};

export default DailyTopNews;
