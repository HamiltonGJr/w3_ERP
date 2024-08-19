import React from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import theme from "./styles/theme";
import GlobalStyle from "./styles/styleGlobal";
import Router from "./routes/Routes";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
