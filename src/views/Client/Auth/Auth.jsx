import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { authService } from "../../../services/authService";
import "../../../assets/Client/css/Auth/Login.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // ✅ Login/Register thường
  const onSubmit = async (data) => {
    try {
      if (isLogin) {
        const res = await authService.loginUser(data);
        toast.success(res.data.message || "Đăng nhập thành công!");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        window.location.href = "/";
      } else {
        const res = await authService.registerUser(data);
        toast.success(res.data.message || "Đăng ký thành công!");
        reset();
        setIsLogin(true);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Có lỗi xảy ra!");
    }
  };

  // ✅ Đăng nhập Google
  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const credential = credentialResponse.credential;
      const decoded = jwtDecode(credential);

      const res = await authService.googleLogin(credential);
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Đăng nhập Google thành công!");
      navigate("/");
    } catch (error) {
      console.error("Lỗi đăng nhập Google:", error);
      toast.error("Đăng nhập Google thất bại!");
    }
  };

  return (
    <div className="login-page">
      <div className="container-css">
        <div className="login-bg">
          <div className="login-brand">
            <Link to="/" style={{ display: "inline-block" }}>
              <img
                src="/Client/img/logo/ChatGPT Image 22_07_56 16 thg 4, 2025.png"
                alt="Shopee"
              />
            </Link>
            <p>
              Nền tảng thương mại điện tử
              <br />
              yêu thích ở Đông Nam Á & Đài Loan
            </p>
          </div>
        </div>

        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form-box">
            <h2>{isLogin ? "Đăng nhập" : "Đăng ký"}</h2>

            <div className="form-group">
              <input
                type="text"
                placeholder="Email"
                className={errors.email ? "error" : ""}
                {...register("email", {
                  required: "Vui lòng nhập email.",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Email không hợp lệ.",
                  },
                })}
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Mật khẩu"
                className={errors.password ? "error" : ""}
                {...register("password", {
                  required: "Vui lòng nhập mật khẩu.",
                  ...(isLogin
                    ? {}
                    : {
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,}$/,
                          message:
                            "Mật khẩu phải có ít nhất 6 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt.",
                        },
                      }),
                })}
              />
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
            </div>

            {!isLogin && (
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  className={errors.confirm ? "error" : ""}
                  {...register("confirm", {
                    required: "Vui lòng xác nhận mật khẩu.",
                    validate: (value) =>
                      value === watch("password") ||
                      "Mật khẩu xác nhận không khớp.",
                  })}
                />
                {errors.confirm && (
                  <p className="text-danger">{errors.confirm.message}</p>
                )}
              </div>
            )}

            <button type="submit">{isLogin ? "ĐĂNG NHẬP" : "ĐĂNG KÝ"}</button>

            {isLogin && (
              <div className="login-links">
                <a href="#">Quên mật khẩu</a>
                <a href="#">Đăng nhập với SMS</a>
              </div>
            )}

            <div className="login-or">HOẶC</div>

            <div
              className="gg"
              style={{ padding: 0, width: "100%", minHeight: "40px" }}
            >
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() => toast.error("Google Login thất bại")}
                theme="outline"
                size="large"
                width="100%"
              />
            </div>

            <p className="login-register">
              {isLogin ? (
                <>
                  Bạn mới biết đến Shopee?{" "}
                  <span
                    onClick={() => {
                      setIsLogin(false);
                      reset();
                    }}
                    style={{
                      background:
                        "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Đăng ký
                  </span>
                </>
              ) : (
                <>
                  Bạn đã có tài khoản?{" "}
                  <span
                    onClick={() => {
                      setIsLogin(true);
                      reset();
                    }}
                    style={{
                      background:
                        "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Đăng nhập
                  </span>
                </>
              )}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
