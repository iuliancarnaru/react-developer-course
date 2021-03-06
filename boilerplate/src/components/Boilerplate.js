import React, { Fragment } from "react";
import styled from "styled-components";
import Logo from "../../assets/images/puzzle.svg";
import GlobalStyle from "../style/GlobalStyle";

function Boilerplate() {
  return (
    <Fragment>
      <GlobalStyle />
      <Container color="#2c786c">
        <Logo width="60px" height="60px" />
        <HeadingPrimary>Boilerplate</HeadingPrimary>
        <HeadingParagraph>
          Create something beautiful with React, Reach Router and Styled
          Components
        </HeadingParagraph>
      </Container>
    </Fragment>
  );
}

const Container = styled.div`
  background-color: ${({ color }) => color || "navy"};
  padding: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
`;

const HeadingPrimary = styled.h1`
  color: yellow;
  margin: 0;
`;

const HeadingParagraph = styled.p`
  color: white;
`;

export default Boilerplate;
