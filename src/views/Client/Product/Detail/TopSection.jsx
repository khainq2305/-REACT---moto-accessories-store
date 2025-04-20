import { Row, Col, Image, Badge } from 'react-bootstrap';
import { cartService } from '../../../../services/cartService';

import CustomToast from '../../../../components/Toast';
import React, { useState } from 'react';
import '../../../../assets/Client/css/ProductDetail/topSection.css'; // <-- Import CSS đã tách riêng

const TopSection = ({ product, quantity, setQuantity, error, setError, variants, formatPrice, getFinalPrice }) => {
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = async () => {
    try {
      const payload = { product_id: product.id, quantity };
      const res = await cartService.addToCart(payload);
      setShowToast(true);
    } catch (err) {
      console.error('❌ Lỗi:', err);
    }
  };

  return (
    <>
      {showToast && (
        <div style={{ position: 'fixed', top: '100px', right: '24px', zIndex: 9999 }}>
          <CustomToast
  image={product.image} // ✅ sửa thành image
  name={product.name}
  price={getFinalPrice()}
  onClose={() => setShowToast(false)}
/>

        </div>
      )}

      <Row className="bg-white p-4 top-section">
        <Col md={5}>
        <Image
  src={product.image ? `http://localhost:3000/uploads/${product.image}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-I3nwE8w_QXqUKIaA9R5Rjr-l7UOVLdPWQ&s'}
  alt={product.name}
  fluid
  className="border mb-3"
/>

        </Col>

        <Col md={7} className="text-start product-info">
          <h4 className="fw-bold mb-3 title">
            <Badge  className="me-2 badge-gradient">Yêu Thích+</Badge>
            {product.name}
          </h4>

          <div className="d-flex align-items-center mb-4">
            <div className="text-warning me-2 fs-5">★★★★★</div>
            <span className="text-dark fw-semibold me-4">469 Đánh Giá</span>
            <span className="text-dark fw-semibold">778 Sold</span>
          </div>

          <div className="price-box">
            <h3 className="price-final">
              {formatPrice(getFinalPrice())}
            </h3>
            {product.discount > 0 && (
              <>
                <div className="price-old">
                  {formatPrice(product.price)}
                </div>
                <Badge bg="light" text="danger" className="border border-danger px-2 py-1">
                  -{formatPrice(product.discount)}
                </Badge>
              </>
            )}
          </div>

          <div className="mb-3">
            <strong>Vận Chuyển:</strong>{' '}
            <span className="text-success fw-semibold">Nhận vào 3 Th04, phí giao ₫0</span><br />
            <small className="text-muted">Tặng Voucher ₫15.000 nếu đơn giao sau thời gian trên.</small>
          </div>

          <div className="mb-4 text-muted">
            <span className="text-danger fw-semibold">Trả hàng miễn phí 15 ngày</span> · Bảo hiểm bảo vệ người tiêu dùng
          </div>

          <div className="mb-4">
            <strong className="d-block mb-2">Lựa Chọn:</strong>
            <div className="d-flex flex-wrap gap-2">
              {variants.map((item, idx) => (
                <button
                  key={idx}
                  className={`variant-button ${idx === 0 ? 'active' : ''}`}
                >
                  <img src={item.img} alt="icon" width="24" height="24" className="me-2" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="d-flex align-items-center gap-2 mb-1 quantity-wrapper">
            <label className="fw-semibold mb-0" style={{ minWidth: '70px' }}>Số Lượng</label>
            <div className="quantity-input">
              <button
                onClick={() => {
                  setError('');
                  setQuantity(prev => Math.max(prev - 1, 1));
                }}
              >-</button>
              <input
                type="number"
                min={1}
                max={product.quantity}
                value={quantity}
                onChange={(e) => {
                  let val = parseInt(e.target.value) || 1;
                  if (val > product.quantity) {
                    setError('Bạn đã chọn số lượng tối đa');
                    val = product.quantity;
                  } else {
                    setError('');
                  }
                  setQuantity(val);
                }}
              />
              <button
                disabled={quantity >= product.quantity}
                onClick={() => {
                  if (quantity < product.quantity) {
                    setQuantity(prev => prev + 1);
                    setError('');
                  } else {
                    setError('Bạn đã chọn số lượng tối đa');
                  }
                }}
              >+</button>
            </div>
            <span className="text-muted ms-2">{product.quantity} sản phẩm có sẵn</span>
          </div>

          {error && (
            <div className="text-danger" style={{ fontSize: '13px', marginTop: '4px' }}>
              {error}
            </div>
          )}

          <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
          <button onClick={handleAddToCart} className="btn-cart">
          <span className="btn-text">🛒 Thêm Vào Giỏ Hàng</span>
</button>

            <button className="btn-buy">Mua Ngay</button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TopSection;
