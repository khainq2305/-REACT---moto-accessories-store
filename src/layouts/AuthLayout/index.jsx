import { Outlet, useLocation, Link } from "react-router-dom";

import Footer from "../Client/Footer";

const AuthLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname.includes("login");

  return (
    <>
      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #eee",
          padding: "20px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            height: "45px",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo + Tiêu đề */}
          <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ display: "inline-block" }}>
          <img
              src="/Client/img/logo/ChatGPT Image 12_46_26 17 thg 4, 2025.png"
              alt="Shopee"
              style={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
                marginRight: "8px",
              }}
            />
          </Link>

          
          </div>

          {/* Trợ giúp */}
          <div>
            <a
              href="#"
              style={{
                background:
                  "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
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
