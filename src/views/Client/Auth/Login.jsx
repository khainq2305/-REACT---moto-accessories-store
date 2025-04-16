import { useForm } from "react-hook-form";
import { authService } from "../../../services/authService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await authService.loginUser(data);
      toast.success(res.data.message || "Đăng nhập thành công!");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user)); // ✅ Thêm dòng này
      window.location.href = "/";
    } catch (error) {
      toast.error(error.response?.data?.message || "Lỗi đăng nhập!");
    }
  };
  

  return (
    <div className="login-page">
      <div className="container-css">
        <div className="login-bg">
          <div className="login-brand">
            <img src="/Client/img/logo/logo-full-white.png" alt="Shopee" />
            <p>
              Nền tảng thương mại điện tử
              <br />
              yêu thích ở Đông Nam Á & Đài Loan
            </p>
          </div>
        </div>

        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form-box">
            <div className="login-header">
              <h2>Đăng nhập</h2>
              <div className="login-qr">
                <span>Đăng nhập với mã QR</span>
                <img src="/Client/img/icon/qr.png" alt="QR" />
              </div>
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Email"
                className={errors.email ? "error" : ""}
                {...register("email", { required: "Email không được bỏ trống" })}
              />
              {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Mật khẩu"
                className={errors.password ? "error" : ""}
                {...register("password", { required: "Mật khẩu không được bỏ trống" })}
              />
              {errors.password && <p className="text-danger">{errors.password.message}</p>}
            </div>

            <button type="submit">ĐĂNG NHẬP</button>

            <div className="login-links">
              <a href="#">Quên mật khẩu</a>
              <a href="#">Đăng nhập với SMS</a>
            </div>

            <div className="login-or">HOẶC</div>

            <div className="login-social">
              <button className="fb">
                <img src="/Client/img/icon/facebook.png" alt="fb" />
                Facebook
              </button>
              <button className="gg">
                <img src="/Client/img/icon/google.png" alt="gg" />
                Google
              </button>
            </div>

            <p className="login-register">
              Bạn mới biết đến Shopee? <Link to="/register">Đăng ký</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
