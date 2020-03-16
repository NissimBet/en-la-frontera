import React, { useState } from "react";
import styled from "styled-components";
import StreamPlayer from "./Stream";
const Container = styled.div``;

const StreamContainer: React.FunctionComponent = () => {
  const [isOpen, setOpen] = useState(true);
  return (
    <Container>
      <button onClick={() => setOpen(!isOpen)}>Hide</button>
      <StreamPlayer isOpen={isOpen} />
    </Container>
  );
};
export default StreamContainer;
