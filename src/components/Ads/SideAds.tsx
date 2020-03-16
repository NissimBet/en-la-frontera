import React from "react";
import styled from "styled-components";

const Ad = styled.div`
  height: 80px;
  border: 2px black solid;
  padding: 0px 10px;
`;

const SideAds: React.FunctionComponent = () => {
  return (
    <Ad>
      <h3>Anuncio</h3>
    </Ad>
  );
};
export default SideAds;
