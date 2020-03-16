import React from "react";
import styled from "styled-components";

interface PlayerInterface {
  isOpen: boolean;
}

const Player = styled.div<PlayerInterface>`
  transition: height 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  height: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
  width: 100%;

  overflow: hidden;

  background-color: #4447;
`;

const StreamPlayer: React.FunctionComponent<PlayerInterface> = ({ isOpen }) => {
  return (
    <Player isOpen={isOpen}>
      <h3>Player</h3>
    </Player>
  );
};
export default StreamPlayer;
