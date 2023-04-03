import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserLayout from "./components/layout/user";
import Homepage from "./pages/HomePage";
import DetailProduct from "./pages/DetailProduct";
import AdminLayout from "./components/layout/admin";
import Dashboard from "./pages/Dashboard";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="detail" element={<DetailProduct />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="add" element={<Add />}></Route>
          <Route path="edit" element={<Edit />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
