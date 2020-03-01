import React from "react";
import Link from "next/link";
import styled from "styled-components";
const Abe = styled.h1`
  color: red;
  border: 1px solid red;
  background: #eee;
`;
export default () => {
  return (
    <div>
      <ul>
        <h3>gey</h3>
        <Abe>a</Abe>
      </ul>
      <p>hello</p>
    </div>
  );
};
