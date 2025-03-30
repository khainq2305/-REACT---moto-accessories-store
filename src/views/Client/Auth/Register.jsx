// src/pages/Auth/Register.jsx
import { Link } from "react-router";
const Register = () => {
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
              <h2>Đăng ký</h2>
             
      
              <input type="text" placeholder="Số điện thoại" />
              <input type="password" placeholder="Mật khẩu" />
              <input type="password" placeholder="Nhập lại mật khẩu" />
              <button>ĐĂNG KÝ</button>
              <div className="login-links">
                <a href="#">Đăng nhập bằng SMS</a>
              </div>
              <div className="login-or">HOẶC</div>
              <div className="login-social">
                <button className="fb">Facebook</button>
                <button className="gg">Google</button>
              </div>
              <p className="login-register">
                Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Register;
  