import { Link } from 'react-router-dom';
import { useState,  useEffect } from 'react';

import SearchBox from './SearchBox';
import CartBox from './CartBox';


const Header = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser && storedUser !== "undefined") {
        setUser(JSON.parse(storedUser));
      } else {
        localStorage.removeItem("user"); // xoá nếu sai format
      }
    } catch (err) {
      console.error("❌ JSON parse lỗi:", err);
      localStorage.removeItem("user"); // clean up nếu lỗi JSON
    }
  }, []);
  
  const toggleSearch = () => {
    setOpen(!open);
    document.body.classList.toggle("modal-open", !open);
    setSearchResults([]);
    setSearchText("");
  };

  const handleSearch = async () => {
    if (searchText.trim() === "") return;

    try {
      const res = await searchProducts(searchText);
      setSearchResults(res);
    } catch (error) {
      console.error("Lỗi tìm kiếm:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleResultClick = (productId) => {
    navigate(`/product/${productId}`);
    toggleSearch();
  };
  return (
    <header className="header">
      <link rel="stylesheet" href="/Client/css/style.css" />

      <div className="grid wide">
        <nav className="header__navbar hide-on-mobile-tablet">
          <ul className="header__nav-list">
            <li className="header__nav-item header__nav-item--hover header__nav-item--separate">
              Kênh Người Bán
            </li>
            <li className="header__nav-item header__nav-item--hover header__nav-item--separate">
              Trở thành Người bán Shopee
            </li>
            <li className="header__nav-item header__nav-item--hover header__nav-item--separate header__show-qr">
              Tải ứng dụng
              <div className="header__qrcode">
                <img
                  src="/Client/img/qr/qr-code.png"
                  className="header__qr"
                  alt="qr"
                />
                <div className="header__apps">
                  <a href="#" className="header__app-link">
                    <img
                      src="/Client/img/qr/app-store.png"
                      className="header__app-img"
                      alt="app-store"
                    />
                  </a>
                  <a href="#" className="header__app-link">
                    <img
                      src="/Client/img/qr/gg-play.png"
                      className="header__app-img"
                      alt="gg-play"
                    />
                  </a>
                  <a href="#" className="header__app-link">
                    <img
                      src="/Client/img/qr/app-gallery.png"
                      className="header__app-img"
                      alt="app-gallery"
                    />
                  </a>
                  <a href="#" className="header__app-link">
                    <img
                      src="/Client/img/qr/ltp-img.png"
                      className="header__app-img"
                      alt="ltp-img"
                    />
                  </a>
                </div>
              </div>
            </li>
            <li className="header__nav-item">
              Kết nối
              <a href="#" className="header__nav-icon-link">
                <i className="header__nav-icon fab fa-facebook"></i>
              </a>
              <a href="#" className="header__nav-icon-link">
                <i className="header__nav-icon fab fa-instagram"></i>
              </a>
            </li>
          </ul>

          <ul className="header__nav-list">
            <li className="header__nav-item header__show-note">
              <a href="#" className="header__nav-item-link">
                <i className="header__nav-icon far fa-bell"></i>
                Thông báo
              </a>
              <div className="header__notifi">
                <header className="header__notifi-header">
                  <h3>Thông Báo Mới Nhận</h3>
                </header>
                <ul className="header__notifi-list">
                  <li className="header__notifi-item">
                    <a href="#" className="header__notifi-link">
                      <img
                        src="/Client/img/sp/casio.png"
                        className="header__notifi-img"
                        alt="casio"
                      />
                      <div className="header__notifi-info">
                        <div className="header__notifi-name">
                          Casio fx 580 VN Plus
                        </div>
                        <div className="header__notifi-desc">
                          Mua Casio 580 của LTP bao xịn, bao mượt, bao đẹp
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
                <footer className="header__notifi-footer">
                  <a href="#" className="header__notifi-footer-btn">
                    Xem tất cả
                  </a>
                </footer>
              </div>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-item-link">
                <i className="header__nav-icon far fa-question-circle"></i>
                Hỗ trợ
              </a>
            </li>
            {user ? (
  <li className="header__nav-item header__nav-user">
    <div className="header__nav-user-avatar">
      <div className="user-avatar-icon">
        {user.email?.charAt(0).toUpperCase()}
      </div>
      <span className="user-name">{user.email?.split('@')[0]}</span>
    </div>
    <ul className="header__nav-user-menu">
      <li><Link to="/account">Tài Khoản Của Tôi</Link></li>
      <li><Link to="/account/orders">Đơn Mua</Link></li>
      <li onClick={() => {
        localStorage.clear();
        window.location.href = '/';
      }}>Đăng Xuất</li>
    </ul>
  </li>
) : (
  <>
    <li className="header__nav-item header__nav-item--bold header__nav-item--separate">
      <Link to="/register" className="header__nav-item-link">Đăng ký</Link>
    </li>
    <li className="header__nav-item header__nav-item--bold">
      <Link to="/login" className="header__nav-item-link">Đăng nhập</Link>
    </li>
  </>
)}

          </ul>
        </nav>

        <div
          className="header__contain"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="header__logo">
            <a href="#" className="header__logo-link">
              <img
                src="/Client/img/logo/logo-full-white.png"
                className="header__logo-img"
                alt="Logo"
              />
            </a>
          </div>

          <ul
            className="header__navbar-list"
            style={{ display: "flex", gap: "20px", margin: 0 }}
          >
            <li className="header__navbar-item">
              <Link to="/" className="header__navbar-link">
                Trang chủ
              </Link>
            </li>
            <li className="header__navbar-item">
              <Link to="/about" className="header__navbar-link">
                Giới thiệu
              </Link>
            </li>
            <li className="header__navbar-item header__navbar-item--has-dropdown">
              <Link to="/product" className="header__navbar-link">
                Sản phẩm
              </Link>

              <div className="header__dropdown">
                <div className="header__dropdown-col">
                  <h4>Thương Hiệu Thụy Sỹ</h4>
                  <ul>
                    <li>
                      Rado <span className="tag">NEW</span>
                    </li>
                    <li>
                      Longines <span className="tag">🔥</span>
                    </li>
                    <li>
                      Tissot <span className="tag">🔥</span>
                    </li>
                    <li>
                      Jowissa{" "}
                      <span className="tag tag--special">ĐỘC QUYỀN</span>
                    </li>
                    <li>
                      Silvana{" "}
                      <span className="tag tag--special">ĐỘC QUYỀN</span>
                    </li>
                    <li>Jacques Du Manoir</li>
                    <li>Claude Bernad</li>
                  </ul>
                </div>

                <div className="header__dropdown-col">
                  <h4>Thương Hiệu Nhật Bản</h4>
                  <ul>
                    <li>
                      Seiko <span className="tag">NEW</span>
                    </li>
                    <li>Citizen</li>
                    <li>Casio</li>
                    <li>Orient</li>
                  </ul>
                </div>

                <div className="header__dropdown-col">
                  <h4>Thương Hiệu Thời Trang</h4>
                  <ul>
                    <li>
                      Disney Watch <span className="tag">NEW</span>
                    </li>
                    <li>
                      Titan <span className="tag">NEW</span>
                    </li>
                    <li>Daniel Wellington</li>
                    <li>Calvin Klein</li>
                    <li>Michael Kors</li>
                    <li>Fossil</li>
                    <li>Skagen</li>
                  </ul>
                </div>

                <div className="header__dropdown-col">
                  <h4>Thương hiệu thời trang</h4>
                  <ul>
                    <li>Daniel Wellington</li>
                    <li>Calvin Klein</li>
                    <li>Michael Kors</li>
                    <li>Fossil</li>
                    <li>Skagen</li>
                  </ul>
                </div>

                <div className="header__dropdown-col">
                  <h4>Thương Hiệu Khác</h4>
                  <ul>
                    <li>
                      Avi-8 <span className="tag tag--special">ĐỘC QUYỀN</span>
                    </li>
                    <li>Olivia Burton</li>
                    <li>Kenneth Cole</li>
                    <li>Just Cavalli</li>
                    <li>
                      Lancaster{" "}
                      <span className="tag tag--special">ĐỘC QUYỀN</span>
                    </li>
                  </ul>
                </div>

                <div className="header__dropdown-col">
                  <h4>Giới Tính</h4>
                  <ul>
                    <li>Nam</li>
                    <li>Nữ</li>
                    <li>Unisex</li>
                  </ul>
                </div>

                <div className="header__dropdown-col">
                  <h4>Chủng Loại</h4>
                  <ul>
                    <li>Hàng đặt trước</li>
                    <li>Đồng Hồ</li>
                    <li>Đồng Hồ Cặp</li>
                  </ul>
                </div>

                <div className="header__dropdown-col">
                  <h4>Bộ Máy</h4>
                  <ul>
                    <li>Quartz (Pin)</li>
                    <li>Automatic (cơ tự động)</li>
                    <li>Eco-drive</li>
                    <li>Powermatic 80</li>
                    <li>Solar (Pin mặt trời)</li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="header__navbar-item">
              <Link to="/cua-hang" className="header__navbar-link">
                Cửa hàng
              </Link>
            </li>
            <li className="header__navbar-item">
              <Link to="/contact" className="header__navbar-link">
                Liên hệ
              </Link>
            </li>
            <li className="header__navbar-item">
              <Link to="/blog" className="header__navbar-link">
                Bài viết
              </Link>
            </li>
          </ul>

          <div className="header__icon-group" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
  {/* 🔍 Search SVG */}
  <SearchBox open={open} toggleSearch={toggleSearch} />
  {/* 👤 Account SVG */}
  <Link to="/login" className="header__svg-icon">
    <svg role="presentation" strokeWidth="2" width="22" stroke="white" fill="white" height="22" viewBox="0 0 22 22">
      <circle cx="11" cy="7" r="4" fill="none" ></circle>
      <path d="M3.5 19c1.421-2.974 4.247-5 7.5-5s6.079 2.026 7.5 5" fill="none"  strokeLinecap="round"></path>
    </svg>
    </Link>

    <CartBox />
</div>

              <div className="header__cart-count">4</div>
            </div>
          </div>
        </div>
      </div>

      <ul className="header__sort-bar">
        <li className="header__sort-item">
          <a href="#" className="header__sort-link">
            Liên quan
          </a>
        </li>
        <li className="header__sort-item header__sort-item--active">
          <a href="#" className="header__sort-link">
            Mới nhất
          </a>
        </li>
        <li className="header__sort-item">
          <a href="#" className="header__sort-link">
            Bán chạy
          </a>
        </li>
        <li className="header__sort-item">
          <a href="#" className="header__sort-link">
            Giá
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
