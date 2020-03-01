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
        <li>
          <Link href="/blogs/f">f</Link>
        </li>
        <li>
          <Link href="/blogs/2">2</Link>
        </li>
        <li>
          <Link href="/blogs/43">43</Link>
        </li>
        <li>
          <Link href="/blogs/55">55</Link>
        </li>

        <li>
          <Link href="/blogs/2">2</Link>
        </li>
        <li>
          <Link href="/blogs/2">2</Link>
        </li>
        <li>
          <Link href="/blogs/2">2</Link>
        </li>
        <li>
          <Link href="/blogs/f">f</Link>
        </li>
        <li>
          <Link href="/blogs/43">43</Link>
        </li>
        <li>
          <Link href="/blogs/55">55</Link>
        </li>
      </ul>
      <p>hello</p>
    </div>
  );
};
