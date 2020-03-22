import React from "react";
import styled from "styled-components";
import CustomLink from "../Link";

export interface TopNewsInterface {
  titulo: string;
  descripcion: string;
  autor: string;
  imagen: string;
  id: number;
  link: string;
}

interface ContainerInterface {
  image: string;
}

const Container = styled.div``;

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

const TextContainer = styled.div`
  background-color: #fff7;
  padding: 20px;
  margin: 10px;
  border-radius: 30px;
`;
const TopNews: React.FunctionComponent<TopNewsInterface> = ({
  titulo,
  descripcion,
  imagen,
  autor,
  id,
  link
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
        <CustomLink to={`/News/${link}`}>Ver más</CustomLink>
      </NewsContainer>
    </Container>
  );
};
export default TopNews;
