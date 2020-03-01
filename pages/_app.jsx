import React from "react";
import NextApp from "next/app";

import PageLayout from "../src/components/PageLayout";

class MyApp extends NextApp {
  render() {
    const { Component } = this.props;
    return (
      <React.Fragment>
        <PageLayout>
          <Component />
        </PageLayout>
      </React.Fragment>
    );
  }
}

export default MyApp;
