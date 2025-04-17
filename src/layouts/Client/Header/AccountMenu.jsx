import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AccountMenu = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser && storedUser !== "undefined") {
        setUser(JSON.parse(storedUser));
      } else {
        localStorage.removeItem("user");
      }
    } catch (err) {
      console.error("❌ JSON parse lỗi:", err);
      localStorage.removeItem("user");
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return user ? (
    <li className="header__nav-item header__nav-user">
      <div className="header__nav-user-avatar">
        <div className="user-avatar-icon">
          {user.email?.charAt(0).toUpperCase()}
        </div>
      </div>
      <ul className="header__nav-user-menu">
        <li><Link to="/account">Tài Khoản Của Tôi</Link></li>
        <li><Link to="/account/orders">Đơn Mua</Link></li>
        <li onClick={handleLogout}>Đăng Xuất</li>
      </ul>
    </li>
  ) : (
    <li className="header__nav-item">
      <Link to="/auth" className="header__svg-icon" style={{marginRight: '-10px'}}>
        <svg
          role="presentation"
          strokeWidth="2"
          width="22"
          stroke="white"
          fill="white"
          height="22"
          viewBox="0 0 22 22"
        >
          <circle cx="11" cy="7" r="4" fill="none"></circle>
          <path
            d="M3.5 19c1.421-2.974 4.247-5 7.5-5s6.079 2.026 7.5 5"
            fill="none"
            strokeLinecap="round"
          ></path>
        </svg>
      </Link>
    </li>
  );
};

export default AccountMenu;
