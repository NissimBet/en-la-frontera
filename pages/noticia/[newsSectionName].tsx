import React from "react";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

import { NoticiasUbicaciones } from "../../src/utils/NewsPages";
import NewsSectionPage from "../../src/components/pages/News/NewsSection";
import {
  getNewsForSection,
  NewsArticleData
} from "../../src/utils/querySimulator";

interface NewsPagesProps {
  section: string;
  news: NewsArticleData;
}

const NewsPages: NextPage<NewsPagesProps> = props => {
  console.log(props.news);
  return (
    <React.Fragment>
      <Head>
        <title>{props.section}</title>
      </Head>
      <NewsSectionPage sectionName={props.section} news={props.news} />
    </React.Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: NoticiasUbicaciones.map(data => ({
      params: { newsSectionName: data.link }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const sectionName = NoticiasUbicaciones.find(
    data => data.link === params.newsSectionName
  ).name;

  const sectionNews = await getNewsForSection(sectionName);

  return {
    props: { section: sectionName, news: sectionNews }
  };
};

export default NewsPages;
