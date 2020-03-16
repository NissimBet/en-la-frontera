import React from "react";
import styled from "styled-components";
import TopNewsEntry, {
  TopNewsData as TopNewsDataInterface
} from "./TopNewsEntry";

export type TopNewsData = TopNewsDataInterface;

const Container = styled.div``;

interface TopNewsProps {
  topNews: Array<TopNewsDataInterface>;
}

const TopNews: React.FunctionComponent<TopNewsProps> = ({ topNews }) => {
  return (
    <Container>
      <div style={{ border: "10px auto" }}>
        {topNews.map(data => (
          <TopNewsEntry key={data.id} {...data} />
        ))}
      </div>
    </Container>
  );
};
export default TopNews;
