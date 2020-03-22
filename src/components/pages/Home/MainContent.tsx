import React from "react";
import styled from "styled-components";

import StreamContainer from "../../StreamPlayer";
import RecentNews, { RecentNewsData } from "../../News/RecentNews";
import DailyTopNews, { DailyTopNewsInterface } from "../../News/DailyTopNews";
import RelevantNews, { SliderNewsData } from "../../News/RelevantNewsSlider";
import Ad from "../../Ads/Ad";

const Container = styled.div`
  & > * {
    margin: 20px;
  }
`;

export interface HomeMainContentProps {
  topArticle: DailyTopNewsInterface;
  relevantNews: Array<SliderNewsData>;
  recentNews: Array<RecentNewsData>;
}

const HomeMainContent: React.FunctionComponent<HomeMainContentProps> = ({
  topArticle,
  relevantNews,
  recentNews
}) => {
  return (
    <Container>
      <StreamContainer />
      {topArticle && <DailyTopNews {...topArticle} />}
      <RelevantNews relevantNews={relevantNews} />
      <Ad />
      <RecentNews recentNews={recentNews} />
    </Container>
  );
};

export default HomeMainContent;
