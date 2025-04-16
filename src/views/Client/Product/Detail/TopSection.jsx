import { Row, Col, Image, Badge } from 'react-bootstrap';
import { cartService } from '../../../../services/cartService';
import { toast } from 'react-toastify';
import CustomToast from '../../../../components/Toast'; // tuỳ path
import React, { useState } from 'react';



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
      image={product.thumbnail}
      name={product.name}
      price={getFinalPrice()}
      onClose={() => setShowToast(false)}
    />
  </div>
)}

        <Row className="bg-white p-4">
        <Col md={5}>
          <Image
            src={product.thumbnail}
            fluid
            className="border mb-3"
            alt={product.name}
          />
          <div className="d-flex justify-content-between">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src={product.thumbnail}
                thumbnail
                width={90}
                height={90}
                alt="thumb"
              />
            ))}
          </div>
        </Col>

        <Col md={7} className="text-start" style={{ fontSize: '14px', color: '#222' }}>
          {/* Tiêu đề sản phẩm */}
          <h4 className="fw-bold mb-3" style={{ fontSize: '20px', lineHeight: '28px' }}>
            <Badge bg="danger" className="me-2">Yêu Thích+</Badge>
            {product.name}
          </h4>

          {/* Đánh giá */}
          <div className="d-flex align-items-center mb-4">
            <div className="text-warning me-2 fs-5">★★★★★</div>
            <span className="text-dark fw-semibold me-4">469 Đánh Giá</span>
            <span className="text-dark fw-semibold">778 Sold</span>
          </div>

          {/* Giá */}
          <div className="bg-light py-3 px-4 mb-4 rounded d-flex align-items-center gap-4">
<h3 className="text-danger fw-bold mb-0" style={{ fontSize: '24px' }}>
  {formatPrice(getFinalPrice())}
</h3>

{product.discount > 0 && (
  <>
    <div className="text-muted text-decoration-line-through" style={{ fontSize: '14px' }}>
      {formatPrice(product.price)}
    </div>
    <Badge bg="light" text="danger" className="border border-danger px-2 py-1">
      -{formatPrice(product.discount)}
    </Badge>
  </>
)}
</div>


          {/* Vận chuyển */}
          <div className="mb-3">
            <strong>Vận Chuyển:</strong>{' '}
            <span className="text-success fw-semibold">Nhận vào 3 Th04, phí giao ₫0</span><br />
            <small className="text-muted">Tặng Voucher ₫15.000 nếu đơn giao sau thời gian trên.</small>
          </div>

          {/* Chính sách an tâm */}
          <div className="mb-4 text-muted">
            <span className="text-danger fw-semibold">Trả hàng miễn phí 15 ngày</span> · Bảo hiểm bảo vệ người tiêu dùng
          </div>

          {/* Lựa chọn */}
          <div className="mb-4">
            <strong className="d-block mb-2">Lựa Chọn:</strong>
            <div className="d-flex flex-wrap gap-2">
              {variants.map((item, idx) => (
                <button
                  key={idx}
                  className="d-flex align-items-center rounded px-3 py-2"
                  style={{
                    border: idx === 0 ? '1px solid red' : '1px solid #ccc',
                    color: idx === 0 ? 'red' : '#333',
                    backgroundColor: '#fff',
                    fontWeight: '500',
                    fontSize: '14px',
                    minWidth: '200px',
                  }}
                >
                  <img
                    src={item.img}
                    alt="icon"
                    width="24"
                    height="24"
                    className="me-2"
                  />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Số lượng */}
          <div className="d-flex align-items-center gap-2 mb-1" style={{ fontSize: '14px' }}>
<label className="fw-semibold mb-0" style={{ minWidth: '70px' }}>Số Lượng</label>

<div className="d-flex align-items-center border rounded overflow-hidden" style={{ height: '36px', width: '110px' }}>
  <button
    className="border-0 bg-light"
    onClick={() => {
      setError('');
      setQuantity(prev => Math.max(prev - 1, 1));
    }}
    style={{ width: '36px', height: '100%', fontSize: '14px' }}
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
    className="text-center border-0"
    style={{ width: '38px', height: '100%', fontSize: '14px', color: 'red', outline: 'none' }}
  />

  <button
    className="border-0 bg-light"
    disabled={quantity >= product.quantity}
    onClick={() => {
      if (quantity < product.quantity) {
        setQuantity(prev => prev + 1);
        setError('');
      } else {
        setError('Bạn đã chọn số lượng tối đa');
      }
    }}
    style={{
      width: '36px',
      height: '100%',
      fontSize: '14px',
      color: quantity >= product.quantity ? '#ccc' : '#000',
      cursor: quantity >= product.quantity ? 'not-allowed' : 'pointer'
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



          {/* Nút hành động */}
          <div className="d-flex flex-wrap align-items-center gap-3 mt-2">
          <button
  onClick={handleAddToCart} // ⬅️ THÊM DÒNG NÀY
  className="d-flex align-items-center justify-content-center"
  style={{
    border: '1px solid #ee4d2d',
    color: '#ee4d2d',
    backgroundColor: '#fff',
    fontSize: '16px',
    fontWeight: 600,
    padding: '12px 24px',
    borderRadius: '2px',
    lineHeight: 1.5
  }}
>
  🛒 Thêm Vào Giỏ Hàng
</button>

            <button style={{
              backgroundColor: '#ee4d2d',
              color: '#fff',
              border: '1px solid #ee4d2d',
              fontSize: '16px',
              fontWeight: 600,
              padding: '12px 24px',
              borderRadius: '2px',
              lineHeight: 1.5
            }}>
              Mua Ngay
            </button>
          </div>
        </Col>
      </Row>
     </>
    );
  };
  
  export default TopSection;
  