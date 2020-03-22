import React from "react";
import CustomLink from "./../../Link";

export interface TopNewsData {
  titulo: string;
  descripcion: string;
  autor: string;
  imagen: string;
  section: string;
  id: string;
}

const TopNewsEntry: React.FunctionComponent<TopNewsData> = ({
  titulo,
  descripcion,
  autor,
  imagen,
  id,
  section
}) => {
  return (
    <div>
      <img
        style={{ objectFit: "scale-down" }}
        src={imagen}
        alt="Recent News"
        width={100}
        height={50}
      />
      <ul>
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <p>{autor}</p>
        <CustomLink to={`/noticia/${section}/${id}`}>Ver más</CustomLink>
      </ul>
    </div>
  );
};

export default TopNewsEntry;
