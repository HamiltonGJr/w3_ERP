import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
