import "./styles.css";
//@ts-ignore
import Home from "./Home";
//@ts-ignore
import Layout from "./Layout";
//@ts-ignore
import Trang1 from "./Trang1";
// @ts-ignore
import Trang2 from "./Trang2";
// @ts-ignore
import ListProduct from "./ListProduct.js";

// @ts-ignore
import ListProducts_SP from "./ListProducts_SP.js";

//@ts-ignore
import Chitietsanpham from "./Chitietsanpham";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  // return <Home />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListProducts_SP />} />
          <Route path="trang1" element={<Trang1 />} />
          <Route path="trang2" element={<Trang2 />} />
          <Route path="sanpham/:id" element={<Chitietsanpham />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
