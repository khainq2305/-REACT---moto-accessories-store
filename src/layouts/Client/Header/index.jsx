import { Link } from 'react-router-dom';
import { useState } from 'react';

import SearchBox from './SearchBox';
import CartBox from './CartBox';
import AccountMenu from './AccountMenu';
import ProductDropdown from './ProductDropdown';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleSearch = () => {
    setOpen(!open);
    document.body.classList.toggle('modal-open', !open);
  };

  return (
    <header className="header">
      <div className="grid wide">
        {/* NAVBAR TRÊN */}
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
                <img src="/Client/img/qr/qr-code.png" className="header__qr" alt="qr" />
                <div className="header__apps">
                  <a href="#" className="header__app-link">
                    <img src="/Client/img/qr/app-store.png" className="header__app-img" alt="app-store" />
                  </a>
                  <a href="#" className="header__app-link">
                    <img src="/Client/img/qr/gg-play.png" className="header__app-img" alt="gg-play" />
                  </a>
                  <a href="#" className="header__app-link">
                    <img src="/Client/img/qr/app-gallery.png" className="header__app-img" alt="app-gallery" />
                  </a>
                  <a href="#" className="header__app-link">
                    <img src="/Client/img/qr/ltp-img.png" className="header__app-img" alt="ltp-img" />
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
                      <img src="/Client/img/sp/casio.png" className="header__notifi-img" alt="casio" />
                      <div className="header__notifi-info">
                        <div className="header__notifi-name">Casio fx 580 VN Plus</div>
                        <div className="header__notifi-desc">Mua Casio 580 của LTP bao xịn, bao mượt, bao đẹp</div>
                      </div>
                    </a>
                  </li>
                </ul>
                <footer className="header__notifi-footer">
                  <a href="#" className="header__notifi-footer-btn">Xem tất cả</a>
                </footer>
              </div>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-item-link">
                <i className="header__nav-icon far fa-question-circle"></i>
                Hỗ trợ
              </a>
            </li>

            
          </ul>
        </nav>

        {/* LOGO + MENU CHÍNH */}
        <div className="header__contain" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="header__logo">
            <Link to="/" className="header__logo-link">
              <img src="/Client/img/logo/logo-full-white.png" className="header__logo-img" alt="Logo" />
            </Link>
          </div>

          <ul className="header__navbar-list" style={{ display: 'flex', gap: '20px', margin: 0 }}>
            <li className="header__navbar-item">
              <Link to="/" className="header__navbar-link">Trang chủ</Link>
            </li>
            <li className="header__navbar-item">
              <Link to="/about" className="header__navbar-link">Giới thiệu</Link>
            </li>
            <li className="header__navbar-item header__navbar-item--has-dropdown">
              <Link to="/product" className="header__navbar-link">Sản phẩm</Link>
              {/* ✅ DROPDOWN SẢN PHẨM */}
              <ProductDropdown />
            </li>
            <li className="header__navbar-item">
              <Link to="/cua-hang" className="header__navbar-link">Cửa hàng</Link>
            </li>
            <li className="header__navbar-item">
              <Link to="/contact" className="header__navbar-link">Liên hệ</Link>
            </li>
            <li className="header__navbar-item">
              <Link to="/blog" className="header__navbar-link">Bài viết</Link>
            </li>
          </ul>

          {/* ICON: Search + Tài khoản + Giỏ hàng */}
          <div className="header__icon-group" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
             {/* 👤 Account SVG */}
           {/* ✅ TÀI KHOẢN */}
           <AccountMenu />

            <SearchBox open={open} toggleSearch={toggleSearch} />
            
            <CartBox />
          </div>
        </div>
      </div>

      {/* THANH SẮP XẾP */}
      <ul className="header__sort-bar">
        <li className="header__sort-item"><a href="#" className="header__sort-link">Liên quan</a></li>
        <li className="header__sort-item header__sort-item--active"><a href="#" className="header__sort-link">Mới nhất</a></li>
        <li className="header__sort-item"><a href="#" className="header__sort-link">Bán chạy</a></li>
        <li className="header__sort-item"><a href="#" className="header__sort-link">Giá</a></li>
      </ul>
    </header>
  );
};

export default Header;
