import React from "react";
import styled from "styled-components";
import CustomLink from "./../../Link";

const LinkList = styled.ul`
  display: flex;

  list-style: none;
`;

export interface RecentNewsData {
  titulo: string;
  descripcion: string;
  autor: string;
  imagen: string;
  id: string;
  section: string;
}

const RecentNewsRow: React.FunctionComponent<RecentNewsData> = ({
  titulo,
  descripcion,
  autor,
  section,
  imagen,
  id
}) => {
  return (
    <LinkList>
      <img
        style={{ objectFit: "scale-down" }}
        src={imagen}
        alt="Recent News"
        width={100}
        height={150}
      />
      <ul>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <p>{autor}</p>
        <CustomLink to={`/noticia/${section}/${id}`}>Ver más</CustomLink>
      </ul>
    </LinkList>
  );
};

export default RecentNewsRow;
