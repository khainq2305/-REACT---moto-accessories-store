import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const CheckoutPage = () => {
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [provinceId, setProvinceId] = useState('');
  const [districtId, setDistrictId] = useState('');
  const [wardCode, setWardCode] = useState('');
  const [shippingFee, setShippingFee] = useState(0);

  const totalProductPrice = selectedItems.reduce((sum, item) => {
    const price = parseFloat(item.product?.price) || 0;
    const discount = parseFloat(item.product?.discount) || 0;
    const finalPrice = Math.max(0, price - discount);
    return sum + finalPrice * item.quantity;
  }, 0);

  const totalWeight = selectedItems.reduce((sum, item) => sum + 500 * item.quantity, 0);

  useEffect(() => {
    axios.get('/api/ghn/provinces').then(res => setProvinces(res.data.data));
  }, []);

  useEffect(() => {
    if (provinceId) {
      axios.get(`/api/ghn/districts/${provinceId}`).then(res => setDistricts(res.data.data));
    }
  }, [provinceId]);

  useEffect(() => {
    if (districtId) {
      axios.get(`/api/ghn/wards/${districtId}`).then(res => setWards(res.data.data));
    }
  }, [districtId]);

  useEffect(() => {
    if (districtId && wardCode) {
      axios.post('/api/ghn/available-services', { to_district: parseInt(districtId) })
        .then(res => {
          const availableServices = res.data?.data || [];
          if (!availableServices.length) return setShippingFee(0);
          const validService = availableServices.find(s => s.short_name.includes('Nhanh') || s.service_id);
          if (!validService) return setShippingFee(0);

          axios.post('/api/ghn/fee', {
            toDistrictId: parseInt(districtId),
            wardCode,
            serviceId: validService.service_id,
            weight: totalWeight
          }).then(res => setShippingFee(res.data.data.total))
            .catch(err => {
              console.error('❌ Fee API error:', err.response?.data || err.message);
              setShippingFee(0);
            });
        }).catch(err => {
          console.error('❌ Available services error:', err.response?.data || err.message);
          setShippingFee(0);
        });
    }
  }, [districtId, wardCode]);

  const formatPrice = (price) => {
    if (typeof price !== 'number' || isNaN(price)) return '0 ₫';
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const total = totalProductPrice + shippingFee;

  const handlePlaceOrder = async () => {
    const name = document.querySelector('input[placeholder="Tên người nhận"]').value;
    const phone = document.querySelector('input[placeholder="Điện thoại"]').value;
    const address_detail = document.querySelector('input[placeholder="Địa chỉ chi tiết"]').value;

    if (!name || !phone || !provinceId || !districtId || !wardCode || !address_detail) {
      alert('Vui lòng điền đầy đủ thông tin giao hàng!');
      return;
    }

    const address = {
      name,
      phone,
      provinceId,
      districtId,
      wardCode,
      address_detail
    };

    const cartItems = selectedItems.map(item => ({
      productId: item.product.id,
      quantity: item.quantity,
      price: item.product.price - item.product.discount
    }));

    const payload = {
      cartItems,
      totalPrice: total,
      paymentMethod: 'COD',
      shippingMethod: 'GHN',
      shippingFee,
      address
    };

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('/api/orders/place', payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert('✅ Đặt hàng thành công!');
      console.log('📦 Đơn hàng:', res.data);
    } catch (err) {
      console.error('❌ Đặt hàng lỗi:', err.response?.data || err.message);
      alert('Lỗi khi đặt hàng!');
    }
  };

  return (
    <div className="main-container">
      <div className="checkout-container">
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
                <select className="input-field" onChange={e => setProvinceId(e.target.value)}>
                  <option value="">Chọn tỉnh/thành</option>
                  {provinces.map(p => (
                    <option key={p.ProvinceID} value={p.ProvinceID}>{p.ProvinceName}</option>
                  ))}
                </select>
              </div>
              <div className="select-wrapper">
                <select className="input-field" onChange={e => setDistrictId(e.target.value)}>
                  <option>Chọn quận/huyện</option>
                  {districts.map(d => (
                    <option key={d.DistrictID} value={d.DistrictID}>{d.DistrictName}</option>
                  ))}
                </select>
              </div>
              <div className="select-wrapper">
                <select className="input-field" onChange={e => setWardCode(e.target.value)}>
                  <option>Chọn phường/xã</option>
                  {wards.map(w => (
                    <option key={w.WardCode} value={w.WardCode}>{w.WardName}</option>
                  ))}
                </select>
              </div>
            </div>

            <input className="input-field detailed-address" placeholder="Địa chỉ chi tiết" />
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
                <span className="price-label">{formatPrice(shippingFee)}</span>
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

          <button type="button" className="btn-primary" onClick={handlePlaceOrder}>
            Thanh toán ngay
          </button>
        </form>

        <div className="order-summary">
          <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>Tóm tắt đơn hàng</h2>

          {selectedItems.map((item, index) => {
  const price = parseFloat(item.product?.price) || 0;
  const discount = parseFloat(item.product?.discount) || 0;
  const finalPrice = Math.max(0, price - discount);

  return (
    <div className="order-item-shopee" key={index}>
      <div className="order-item-img-wrapper">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="order-item-thumb"
        />
        <div className="order-item-qty-badge">{item.quantity}</div>
      </div>
      <div className="order-item-info">
        <div className="order-item-name">{item.product.name}</div>
        <div className="order-item-color">Black</div>
      </div>
      <div className="order-item-price">
        {formatPrice(finalPrice * item.quantity)}
      </div>
    </div>
  );
})}


          <div className="subtotal-section" style={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0' }}>
            <p className="order-summary-text">Tổng phụ</p>
            <p className="subtotal-price">{formatPrice(totalProductPrice)}</p>
          </div>

          <div className="shipping-section" style={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0' }}>
            <p className="order-summary-text">Vận chuyển</p>
            <p className="shipping-fee">{shippingFee > 0 ? formatPrice(shippingFee) : 'Đang tính…'}</p>
          </div>

          <div className="total-section" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '16px', marginTop: '12px' }}>
            <p className="order-summary-text-sum">Tổng thanh toán:</p>
            <p className="total-price" style={{ color: '#d0011b' }}>{formatPrice(total)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
