import React from "react";
import styled from "styled-components";
import SideAds from "./../../Ads/SideAds";
import Top5 from "./../../News/Top5";

const Container = styled.div`
  padding: 0px 10px;
`;

const SecondContent: React.FunctionComponent = () => {
  return (
    <Container>
      <h2 style={{ padding: "10px auto" }}>Top 5</h2>
      <Top5 />
      <Top5 />
      <SideAds />
      <Top5 />
      <Top5 />
      <SideAds />
      <Top5 />
    </Container>
  );
};

export default SecondContent;
