import React from "react";
import styled from "styled-components";
import CustomLink from "../Link";

interface ReceNewsInterface {
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

const RecentNewsContainer = styled.div<ContainerInterface>`
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
const NewNews: React.FunctionComponent<ReceNewsInterface> = ({
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
        height={150}
      />
      <ul>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <p>{autor}</p>
        <CustomLink to={`/news/${id}`}>Ver más</CustomLink>
      </ul>
    </LinkList>
  );
};

const RecentNews: React.FunctionComponent = () => {
  const relevantNews: Array<ReceNewsInterface> = [
    {
      titulo: "Noticia 1",
      descripcion:
        "Google Noticias es un agregador y buscador de noticias automatizado que rastrea de forma constante la información de los principales medios de comunicación online. El sitio web de Google News, elaborado por Google, se actualiza cada 15 minutos y fue ",
      autor: "Yo",
      id: 1,
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "Noticia 2",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: 2,
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "Noticia 3",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: 3,
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "Noticia 4",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: 3,
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "Noticia 5",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: 3,
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "Noticia 6",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: 3,
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "Noticia 7",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: 3,
      imagen: "/assets/SpiderSignal.jpeg"
    },
    {
      titulo: "Noticia 8",
      descripcion: "a lo mejor paso",
      autor: "tu",
      id: 3,
      imagen: "/assets/SpiderSignal.jpeg"
    }
  ];
  return (
    <Container>
      <h2>Noticias Recientes</h2>
      <div>
        {relevantNews.map(data => (
          <NewNews key={data.id} {...data} />
        ))}
      </div>
    </Container>
  );
};
export default RecentNews;
