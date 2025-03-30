// src/components/Footer/index.jsx
// import  from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      {/* main footer */}
      <div className="main-footer">
        <div className="grid wide">
          <div className="row sm-gutter main-footer-info">
            {/* Customer Care */}
            <div className="col l-2 m-4 c-6">
              <h3 className="footer__heading">CHĂM SÓC KHÁCH HÀNG</h3>
              <ul className="footer-list">
                <li>
                  <a href="#" className="footer-item-link">Trung Tâm Trợ Giúp</a>
                </li>
                <li>
                  <a href="#" className="footer-item-link">Shopee Blog</a>
                </li>
                <li>
                  <a href="#" className="footer-item-link">Shopee Mall</a>
                </li>
                <li>
                  <a href="#" className="footer-item-link">Hướng Dẫn Mua Hàng</a>
                </li>
                <li>
                  <a href="#" className="footer-item-link">Hướng Dẫn Bán Hàng</a>
                </li>
                <li>
                  <a href="#" className="footer-item-link">Thanh Toán</a>
                </li>
                <li>
                  <a href="#" className="footer-item-link">Shopee Xu</a>
                </li>
                <li>
                  <a href="#" className="footer-item-link">Vận Chuyển</a>
                </li>
                <li>
                  <a href="#" className="footer-item-link">Trả Hàng & Hoàn Tiền</a>
                </li>
                <li>
                  <a href="#" className="footer-item-link">Chăm Sóc Khách Hàng</a>
                </li>
                <li>
                  <a href="#" className="footer-item-link">Chính Sách Bảo Hành</a>
                </li>
              </ul>
            </div>
            
            {/* About Shopee */}
            <div className="col l-2 m-4 c-6">
              <h3 className="footer__heading">VỀ SHOPEE</h3>
              <ul className="footer-list">
                <li>
                  <a href="#" className="footer-item-link">Giới Thiệu Về Shopee Việt Nam</a>
                </li>
                <li>
                  <a href="#" className="footer-item-link">Tuyển Dụng</a>
                </li>
                <li>
                  <a href="#" className="footer-item-link">Điều Khoản Shopee</a>
                </li>
                <li>
                  <a href="#" className="footer-item-link">Chính Sách Bảo Mật</a>
                </li>
                <li>
                  <a href="#" className="footer-item-link">Chính Hãng</a>
                </li>
                <li>
                  <a href="#" className="footer-item-link">Kênh Người Bán</a>
                </li>
                <li>
                  <a href="#" className="footer-item-link">Flash Sales</a>
                </li>
                <li>
                  <a href="#" className="footer-item-link">Chương Trình Tiếp Thị Liên Kết Shopee</a>
                </li>
                <li>
                  <a href="#" className="footer-item-link">Liên Hệ Với Truyền Thông</a>
                </li>
              </ul>
            </div>
            
            {/* Payment and Shipping */}
            <div className="col l-2 m-4 c-6 pay-and-ship">

              <div>
                <h3 className="footer__heading">THANH TOÁN</h3>
                <div className="footer-sale-ship">
                  <img src="/Client/img/pay/1.PNG" className="footer-item-sale-ship" alt="Payment Option 1" />
                  <img src="/Client/img/pay/2.PNG" className="footer-item-sale-ship" alt="Payment Option 2" />
                  <img src="/Client/img/pay/3.PNG" className="footer-item-sale-ship" alt="Payment Option 3" />
                  <img src="/Client/img/pay/4.PNG" className="footer-item-sale-ship" alt="Payment Option 4" />
                  <img src="/Client/img/pay/5.PNG" className="footer-item-sale-ship" alt="Payment Option 5" />
                </div>
              </div>
              <div>
                <h3 className="footer__heading">ĐƠN VỊ VẬN CHUYỂN</h3>
                <div className="footer-sale-ship">
                  <img src="/Client/img/ship/1.PNG" className="footer-item-sale-ship" alt="Shipping Option 1" />
                  <img src="/Client/img/ship/2.PNG" className="footer-item-sale-ship" alt="Shipping Option 2" />
                  <img src="/Client/img/ship/3.PNG" className="footer-item-sale-ship" alt="Shipping Option 3" />
                  <img src="/Client/img/ship/4.PNG" className="footer-item-sale-ship" alt="Shipping Option 4" />
                  <img src="/Client/img/ship/5.PNG" className="footer-item-sale-ship" alt="Shipping Option 5" />
                  <img src="/Client/img/ship/6.PNG" className="footer-item-sale-ship" alt="Shipping Option 6" />
                  <img src="/Client/img/ship/7.PNG" className="footer-item-sale-ship" alt="Shipping Option 7" />
                  <img src="/Client/img/ship/8.PNG" className="footer-item-sale-ship" alt="Shipping Option 8" />
                  <img src="/Client/img/ship/9.PNG" className="footer-item-sale-ship" alt="Shipping Option 9" />
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="col l-2 m-4 c-6">
              <h3 className="footer__heading">THEO DÕI CHÚNG TÔI</h3>
              <ul className="footer-list">
                <li>
                  <a href="#" className="footer-item-link footer-item-link-fb">
                    <i className="footer-item-icon fab fa-facebook-square"></i>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-item-link footer-item-link-is">
                    <i className="footer-item-icon fab fa-instagram-square"></i>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-item-link footer-item-link-li">
                    <i className="footer-item-icon fab fa-linkedin"></i>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Download App */}
            <div className="col l-2 m-4 c-6">
              <h3 className="footer__heading">TẢI ỨNG DỤNG SHOPEE</h3>
              <div className="footer-download">
                <a href="#" className="footer-download-link">
                  <img src="/Client/img/qr/qr-code.png" className="footer-download-qr" alt="QR Code" />
                </a>
                <div className="footer-download-app">
                  <a href="#" className="footer-download-link">
                    <img src="/Client/img/qr/gg-play.png" className="footer-download-app-img" alt="Google Play" />
                  </a>
                  <a href="#" className="footer-download-link">
                    <img src="/Client/img/qr/app-store.png" className="footer-download-app-img" alt="App Store" />
                  </a>
                  <a href="#" className="footer-download-link">
                    <img src="/Client/img/qr/app-gallery.png" className="footer-download-app-img" alt="App Gallery" />
                  </a>
                  <a href="#" className="footer-download-link">
                    <img src="/Client/img/qr/ltp-img.png" className="footer-download-app-img" alt="Other App" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* copyright */}
          <div className="row">
            <div className="grid">
              <p className="copyright-title">
                © 2021 Shopee copyright - Công ty TNHH CRF - Product by LTP
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* other footer */}
      <div className="other-footer">
        <div className="grid wide">
          <div className="row other-footer-heading">
            <div className="col l-2">
              <a href="#" className="other-footer-link">
                CHÍNH SÁCH BẢO MẬT
              </a>
            </div>
            <div className="col l-2">
              <a href="#" className="other-footer-link">
                QUY CHẾ HOẠT ĐỘNG
              </a>
            </div>
            <div className="col l-2">
              <a href="#" className="other-footer-link">
                CHÍNH SÁCH VẬN CHUYỂN
              </a>
            </div>
            <div className="col l-2">
              <a href="#" className="other-footer-link">
                TRẢ HÀNG VÀ HOÀN TIỀN
              </a>
            </div>
          </div>
          <div className="row">
            <div className="grid other-footer-info">
              <p className="other-footer-title">Thông tin về Shoppee</p>
              <p className="other-footer-more">
                Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
                Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam.
                Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
              </p>
              <p className="other-footer-more">
                Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)
              </p>
              <p className="other-footer-more">
                Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư
                TP Hà Nội cấp lần đầu ngày 10/02/2015
              </p>
              <p className="other-footer-more">
                Ngày sản xuất 2015 - Bản quyền gốc thuộc về Công ty TNHH Shopee
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
