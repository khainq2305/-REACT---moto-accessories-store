// src/pages/Auth/Login.jsx
import { Link } from "react-router";

const Login = () => {
  


  return (
    <div className="login-page">
      <div className="container-css">
        <div className="login-bg">
          <div className="login-brand">
            <img src="http://localhost:5173/Client/img/logo/logo-full-white.png" alt="Shopee" />
            <p>
              Nền tảng thương mại điện tử<br />
              yêu thích ở Đông Nam Á & Đài Loan
            </p>
          </div>
        </div>

        <div className="login-form">
        <div className="login-form-box">
          <h2>Đăng nhập</h2>
          <input type="text" placeholder="(+84) 382 742 511" />
          <input type="password" placeholder="Mật khẩu" />
          <button>ĐĂNG NHẬP</button>
          <div className="login-links">
            <a href="#">Quên mật khẩu</a> <span>•</span> <a href="#">Đăng nhập với SMS</a>
          </div>
          <div className="login-or">HOẶC</div>
          <div className="login-social">
            <button className="fb">Facebook</button>
            <button className="gg">Google</button>
          </div>
          <p className="login-register">
            Bạn mới biết đến Shopee? <Link to="/register">Đăng ký</Link>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
