import { NavLink } from "react-router-dom";
import "../../../assets/Client/css/Profile/sidebar.css"; // ✅ đúng chính tả


export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        
      <li><NavLink to="info" className={({ isActive }) => isActive ? "active" : ""}>Tài Khoản Của Tôi</NavLink></li>
<li><NavLink to="orders" className={({ isActive }) => isActive ? "active" : ""}>Đơn Mua</NavLink></li>
<li><NavLink to="address" className={({ isActive }) => isActive ? "active" : ""}>Địa Chỉ</NavLink></li>

      </ul>
    </div>
  );
}
