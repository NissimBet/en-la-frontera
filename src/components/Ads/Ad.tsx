import React from "react";
import styled from "styled-components";

const Anuncio = styled.div`
  height: 100px;
  border: 2px black solid;
  padding: 0px 10px;
`;

const Ads: React.FunctionComponent = () => {
  return (
    <Anuncio>
      <h3>Anuncio</h3>
    </Anuncio>
  );
};
export default Ads;
