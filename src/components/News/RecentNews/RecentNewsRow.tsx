import React from "react";
import styled from "styled-components";
import CustomLink from "./../../Link";

const LinkList = styled.ul`
  display: flex;

  list-style: none;
`;

interface RecentNewsData {
  titulo: string;
  descripcion: string;
  autor: string;
  imagen: string;
  id: number;
}

const RecentNewsRow: React.FunctionComponent<RecentNewsData> = ({
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

export default RecentNewsRow;
