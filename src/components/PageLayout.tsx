import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";
import Header from "./Header";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100vh;
  }

  body, #__next {
    height: 100%;
    margin: 0;
    
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr auto;

  height: 100%;
`;

export default ({ children }) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <GridLayout>
          <Header />
          <Navbar />

          {children}

          <Footer />
        </GridLayout>
      </ThemeProvider>
    </React.Fragment>
  );
};
