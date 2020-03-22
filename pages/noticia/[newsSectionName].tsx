import React, { useEffect, useState } from "react";
import {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps
} from "next";
import Head from "next/head";

import { NoticiasUbicaciones } from "../../src/utils/NewsPages";
import NewsSectionPage, {
  NewsSectionPageProps
} from "../../src/components/pages/News/NewsSection";
import {
  getNewsForSection,
  getRecentArticles,
  getTopArticles,
  getTopArticle,
  NewsArticleData
} from "../../src/utils/querySimulator";

interface NewsPagesProps {
  sectionName: string;
  sectionLink: string;
}

async function getData(section: string): Promise<NewsSectionPageProps> {
  const recent = await getRecentArticles(section);
  const topArticles = await getTopArticles(section);
  const topArticle = await getTopArticle(section);

  return {
    recentNews: [
      ...recent.map(article => ({
        titulo: article.title,
        descripcion: article.content,
        autor: article.author,
        imagen: article.previewImage,
        id: article.id,
        section: article.section
      }))
    ],
    topArticle: topArticle
      ? {
          autor: topArticle.author,
          descripcion: topArticle.content,
          imagen: topArticle.previewImage,
          id: topArticle.id,
          titulo: topArticle.title,
          section: topArticle.section
        }
      : null,
    relevantNews: [],
    sectionName: section,
    topNews: [
      ...topArticles.map(article => ({
        titulo: article.title,
        descripcion: article.content,
        autor: article.author,
        imagen: article.previewImage,
        id: article.id,
        section: article.section
      }))
    ]
  };
}

const NewsPages: NextPage<NewsPagesProps> = props => {
  const [news, setNews] = useState<NewsSectionPageProps>(null);
  useEffect(() => {
    getData(props.sectionLink).then(articles => setNews(articles));
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{props.sectionName}</title>
      </Head>
      {news && <NewsSectionPage sectionName={props.sectionName} {...news} />}
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
  const section = NoticiasUbicaciones.find(
    data => data.link === params.newsSectionName
  );

  console.log(section);

  return {
    props: { sectionName: section.name, sectionLink: section.link }
  };
};

export default NewsPages;
