import React, { useState, useEffect } from "react";
import Head from "next/head";
import HomePage, { HomePageProps } from "../src/components/pages/Home";
import {
  getRecentArticles,
  getTopArticles,
  getTopArticle
} from "../src/utils/querySimulator";

async function getData(): Promise<HomePageProps> {
  const recent = await getRecentArticles();
  const topArticles = await getTopArticles();
  const topArticle = await getTopArticle();

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

export default () => {
  const [news, setNews] = useState<HomePageProps>(null);
  useEffect(() => {
    getData().then(articles => setNews(articles));
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>En la frontera</title>
      </Head>

      {news && <HomePage {...news} />}
    </React.Fragment>
  );
};
