import React from "react";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import NewsInformationPage from "../../src/components/pages/News";
import { NoticiasUbicaciones } from "./../../src/utils/NewsPages";

interface NewsData {
  id: string;
  title: string;
  content: any;
}

const NewsPages: NextPage = props => {
  const router = useRouter();

  const data: NewsData = {
    id: "1",
    title: "titulo de la noticia",
    content: "contenido de la noticia"
  };

  console.log(props);

  return (
    <React.Fragment>
      <Head>
        <title>{data.title}</title>
      </Head>
      <NewsInformationPage />
    </React.Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = NoticiasUbicaciones.map(data => data.link);

  return {
    paths: paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: { data: params, something: "this" }
  };
};

export default NewsPages;
