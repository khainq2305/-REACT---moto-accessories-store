import { Link } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleSearch = () => {
    setOpen(!open);
    document.body.classList.toggle('modal-open', !open);
  };
  return (
    <header className="header">
      <div className="grid wide">
        <nav className="header__navbar hide-on-mobile-tablet">
          <ul className="header__nav-list">
            <li className="header__nav-item header__nav-item--hover header__nav-item--separate">Kênh Người Bán</li>
            <li className="header__nav-item header__nav-item--hover header__nav-item--separate">Trở thành Người bán Shopee</li>
            <li className="header__nav-item header__nav-item--hover header__nav-item--separate header__show-qr">
              Tải ứng dụng
              <div className="header__qrcode">
                <img src="/Client/img/qr/qr-code.png" className="header__qr" alt="qr" />
                <div className="header__apps">
                  <a href="#" className="header__app-link"><img src="/Client/img/qr/app-store.png" className="header__app-img" alt="app-store" /></a>
                  <a href="#" className="header__app-link"><img src="/Client/img/qr/gg-play.png" className="header__app-img" alt="gg-play" /></a>
                  <a href="#" className="header__app-link"><img src="/Client/img/qr/app-gallery.png" className="header__app-img" alt="app-gallery" /></a>
                  <a href="#" className="header__app-link"><img src="/Client/img/qr/ltp-img.png" className="header__app-img" alt="ltp-img" /></a>
                </div>
              </div>
            </li>
            <li className="header__nav-item">
              Kết nối
              <a href="#" className="header__nav-icon-link"><i className="header__nav-icon fab fa-facebook"></i></a>
              <a href="#" className="header__nav-icon-link"><i className="header__nav-icon fab fa-instagram"></i></a>
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
            <li className="header__nav-item header__nav-item--bold header__nav-item--separate">
  <Link to="/register" className="header__nav-item-link">Đăng ký</Link>
</li>

            <li className="header__nav-item header__nav-item--bold">
            <Link to="/login" className="header__nav-item-link">Đăng nhập</Link>

            </li>
          </ul>
        </nav>

        <div className="header__contain" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="header__logo">
            <a href="#" className="header__logo-link">
              <img src="/Client/img/logo/logo-full-white.png" className="header__logo-img" alt="Logo" />
            </a>
          </div>

          <ul className="header__navbar-list" style={{ display: 'flex', gap: '20px', margin: 0 }}>
            <li className="header__navbar-item"><Link to="/" className="header__navbar-link">Trang chủ</Link></li>
            <li className="header__navbar-item"><Link to="/about" className="header__navbar-link">Giới thiệu</Link></li>
            <li className="header__navbar-item header__navbar-item--has-dropdown">
  <Link to="/product" className="header__navbar-link">Sản phẩm</Link>
  
    

  <div className="header__dropdown">
  <div className="header__dropdown-col">
      <h4>Thương Hiệu Thụy Sỹ</h4>
      <ul>
        <li>Rado <span className="tag">NEW</span></li>
        <li>Longines <span className="tag">🔥</span></li>
        <li>Tissot <span className="tag">🔥</span></li>
        <li>Jowissa <span className="tag tag--special">ĐỘC QUYỀN</span></li>
        <li>Silvana <span className="tag tag--special">ĐỘC QUYỀN</span></li>
        <li>Jacques Du Manoir</li>
        <li>Claude Bernad</li>
      </ul>
    </div>

    <div className="header__dropdown-col">
      <h4>Thương Hiệu Nhật Bản</h4>
      <ul>
        <li>Seiko <span className="tag">NEW</span></li>
        <li>Citizen</li>
        <li>Casio</li>
        <li>Orient</li>
      </ul>
    </div>

    <div className="header__dropdown-col">
      <h4>Thương Hiệu Thời Trang</h4>
      <ul>
        <li>Disney Watch <span className="tag">NEW</span></li>
        <li>Titan <span className="tag">NEW</span></li>
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
        <li>Avi-8 <span className="tag tag--special">ĐỘC QUYỀN</span></li>
        <li>Olivia Burton</li>
        <li>Kenneth Cole</li>
        <li>Just Cavalli</li>
        <li>Lancaster <span className="tag tag--special">ĐỘC QUYỀN</span></li>
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

            <li className="header__navbar-item"><Link to="/cua-hang" className="header__navbar-link">Cửa hàng</Link></li>
            <li className="header__navbar-item"><Link to="/contact" className="header__navbar-link">Liên hệ</Link></li>
            <li className="header__navbar-item"><Link to="/blog" className="header__navbar-link">Bài viết</Link></li>
          </ul>

          <div className="header__icon-group" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
  {/* 🔍 Search SVG */}
{/* Icon search trigger */}
<div className="header__svg-icon" onClick={toggleSearch} style={{ cursor: 'pointer' }}>
        <svg
          role="presentation"
          strokeWidth="2"
          stroke="white"
          fill="white"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <circle cx="11" cy="10" r="7" fill="none"></circle>
          <path d="m16 15 3 3" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </div>

      {/* Overlay search input */}
      <div className={`search-overlay ${open ? 'open' : ''}`}>
        <div className="row-search-overlay">
          <input type="text" placeholder="Tìm..." />
          <span className="overlay-close" onClick={toggleSearch}>✕</span>
        </div>
        <div className="search-results">
          <p>Giao diện tĩnh - không có kết quả</p>
        </div>
      </div>

      {/* Background overlay */}
      {open && <div className="overlay-search" onClick={toggleSearch}></div>}
  {/* 👤 Account SVG */}
  <Link to="/login" className="header__svg-icon">
    <svg role="presentation" strokeWidth="2" width="22" stroke="white" fill="white" height="22" viewBox="0 0 22 22">
      <circle cx="11" cy="7" r="4" fill="none" ></circle>
      <path d="M3.5 19c1.421-2.974 4.247-5 7.5-5s6.079 2.026 7.5 5" fill="none"  strokeLinecap="round"></path>
    </svg>
    </Link>

  {/* 🛒 Cart (giữ nguyên SVG cũ của bạn hoặc FontAwesome) */}
  <div className="header__cart header__cart--has-cart">
    <svg role="presentation" stroke="white" fill="white" strokeWidth="2" width="22" height="22" viewBox="0 0 22 22">
      <path
        d="M11 7H3.577A2 2 0 0 0 1.64 9.497l2.051 8A2 2 0 0 0 5.63 19H16.37a2 2 0 0 0 1.937-1.503l2.052-8A2 2 0 0 0 18.422 7H11Zm0 0V1"
        fill="none"
     
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
    <div className="header__cart-list has-cart">
  <h4 className="header__cart-heading">Sản phẩm đã chọn</h4>
  <ul className="header__cart-list-item">
    <li className="header__cart-item">
      <img src="/Client/img/buy/1.PNG" className="header__cart-item-img" alt="item1" />
      <div className="header__cart-item-info">
        <div className="header__cart-item-heading">
          <h3 className="header__cart-item-name">Thanh Thanh 2000 1m57 46kg 88-62-89</h3>
          <p className="header__cart-item-price">2.000.000đ</p>
        </div>
        <div className="header__cart-item-body">
          <p className="header__cart-item-number">x 2</p>
          <div className="header__cart-item-close">Xoá <i className="fas fa-times"></i></div>
        </div>
      </div>
    </li>
  </ul>
  <div className="header__cart-footer">
  <Link to="/cart" className="btn btn--primary header__cart-see-cart">Xem giỏ hàng</Link>

  </div>
</div>

    <div className="header__cart-count">4</div>
   
  </div>
</div>

        </div>
      </div>

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
