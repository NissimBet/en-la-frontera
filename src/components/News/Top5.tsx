import React from "react";
import styled from "styled-components";
import CustomLink from "../Link";

interface TopNewsInterface {
  titulo: string;
  descripcion: string;
  autor: string;
  imagen: string;
  id: number;
}
interface ContainerInterface {
  image: string;
}
const Container = styled.div``;

const TopNewsContainer = styled.div<ContainerInterface>`
  height: 10px;
  justify-content: flex-end;
  flex-direction: column;
  display: "flex-direction-column";
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;
const LinkList = styled.ul`
  display: flex;

  list-style: none;
`;
const TopNews: React.FunctionComponent<TopNewsInterface> = ({
  titulo,
  descripcion,
  autor,
  imagen,
  id
}) => {
  return (
    <LinkList>
      <img
        style={{ objectFit: "scale-down" }}
        src="/assets/SpiderSignal.jpeg"
        alt="Recent News"
        width={100}
        height={50}
      />
      <ul>
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <p>{autor}</p>
        <CustomLink to={`/news/${id}`}>Ver más</CustomLink>
      </ul>
    </LinkList>
  );
};

const Top5: React.FunctionComponent = () => {
  const relevantNews: Array<TopNewsInterface> = [
    {
      titulo: "Noticia",
      descripcion: "Google Noticias es un agregador y buscador de noticias ...",
      autor: "Yo",
      id: 1,
      imagen: "/assets/SpiderSignal.jpeg"
    }
  ];
  return (
    <Container>
      <div style={{ border: "10px auto" }}>
        {relevantNews.map(data => (
          <TopNews key={data.id} {...data} />
        ))}
      </div>
    </Container>
  );
};
export default Top5;
