import { useForm } from "react-hook-form";
import { authService } from "../../../services/authService";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await authService.registerUser(data);
      toast.success(res.data.message || "Đăng ký thành công!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || "Lỗi đăng ký!");
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
            <h2>Đăng ký</h2>

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
              {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Mật khẩu"
                className={errors.password ? "error" : ""}
                {...register("password", {
                  required: "Vui lòng nhập mật khẩu.",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,}$/,
                    message: "Mật khẩu phải có ít nhất 6 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt.",
                  },
                })}
              />
              {errors.password && <p className="text-danger">{errors.password.message}</p>}
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Nhập lại mật khẩu"
                className={errors.confirm ? "error" : ""}
                {...register("confirm", {
                  required: "Vui lòng xác nhận mật khẩu.",
                  validate: value =>
                    value === watch("password") || "Mật khẩu xác nhận không khớp.",
                })}
              />
              {errors.confirm && <p className="text-danger">{errors.confirm.message}</p>}
            </div>

            <button type="submit">ĐĂNG KÝ</button>

           
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
              Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
