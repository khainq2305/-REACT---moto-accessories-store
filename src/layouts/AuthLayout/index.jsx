import { Outlet, useLocation } from "react-router-dom";
import Footer from '../Client/Footer';

const AuthLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname.includes("login");

  return (
    <>
      <header style={{
        background: "#fff",
        borderBottom: "1px solid #eee",
        padding: "20px 0"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          {/* Logo + Tiêu đề */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/Client/img/logo/shopee-logo.png" // 🔁 sửa lại theo tên ảnh thật của bạn
              alt="Shopee"
              style={{ height: "32px", marginRight: "8px" }}
            />
            <span style={{ fontSize: "24px", fontWeight: "500", color: "#ee4d2d" }}>
              Shopee
            </span>
            <span style={{ marginLeft: "12px", fontSize: "20px", color: "#222" }}>
              {isLoginPage ? "Đăng nhập" : "Đăng ký"}
            </span>
          </div>

          {/* Trợ giúp */}
          <div>
            <a href="#" style={{ color: "#ee4d2d", fontSize: "14px" }}>
              Bạn cần giúp đỡ?
            </a>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default AuthLayout;
