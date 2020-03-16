import React from "react";
import CustomLink from "./../../Link";

export interface TopNewsData {
  titulo: string;
  descripcion: string;
  autor: string;
  imagen: string;
  id: number;
}

const TopNewsEntry: React.FunctionComponent<TopNewsData> = ({
  titulo,
  descripcion,
  autor,
  imagen,
  id
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
        <CustomLink to={`/news/${id}`}>Ver más</CustomLink>
      </ul>
    </div>
  );
};

export default TopNewsEntry;
