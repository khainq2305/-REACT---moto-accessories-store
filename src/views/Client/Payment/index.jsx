

const CheckoutPage = () => {
  return (
    <div className="main-container">
      <div className="checkout-container">
        {/* Left Side - Form */}
        <form className="checkout-form">
          <div className="section">
            <h1>Thông tin liên hệ</h1>
          </div>

          <div className="section">
            <h2>Giao hàng</h2>
            <div className="radio-group">
              <select name="selected_address">
                <option>123 Đường A, Phường B, Quận C, Tỉnh D</option>
              </select>
            </div>

            <div className="location-fields">
              <div className="select-wrapper">
                <select className="input-field">
                  <option>Chọn tỉnh/thành</option>
                </select>
              </div>
              <div className="select-wrapper">
                <select className="input-field">
                  <option>Chọn quận/huyện</option>
                </select>
              </div>
              <div className="select-wrapper">
                <select className="input-field">
                  <option>Chọn phường/xã</option>
                </select>
              </div>
            </div>

            <input
              className="input-field detailed-address"
              placeholder="Địa chỉ chi tiết"
            />
            <div className="name-fields">
              <input className="input-field" placeholder="Tên người nhận" />
              <input className="input-field" placeholder="Điện thoại" />
            </div>
          </div>

          <div className="section">
            <h2>Phương thức vận chuyển</h2>
            <div className="radio-group">
              <label>
                <input type="radio" name="delivery-method" defaultChecked />
                Miễn phí Cần Thơ (trong ngày)
                <span className="price-label">MIỄN PHÍ</span>
              </label>
              <label>
                <input type="radio" name="delivery-method" />
                Ship nhanh toàn quốc (2-3 ngày)
                <span className="price-label">33.000 đ</span>
              </label>
            </div>
          </div>

          <div className="section">
            <h2>Thanh toán</h2>
            <div className="payment-option">
              <label>
                <input type="radio" name="payment-method" defaultChecked />
                Thanh toán khi nhận hàng (COD)
              </label>
            </div>
            <div className="payment-option">
              <label>
                <input type="radio" name="payment-method" />
                Chuyển khoản
              </label>
            </div>
            <div className="payment-option">
              <label>
                <input type="radio" name="payment-method" />
                Momo
              </label>
            </div>
          </div>

          <button type="button" className="btn-primary">
            Thanh toán ngay
          </button>
        </form>

        {/* Right Side - Order Summary */}
        <div className="order-summary">
          <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>Tóm tắt đơn hàng</h2>

          {/* Sản phẩm */}
          <div className="order-item" style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ position: 'relative' }}>
              <img
                src="https://shop2banh.vn/images/thumbs/2023/10/kinh-x1r-chinh-hang-vuong-products-2069.jpg"
                alt="Sản phẩm"
                style={{ width: '64px', height: '64px', borderRadius: '6px', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                backgroundColor: '#555',
                color: '#fff',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                1
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: '500' }}>Bàn phím cơ Filco Majestouch Convertible 3 - Tenkeyless</div>
              <div style={{ color: '#888', fontSize: '13px', marginTop: '2px' }}>Cherry MX Blue</div>
            </div>

            <div style={{ fontWeight: '500', whiteSpace: 'nowrap' }}>4.290.000 ₫</div>
          </div>
          <div className="order-item" style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ position: 'relative' }}>
              <img
                src="https://shop2banh.vn/images/thumbs/2023/10/kinh-x1r-chinh-hang-vuong-products-2069.jpg"
                alt="Sản phẩm"
                style={{ width: '64px', height: '64px', borderRadius: '6px', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                backgroundColor: '#555',
                color: '#fff',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                1
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: '500' }}>Bàn phím cơ Filco Majestouch Convertible 3 - Tenkeyless</div>
              <div style={{ color: '#888', fontSize: '13px', marginTop: '2px' }}>Cherry MX Blue</div>
            </div>

            <div style={{ fontWeight: '500', whiteSpace: 'nowrap' }}>4.290.000 ₫</div>
          </div>
          <div className="order-item" style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ position: 'relative' }}>
              <img
                src="https://shop2banh.vn/images/thumbs/2023/10/kinh-x1r-chinh-hang-vuong-products-2069.jpg"
                alt="Sản phẩm"
                style={{ width: '64px', height: '64px', borderRadius: '6px', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                backgroundColor: '#555',
                color: '#fff',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                1
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: '500' }}>Bàn phím cơ Filco Majestouch Convertible 3 - Tenkeyless</div>
              <div style={{ color: '#888', fontSize: '13px', marginTop: '2px' }}>Cherry MX Blue</div>
            </div>

            <div style={{ fontWeight: '500', whiteSpace: 'nowrap' }}>4.290.000 ₫</div>
          </div>

          {/* Tổng phụ */}
          <div className="subtotal-section" style={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0' }}>
            <p className="order-summary-text">Tổng phụ</p>
            <p className="subtotal-price">₫4.290.000</p>
          </div>

          {/* Vận chuyển */}
          <div className="shipping-section" style={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0' }}>
            <p className="order-summary-text">Vận chuyển</p>
            <p className="shipping-fee">Đang tính…</p>
          </div>

          {/* Tổng thanh toán */}
          <div className="total-section" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '16px', marginTop: '12px' }}>
            <p className="order-summary-text-sum">Tổng thanh toán:</p>
            <p className="total-price" style={{ color: '#d0011b' }}>₫4.290.000</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;
