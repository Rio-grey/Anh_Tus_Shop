import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserLayout from "./components/layout/user";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<h1>Home Page</h1>}></Route>
          <Route path="chi-tiet" element={<h1>Product detail</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
