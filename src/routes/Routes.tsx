import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Prediction from "../pages/Prediction";
import Product from "../pages/Product";
import DetailProduct from "../pages/DetailProduct";
import DetailClient from "../pages/DetailClient";
import DetailPrediction from "../pages/DetailPrediction";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<DetailProduct />} />
          <Route path="/customers/:id" element={<DetailClient />} />
          <Route path="/prediction/:id" element={<DetailPrediction />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
