import React from "react";
import Head from "next/head";
import HomePage from "../src/components/pages/Home";

export default () => {
  return (
    <React.Fragment>
      <Head>
        <title>En la frontera</title>
      </Head>

      <HomePage />
    </React.Fragment>
  );
};
