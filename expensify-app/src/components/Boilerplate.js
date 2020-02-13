import React, { Fragment } from "react";
import styled from "styled-components";
import GlobalStyle from "../style/GlobalStyle";

function Boilerplate() {
  return (
    <Fragment>
      <GlobalStyle />
      <Container color="green">
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
`;

const HeadingPrimary = styled.h1`
  color: yellow;
  margin: 0;
`;

const HeadingParagraph = styled.p`
  color: white;
`;

export default Boilerplate;
