import { createGlobalStyle } from "styled-components";

import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: ${theme.fonts.fontFamily.primary};
  }
`;

export default GlobalStyle;
