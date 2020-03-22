import React from "react";
import styled from "styled-components";
import SideAds from "../../Ads/SideAds";
import TopNews, { TopNewsData } from "../../News/TopNews";

const Container = styled.div`
  padding: 0px 10px;
`;

export interface SideContentProps {
  topNews: Array<TopNewsData>;
}

const SideContent: React.FunctionComponent<SideContentProps> = ({
  topNews
}) => {
  return (
    <Container>
      <h2 style={{ padding: "10px" }}>Top 5</h2>
      <TopNews topNews={topNews} />
    </Container>
  );
};

export default SideContent;
