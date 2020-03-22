import React from "react";
import styled from "styled-components";

import NewsSidebar, { TopNewsData } from "./NewsSectionSidebar";
import NewsSectionMainContent from "./MainContent";
import RecentNews, { RecentNewsData } from "../../../News/RecentNews";

import { DailyTopNewsInterface } from "../../../News/DailyTopNews";
import { SliderNewsData } from "../../../News/RelevantNewsSlider";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  grid-template-rows: auto auto;
  grid-template-areas: "main side" "bot bot";
  gap: 30px;
`;

const BottomContent = styled.div`
  grid-area: bot;
`;

export interface NewsSectionPageProps {
  sectionName: string;
  recentNews: Array<RecentNewsData>;
  topArticle: DailyTopNewsInterface;
  relevantNews: Array<SliderNewsData>;
  topNews: Array<TopNewsData>;
}

const NewsSectionPage: React.FunctionComponent<NewsSectionPageProps> = ({
  sectionName,
  recentNews,
  topArticle,
  topNews,
  relevantNews
}) => {
  return (
    <Container>
      <NewsSectionMainContent
        sectionName={sectionName}
        topNews={topArticle}
        relevantNews={relevantNews}
      />
      <NewsSidebar topNews={topNews} />
      <BottomContent>
        <RecentNews recentNews={recentNews} />
      </BottomContent>
    </Container>
  );
};

export default NewsSectionPage;
