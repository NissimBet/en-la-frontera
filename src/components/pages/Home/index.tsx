import React from "react";
import styled from "styled-components";
import HomeMainContent, { HomeMainContentProps } from "./MainContent";
import SideContent, { SideContentProps } from "./SideContent";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  & > * {
    border: 1px solid black;
    border: 1px solid red;
  }

  & > *:first-child {
    flex: 5;
    margin-right: 10px;
  }
  & > *:nth-child(2) {
    flex: 2;
    margin-left: 10px;
  }
`;

export interface HomePageProps extends HomeMainContentProps, SideContentProps {}

const HomePage: React.FunctionComponent<HomePageProps> = ({
  recentNews,
  relevantNews,
  topArticle,
  topNews
}) => {
  return (
    <Container>
      <HomeMainContent
        recentNews={recentNews}
        relevantNews={relevantNews}
        topArticle={topArticle}
      />
      <SideContent topNews={topNews} />
    </Container>
  );
};

export default HomePage;
