import React from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { NoticiasUbicaciones } from "../../../src/utils/NewsPages";
import Head from "next/head";
import NewsArticle from "../../../src/components/pages/News/NewsArticle";

interface NewsArticleData {
  id: string;
  title: string;
  content: any;
}

const NewsArticlePage: NextPage<{ data: NewsArticleData }> = props => {
  console.log(props);
  return (
    <React.Fragment>
      <Head>
        <title>{props.data?.title || "titulo"}</title>
      </Head>
      <NewsArticle />
    </React.Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: true,
    paths: NoticiasUbicaciones.map(data => ({
      params: { newsSectionName: data.link, newsArticleId: "" }
    }))
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data: NewsArticleData = {
    content: "hi there",
    id: "12",
    title: "Titulo"
  };
  return {
    props: { data }
  };
};

export default NewsArticlePage;
