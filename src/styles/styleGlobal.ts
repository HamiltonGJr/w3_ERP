import styled, { createGlobalStyle } from "styled-components";

import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: ${theme.fonts.fontFamily.primary};
  }
`;
export const ContainerBody = styled.div`
  display: flex;
`;
export const ContainerMain = styled.div`
  width: 85%;
  height: 100vh;
  margin-left: 15%;
  overflow-y: auto;
`;

export default GlobalStyle;
