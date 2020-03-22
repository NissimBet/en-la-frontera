import React from "react";
import styled from "styled-components";
import RecentNewsRow from "./RecentNewsRow";

const Container = styled.div``;

export interface RecentNewsData {
  titulo: string;
  descripcion: string;
  autor: string;
  imagen: string;
  id: number;
}

interface RecentNewsProps {
  recentNews: Array<RecentNewsData>;
}

const RecentNews: React.FunctionComponent<RecentNewsProps> = ({
  recentNews
}) => {
  return (
    <Container>
      <h2>Noticias Recientes</h2>
      <div>
        {recentNews.map(data => (
          <RecentNewsRow key={data.id} {...data} />
        ))}
      </div>
    </Container>
  );
};
export default RecentNews;
