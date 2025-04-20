import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedItems = location.state?.selectedItems || [];

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [provinceId, setProvinceId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [wardCode, setWardCode] = useState("");
  const [shippingFee, setShippingFee] = useState(0);
  const [errors, setErrors] = useState({});

  const totalProductPrice = selectedItems.reduce((sum, item) => {
    const price = parseFloat(item.product?.price) || 0;
    const discount = parseFloat(item.product?.discount) || 0;
    const finalPrice = Math.max(0, price - discount);
    return sum + finalPrice * item.quantity;
  }, 0);

  const totalWeight = selectedItems.reduce((sum, item) => sum + 500 * item.quantity, 0);
  const total = totalProductPrice + shippingFee;

  useEffect(() => {
    axios.get("/api/ghn/provinces").then((res) => setProvinces(res.data.data));
  }, []);

  useEffect(() => {
    if (provinceId) {
      axios.get(`/api/ghn/districts/${provinceId}`).then((res) => setDistricts(res.data.data));
    }
  }, [provinceId]);

  useEffect(() => {
    if (districtId) {
      axios.get(`/api/ghn/wards/${districtId}`).then((res) => setWards(res.data.data));
    }
  }, [districtId]);

  useEffect(() => {
    if (districtId && wardCode) {
      axios.post("/api/ghn/available-services", { to_district: parseInt(districtId) })
        .then((res) => {
          const availableServices = res.data?.data || [];
          const validService = availableServices.find((s) => s.short_name.includes("Nhanh") || s.service_id);
          if (!validService) return setShippingFee(0);

          return axios.post("/api/ghn/fee", {
            toDistrictId: parseInt(districtId),
            wardCode,
            serviceId: validService.service_id,
            weight: totalWeight,
          }).then((res) => setShippingFee(res.data.data.total));
        })
        .catch((err) => {
          console.error("Lỗi tính phí vận chuyển:", err.message);
          setShippingFee(0);
        });
    }
  }, [districtId, wardCode]);

  const formatPrice = (price) =>
    new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", minimumFractionDigits: 0 }).format(price || 0);

  const handlePlaceOrder = async () => {
    const name = document.querySelector('input[name="name"]').value.trim();
    const phone = document.querySelector('input[name="phone"]').value.trim();
    const address_detail = document.querySelector('input[name="address"]').value.trim();

    const newErrors = {};
    if (!provinceId) newErrors.provinceId = "Vui lòng chọn tỉnh/thành";
    if (!districtId) newErrors.districtId = "Vui lòng chọn quận/huyện";
    if (!wardCode) newErrors.wardCode = "Vui lòng chọn phường/xã";
    if (!address_detail) newErrors.address = "Vui lòng nhập địa chỉ chi tiết";
    if (!name) newErrors.name = "Vui lòng nhập tên người nhận";
    if (!phone) newErrors.phone = "Vui lòng nhập số điện thoại";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    const payload = {
      cartItems: selectedItems.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
        price: item.product.price - item.product.discount,
      })),
      totalPrice: total,
      paymentMethod: "COD",
      shippingMethod: "GHN",
      shippingFee,
      address: { name, phone, provinceId, districtId, wardCode, address_detail },
    };

    try {
      const token = localStorage.getItem("token");
      await axios.post("/api/orders/place", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("✅ Đặt hàng thành công!");
      navigate("/product");
    } catch (err) {
      console.error("❌ Lỗi đặt hàng:", err.response?.data || err.message);
      toast.error("❌ Đặt hàng thất bại!");
    }
  };

  return (
    <div className="main-container">
      <div className="checkout-container">
        <form className="checkout-form">
          <div className="section">
            <h2>Thông tin giao hàng</h2>
            <div className="location-fields">
              <div className="select-wrapper">
                <select className="input-field" onChange={(e) => setProvinceId(e.target.value)}>
                  <option value="">Chọn tỉnh/thành</option>
                  {provinces.map((p) => <option key={p.ProvinceID} value={p.ProvinceID}>{p.ProvinceName}</option>)}
                </select>
                {errors.provinceId && <p className="error-msg">{errors.provinceId}</p>}
              </div>
              <div className="select-wrapper">
                <select className="input-field" onChange={(e) => setDistrictId(e.target.value)}>
                  <option value="">Chọn quận/huyện</option>
                  {districts.map((d) => <option key={d.DistrictID} value={d.DistrictID}>{d.DistrictName}</option>)}
                </select>
                {errors.districtId && <p className="error-msg">{errors.districtId}</p>}
              </div>
              <div className="select-wrapper">
                <select className="input-field" onChange={(e) => setWardCode(e.target.value)}>
                  <option value="">Chọn phường/xã</option>
                  {wards.map((w) => <option key={w.WardCode} value={w.WardCode}>{w.WardName}</option>)}
                </select>
                {errors.wardCode && <p className="error-msg">{errors.wardCode}</p>}
              </div>
            </div>
            <input className="input-field" name="address" placeholder="Địa chỉ chi tiết" />
            {errors.address && <p className="error-msg">{errors.address}</p>}
            <input className="input-field" name="name" placeholder="Tên người nhận" />
            {errors.name && <p className="error-msg">{errors.name}</p>}
            <input className="input-field" name="phone" placeholder="Điện thoại" />
            {errors.phone && <p className="error-msg">{errors.phone}</p>}
          </div>

          <div className="section">
            <h2>Phương thức vận chuyển</h2>
            <div className="radio-group">
              <label><input type="radio" name="delivery-method" defaultChecked /> Miễn phí Cần Thơ (trong ngày)</label>
              <label><input type="radio" name="delivery-method" /> Ship nhanh toàn quốc (2-3 ngày) - {formatPrice(shippingFee)}</label>
            </div>
          </div>

          <div className="section">
  <h2>Phương thức thanh toán</h2>
  <div className="payment-methods">
    <label className="radio-option">
      <input type="radio" name="payment-method" defaultChecked />
      <span>Thanh toán khi nhận hàng (COD)</span>
    </label>
    <label className="radio-option">
      <input type="radio" name="payment-method" />
      <span>Chuyển khoản</span>
    </label>
    <label className="radio-option">
      <input type="radio" name="payment-method" />
      <span>Momo</span>
    </label>
  </div>
</div>

          <button type="button" className="btn-primary" style={{background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)"}} onClick={handlePlaceOrder}>Thanh toán ngay</button>
        </form>

        <div className="order-summary">
  <h3>Tóm tắt đơn hàng</h3>

  {selectedItems.map((item, index) => {
    const price = parseFloat(item.product?.price) || 0;
    const discount = parseFloat(item.product?.discount) || 0;
    const finalPrice = Math.max(0, price - discount);

    return (
      <div key={index} className="order-item-shopee">
        <div className="order-item-img-wrapper">
          <img
            src={
              item.product.image
                ? `http://localhost:3000/uploads/${item.product.image}`
                : "https://via.placeholder.com/100x100?text=No+Image"
            }
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

  <div className="subtotal-section">
    <p>Tạm tính</p>
    <p>{formatPrice(totalProductPrice)}</p>
  </div>
  <div className="shipping-section">
    <p>Phí ship</p>
    <p>{shippingFee ? formatPrice(shippingFee) : "Đang tính…"}</p>
  </div>
  <div className="total-section">
    <strong>Tổng cộng:</strong>
    <strong style={{ color: "#d0011b" }}>{formatPrice(total)}</strong>
  </div>
</div>

      </div>
    </div>
  );
};

export default CheckoutPage;
