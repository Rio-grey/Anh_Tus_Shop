import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserLayout from "./components/layout/user";
import Homepage from "./pages/HomePage";
import DetailProduct from "./pages/DetailProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="detail" element={<DetailProduct />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
