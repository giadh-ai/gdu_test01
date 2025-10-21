import { products } from "./models/product";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useState và useEffect từ thư viện React để quản lý trạng thái và xử lý hiệu ứng.
import axios from "axios"; // Import axios để thực hiện các yêu cầu HTTP tới API.

const ListProduct = () => {
  const [listproduct, SetListProduct] = useState([]); // Khai báo state listproduct với giá trị mặc định là một mảng rỗng để lưu trữ danh sách sản phẩm.

  useEffect(() => {
    const LayDulieutuBackend = async () => {
      // Khởi tạo hàm bất đồng bộ để lấy dữ liệu từ backend.
      try {
        const res = await axios.get(
          "https://6731c05f7aaf2a9aff11dd05.mockapi.io/products"
        ); // Gửi yêu cầu GET tới API để lấy danh sách sản phẩm.
        SetListProduct(res.data); // Cập nhật state listproduct với dữ liệu nhận được từ API.
      } catch (err) {
        console.log(err.message); // Nếu xảy ra lỗi, log thông báo lỗi ra console.
      }
    };
    LayDulieutuBackend(); // Gọi hàm để lấy dữ liệu từ backend khi component được render lần đầu.
  }, []); // Tham số thứ hai là mảng rỗng, giúp useEffect chỉ chạy một lần khi component được gắn vào DOM.

  const navigate = useNavigate();
  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sản phẩm</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/sanpham/${p.id}`)}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{ height: "180px", objectFit: "contain" }}
            />
            <h4>{p.title}</h4>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListProduct;
