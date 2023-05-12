import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserLayout from "./components/layout/user/user";
import Homepage from "./pages/user/HomePage";
import DetailProduct from "./pages/user/DetailProduct";
import AdminLayout from "./components/layout/admin/admin";
import ListProduct from "./pages/admin/ListProduct";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Cart from "./pages/user/Cart";
import EditCategory from "./pages/admin/EditCategory";
import ListCategory from "./pages/admin/ListCategory";
import AddCategory from "./pages/admin/AddCategory";
import ListUsers from "./pages/admin/ListUser";
import EditUser from "./pages/admin/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="product/:id" element={<DetailProduct />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<ListProduct />}></Route>
          <Route path="addProduct" element={<AddProduct />}></Route>
          <Route path="products/:id" element={<EditProduct />}></Route>
          <Route path="categories" element={<ListCategory />}></Route>
          <Route path="addCategory" element={<AddCategory />}></Route>
          <Route path="categories/:id" element={<EditCategory />}></Route>
          <Route path="users" element={<ListUsers />}></Route>
          <Route path="users/:id" element={<EditUser />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
