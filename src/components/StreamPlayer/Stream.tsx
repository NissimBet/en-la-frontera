import React from "react";
import styled from "styled-components";

interface PlayerInterface {
  isOpen: boolean;
}

const Player = styled.div<PlayerInterface>`
  width: 500px;
  transition: height 1s ease;
  height: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
  overflow: hidden;
  background-color: royalblue;
`;

const StreamPlayer: React.FunctionComponent<PlayerInterface> = ({ isOpen }) => {
  return (
    <Player isOpen={isOpen}>
      <h3>Player</h3>
    </Player>
  );
};
export default StreamPlayer;
