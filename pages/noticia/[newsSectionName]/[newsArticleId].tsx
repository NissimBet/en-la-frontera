import React, { useEffect, useState } from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { NoticiasUbicaciones } from "../../../src/utils/NewsPages";
import Head from "next/head";
import NewsArticle from "../../../src/components/pages/News/NewsArticle";
import {
  getSectionArticleWithId,
  NewsArticleData
} from "../../../src/utils/querySimulator";
import { useRouter } from "next/router";

interface NewsArticleDataProps {
  articleId: string;
  sectionName: string;
}

const NewsArticlePage: NextPage<NewsArticleDataProps> = props => {
  const { articleId, sectionName } = props;
  const [articleData, setArticleData] = useState<NewsArticleData>(null);

  useEffect(() => {
    getSectionArticleWithId(sectionName, articleId).then(data => {
      setArticleData(data);
    });
  }, []);

  console.log(articleData);
  return (
    <React.Fragment>
      <Head>
        <title>{"titulo"}</title>
      </Head>
      {articleData && (
        <NewsArticle
          titulo={articleData.title}
          fecha={new Date(articleData.date)}
          author={articleData.author}
          image={articleData.previewImage}
          content={articleData.content}
        />
      )}
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
  return {
    props: {
      articleId: params.newsArticleId,
      sectionName: params.newsSectionName
    }
  };
};

export default NewsArticlePage;
