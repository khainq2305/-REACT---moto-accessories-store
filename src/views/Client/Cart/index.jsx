
import { Link } from 'react-router-dom';
const CartPage = () => {
  return (
    <div className="main-container">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="cart-container">
          <div className="cart-header">
            <div className="cart-header__checkbox">
              <input type="checkbox" className="custom-checkbox" />
            </div>
            <div className="cart-header__title">Sản Phẩm</div>
            <div className="cart-header__price">Đơn Giá</div>
            <div className="cart-header__quantity">Số Lượng</div>
            <div className="cart-header__total">Số Tiền</div>
            <div className="cart-header__action">Thao Tác</div>
          </div>

          {/* Item static preview */}
          <div className="cart-item">
            <div className="cart-item__checkbox">
              <input type="checkbox" className="custom-checkbox" />
            </div>
            <div className="cart-item__details">
              <img src="https://shop2banh.vn/images/thumbs/2023/10/kinh-x1r-chinh-hang-vuong-products-2069.jpg" className="cart-item__image" alt="Product" />
              <div className="cart-item__info">
                <h3 className="cart-item__name">Sample Product Name</h3>
                <span className="discount-badge">-10%</span>
                <p className="cart-item__variant">Size M</p>
              </div>
            </div>
            <div className="cart-item__price">
              <span className="old-price" style={{ textDecoration: 'line-through', marginRight: '8px', color: '#999' }}>
                300.000 ₫
              </span>
              <span className="new-price" style={{ color: 'red', fontWeight: 'bold' }}>
                270.000 ₫
              </span>
            </div>

            <div className="cart-item__quantity">
              <button className="cart-item__quantity-btn">-</button>
              <input
                type="text"
                value="1"
                className="cart-item__quantity-input"
                readOnly
              />
              <button className="cart-item__quantity-btn">+</button>
            </div>
            <div className="cart-item__total">270.000 ₫</div>
            <div className="cart-item__action">
              <button type="button" className="cart-item__delete-btn">Xóa</button>
            </div>
          </div>
          <div className="cart-item">
            <div className="cart-item__checkbox">
              <input type="checkbox" className="custom-checkbox" />
            </div>
            <div className="cart-item__details">
              <img src="https://shop2banh.vn/images/thumbs/2023/10/kinh-x1r-chinh-hang-vuong-products-2069.jpg" className="cart-item__image" alt="Product" />
              <div className="cart-item__info">
                <h3 className="cart-item__name">Sample Product Name</h3>
                <span className="discount-badge">-10%</span>
                <p className="cart-item__variant">Size M</p>
              </div>
            </div>
            <div className="cart-item__price">
              <span className="old-price" style={{ textDecoration: 'line-through', marginRight: '8px', color: '#999' }}>
                300.000 ₫
              </span>
              <span className="new-price" style={{ color: 'red', fontWeight: 'bold' }}>
                270.000 ₫
              </span>
            </div>

            <div className="cart-item__quantity">
              <button className="cart-item__quantity-btn">-</button>
              <input
                type="text"
                value="1"
                className="cart-item__quantity-input"
                readOnly
              />
              <button className="cart-item__quantity-btn">+</button>
            </div>
            <div className="cart-item__total">270.000 ₫</div>
            <div className="cart-item__action">
              <button type="button" className="cart-item__delete-btn">Xóa</button>
            </div>
          </div>
          <div className="cart-item">
            <div className="cart-item__checkbox">
              <input type="checkbox" className="custom-checkbox" />
            </div>
            <div className="cart-item__details">
              <img src="https://shop2banh.vn/images/thumbs/2023/10/kinh-x1r-chinh-hang-vuong-products-2069.jpg" className="cart-item__image" alt="Product" />
              <div className="cart-item__info">
                <h3 className="cart-item__name">Sample Product Name</h3>
                <span className="discount-badge">-10%</span>
                <p className="cart-item__variant">Size M</p>
              </div>
            </div>
            <div className="cart-item__price">
              <span className="old-price" style={{ textDecoration: 'line-through', marginRight: '8px', color: '#999' }}>
                300.000 ₫
              </span>
              <span className="new-price" style={{ color: 'red', fontWeight: 'bold' }}>
                270.000 ₫
              </span>
            </div>

            <div className="cart-item__quantity">
              <button className="cart-item__quantity-btn">-</button>
              <input
                type="text"
                value="1"
                className="cart-item__quantity-input"
                readOnly
              />
              <button className="cart-item__quantity-btn">+</button>
            </div>
            <div className="cart-item__total">270.000 ₫</div>
            <div className="cart-item__action">
              <button type="button" className="cart-item__delete-btn">Xóa</button>
            </div>
          </div>
          <div className="cart-item">
            <div className="cart-item__checkbox">
              <input type="checkbox" className="custom-checkbox" />
            </div>
            <div className="cart-item__details">
              <img src="https://shop2banh.vn/images/thumbs/2023/10/kinh-x1r-chinh-hang-vuong-products-2069.jpg" className="cart-item__image" alt="Product" />
              <div className="cart-item__info">
                <h3 className="cart-item__name">Sample Product Name</h3>
                <span className="discount-badge">-10%</span>
                <p className="cart-item__variant">Size M</p>
              </div>
            </div>
            <div className="cart-item__price">
              <span className="old-price" style={{ textDecoration: 'line-through', marginRight: '8px', color: '#999' }}>
                300.000 ₫
              </span>
              <span className="new-price" style={{ color: 'red', fontWeight: 'bold' }}>
                270.000 ₫
              </span>
            </div>

            <div className="cart-item__quantity">
              <button className="cart-item__quantity-btn">-</button>
              <input
                type="text"
                value="1"
                className="cart-item__quantity-input"
                readOnly
              />
              <button className="cart-item__quantity-btn">+</button>
            </div>
            <div className="cart-item__total">270.000 ₫</div>
            <div className="cart-item__action">
              <button type="button" className="cart-item__delete-btn">Xóa</button>
            </div>
          </div>
          <div className="cart-item">
            <div className="cart-item__checkbox">
              <input type="checkbox" className="custom-checkbox" />
            </div>
            <div className="cart-item__details">
              <img src="https://shop2banh.vn/images/thumbs/2023/10/kinh-x1r-chinh-hang-vuong-products-2069.jpg" className="cart-item__image" alt="Product" />
              <div className="cart-item__info">
                <h3 className="cart-item__name">Sample Product Name</h3>
                <span className="discount-badge">-10%</span>
                <p className="cart-item__variant">Size M</p>
              </div>
            </div>
            <div className="cart-item__price">
              <span className="old-price" style={{ textDecoration: 'line-through', marginRight: '8px', color: '#999' }}>
                300.000 ₫
              </span>
              <span className="new-price" style={{ color: 'red', fontWeight: 'bold' }}>
                270.000 ₫
              </span>
            </div>

            <div className="cart-item__quantity">
              <button className="cart-item__quantity-btn">-</button>
              <input
                type="text"
                value="1"
                className="cart-item__quantity-input"
                readOnly
              />
              <button className="cart-item__quantity-btn">+</button>
            </div>
            <div className="cart-item__total">270.000 ₫</div>
            <div className="cart-item__action">
              <button type="button" className="cart-item__delete-btn">Xóa</button>
            </div>
          </div>
          <div className="cart-item">
            <div className="cart-item__checkbox">
              <input type="checkbox" className="custom-checkbox" />
            </div>
            <div className="cart-item__details">
              <img src="https://shop2banh.vn/images/thumbs/2023/10/kinh-x1r-chinh-hang-vuong-products-2069.jpg" className="cart-item__image" alt="Product" />
              <div className="cart-item__info">
                <h3 className="cart-item__name">Sample Product Name</h3>
                <span className="discount-badge">-10%</span>
                <p className="cart-item__variant">Size M</p>
              </div>
            </div>
            <div className="cart-item__price">
              <span className="old-price" style={{ textDecoration: 'line-through', marginRight: '8px', color: '#999' }}>
                300.000 ₫
              </span>
              <span className="new-price" style={{ color: 'red', fontWeight: 'bold' }}>
                270.000 ₫
              </span>
            </div>

            <div className="cart-item__quantity">
              <button className="cart-item__quantity-btn">-</button>
              <input
                type="text"
                value="1"
                className="cart-item__quantity-input"
                readOnly
              />
              <button className="cart-item__quantity-btn">+</button>
            </div>
            <div className="cart-item__total">270.000 ₫</div>
            <div className="cart-item__action">
              <button type="button" className="cart-item__delete-btn">Xóa</button>
            </div>
          </div>
          <div className="cart-item">
            <div className="cart-item__checkbox">
              <input type="checkbox" className="custom-checkbox" />
            </div>
            <div className="cart-item__details">
              <img src="https://shop2banh.vn/images/thumbs/2023/10/kinh-x1r-chinh-hang-vuong-products-2069.jpg" className="cart-item__image" alt="Product" />
              <div className="cart-item__info">
                <h3 className="cart-item__name">Sample Product Name</h3>
                <span className="discount-badge">-10%</span>
                <p className="cart-item__variant">Size M</p>
              </div>
            </div>
            <div className="cart-item__price">
              <span className="old-price" style={{ textDecoration: 'line-through', marginRight: '8px', color: '#999' }}>
                300.000 ₫
              </span>
              <span className="new-price" style={{ color: 'red', fontWeight: 'bold' }}>
                270.000 ₫
              </span>
            </div>

            <div className="cart-item__quantity">
              <button className="cart-item__quantity-btn">-</button>
              <input
                type="text"
                value="1"
                className="cart-item__quantity-input"
                readOnly
              />
              <button className="cart-item__quantity-btn">+</button>
            </div>
            <div className="cart-item__total">270.000 ₫</div>
            <div className="cart-item__action">
              <button type="button" className="cart-item__delete-btn">Xóa</button>
            </div>
          </div>
          <div className="cart-item">
            <div className="cart-item__checkbox">
              <input type="checkbox" className="custom-checkbox" />
            </div>
            <div className="cart-item__details">
              <img src="https://shop2banh.vn/images/thumbs/2023/10/kinh-x1r-chinh-hang-vuong-products-2069.jpg" className="cart-item__image" alt="Product" />
              <div className="cart-item__info">
                <h3 className="cart-item__name">Sample Product Name</h3>
                <span className="discount-badge">-10%</span>
                <p className="cart-item__variant">Size M</p>
              </div>
            </div>
            <div className="cart-item__price">
              <span className="old-price" style={{ textDecoration: 'line-through', marginRight: '8px', color: '#999' }}>
                300.000 ₫
              </span>
              <span className="new-price" style={{ color: 'red', fontWeight: 'bold' }}>
                270.000 ₫
              </span>
            </div>

            <div className="cart-item__quantity">
              <button className="cart-item__quantity-btn">-</button>
              <input
                type="text"
                value="1"
                className="cart-item__quantity-input"
                readOnly
              />
              <button className="cart-item__quantity-btn">+</button>
            </div>
            <div className="cart-item__total">270.000 ₫</div>
            <div className="cart-item__action">
              <button type="button" className="cart-item__delete-btn">Xóa</button>
            </div>
          </div>

          {/* Empty Cart (optional static state) */}
          {/* <div className="empty-cart">
          <img
            src="../../../public/uploads/6024626.webp"
            alt="Giỏ hàng trống"
            className="empty-cart-image"
          />
          <p className="empty-cart-message">
            Giỏ hàng của bạn đang trống! Hãy chọn những món đồ yêu thích ngay nào 🎉
          </p>
          <a href="/sanpham" className="cta-button">Tiếp tục mua sắm</a>
        </div> */}
        </div>

        <div className="shopping-cart__summary">
          {/* PHẦN VOUCHER */}
          <div className="shopping-cart__voucher" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 0',
            borderBottom: '1px dashed #ccc',
            fontSize: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: 'red' }}>🎟</span>
              <span style={{ fontWeight: 500 }}>Shopee Voucher</span>
            </div>
            <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>Chọn hoặc nhập mã</a>
          </div>

          {/* PHẦN TỔNG THANH TOÁN */}
          <div className="shopping-cart__summary-bottom">
            <div className="shopping-cart__summary-lefts">
              <input type="checkbox" className="shopping-cart__summary-select-all custom-checkbox" />
              <span className="click-all-lefts">Chọn tất cả</span>
              <a className="shopping-cart__summary-delete-selected">Xóa</a>
            </div>
            <div className="shopping-cart__summary-right">
              <span className="summary-total-label">Tổng thanh toán:</span>
              <span className="summary-total-amount" style={{
                color: 'red',
                fontWeight: 'bold',
                fontSize: '18px',
                marginLeft: '4px'
              }}>270.000 ₫</span>

              <Link to="/thanhtoan" className="btn-purchase" style={{
                backgroundColor: '#d0011b',
                color: '#fff',
                padding: '10px 16px',
                borderRadius: '6px',
                fontWeight: 'bold',
                fontSize: '14px',
                textDecoration: 'none',
                marginLeft: '24px' // ← THÊM DÒNG NÀY
              }}>
                Mua Hàng
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CartPage;
