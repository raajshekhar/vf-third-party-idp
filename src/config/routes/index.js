import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginWrapper from "../../container/LoginWrapper"
import ProductList from "../../container/ProductList"

const RouteConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginWrapper />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="*" element={<LoginWrapper />} />
      </Routes>
    )
};

export default RouteConfig;