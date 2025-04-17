import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { isTokenExpired } from "./tokenUtils";
import { toast } from "react-toastify";

const AdminRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!token || !user) {
      setIsAuthenticated(false);
      navigate("/auth", { replace: true });

      return;
    }

    if (isTokenExpired(token)) {
      toast.error("Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại!");
      localStorage.clear();
      setIsAuthenticated(false);
      navigate("/auth", { replace: true });

      return;
    }

    if (user.role !== 1) {
      navigate("/", { replace: true });
      return;
    }

    // check lại mỗi lần chuyển trang
  }, [location.pathname]);

  return isAuthenticated ? children : null;
};

export default AdminRoute;
