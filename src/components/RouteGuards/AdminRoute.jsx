import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // ❌ Nếu không có token hoặc user -> chuyển hướng
  if (!token || !user) {
    return <Navigate to="/auth" replace state={{ from: location }} />;
  }

  // ✅ Chỉ kiểm tra role là admin
  if (user.role !== 1) {
    return <Navigate to="/" replace />;
  }

  // ✅ Nếu pass => render component con
  return children;
};

export default AdminRoute;
