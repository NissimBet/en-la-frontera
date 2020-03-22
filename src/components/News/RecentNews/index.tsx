import React from "react";
import styled from "styled-components";
import RecentNewsRow from "./RecentNewsRow";

import { RecentNewsData as _RecentNewsData } from "./RecentNewsRow";
export type RecentNewsData = _RecentNewsData;

const Container = styled.div``;

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
