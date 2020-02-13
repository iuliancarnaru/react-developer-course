import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; // 10px
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
  }
`;

export default GlobalStyle;
