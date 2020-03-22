import React from "react";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

import { NoticiasUbicaciones } from "../../src/utils/NewsPages";
import NewsSectionPage from "../../src/components/pages/News/NewsSection";

const NewsPages: NextPage<{ section: string }> = props => {
  return (
    <React.Fragment>
      <Head>
        <title>{props.section}</title>
      </Head>
      <NewsSectionPage sectionName={props.section} />
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

  return {
    props: { section: sectionName }
  };
};

export default NewsPages;
