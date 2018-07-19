import React from "react";
import { css } from "emotion";
import styled from "react-emotion";

const style = css`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 1.1rem;
  color: #282c33;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const L = styled("a")`
  text-decoration: none;
  color: #282c33;
  border-bottom: 4px solid #0fb032;
  transition: all 150ms ease-in-out;
  padding: 10px;
  &:hover {
    color: white;
    background-color: #0fb032;
  }
`;

const Footer = () => (
  <div className={style}>
    <p>Made by Matt Hagner with:</p>
    <p>
      <L href="reactjs.org">React</L>, <L href="emotion.sh">Emotion</L>,{" "}
      <L href="http://mikemcl.github.io/bignumber.js/">bignumber.js</L>,{" "}
      <L href="https://jestjs.io/">Jest</L>,{" "}
      <L href="https://github.com/kentcdodds/react-testing-library">
        React Testing Library
      </L>.
    </p>
  </div>
);

export default Footer;
