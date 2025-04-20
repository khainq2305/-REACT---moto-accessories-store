import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartService } from "../../../services/cartService";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const { id } = JSON.parse(atob(token.split(".")[1]));
        const res = await cartService.getCartByUser(id);
        const items = res.data.data.map((item) => ({
          ...item,
          isChecked: false,
        }));
        setCartItems(items);
      } catch (err) {
        console.error("❌ Lỗi khi lấy giỏ hàng:", err);
      }
    };

    fetchCart();
  }, []);

  const handleCheck = (index) => {
    const updatedItems = [...cartItems];
    updatedItems[index].isChecked = !updatedItems[index].isChecked;
    setCartItems(updatedItems);
    updateTotal(updatedItems);
  };

  const handleCheckAll = (checked) => {
    const updated = cartItems.map((item) => ({ ...item, isChecked: checked }));
    setCartItems(updated);
    updateTotal(updated);
  };

  const updateTotal = (items) => {
    const totalPrice = items.reduce((sum, item) => {
      if (item.isChecked) {
        const price = parseFloat(item.product?.price) || 0;
        const discount = parseFloat(item.product?.discount) || 0;
        const finalPrice = Math.max(0, price - discount);
        return sum + finalPrice * item.quantity;
      }
      return sum;
    }, 0);
    setTotal(totalPrice);
  };

  const handleQuantityChange = async (index, delta) => {
    const updatedItems = [...cartItems];
    const item = updatedItems[index];
    const stock = item.product?.quantity || 1;
    const newQuantity = item.quantity + delta;

    if (newQuantity < 1) return;

    if (newQuantity > stock) {
      updatedItems[index].errorQuantity = "Bạn đã chọn số lượng tối đa";
      setCartItems(updatedItems);
      return;
    }

    try {
      await cartService.updateQuantity(item.id, newQuantity);
      updatedItems[index].quantity = newQuantity;
      updatedItems[index].errorQuantity = ""; // xoá lỗi cũ
      setCartItems(updatedItems);
      updateTotal(updatedItems);
    } catch (error) {
      console.error("❌ Lỗi cập nhật số lượng:", error);
    }
  };

  const handleDeleteOne = async (index) => {
    const item = cartItems[index];
    try {
      await cartService.deleteItem(item.id);
      const updated = cartItems.filter((_, i) => i !== index);
      setCartItems(updated);
      updateTotal(updated);
    } catch (error) {
      console.error("❌ Lỗi xóa sản phẩm:", error);
    }
  };

  const handleDeleteSelected = async () => {
    const idsToDelete = cartItems.filter((i) => i.isChecked).map((i) => i.id);
    if (idsToDelete.length === 0) return;

    try {
      await cartService.deleteMultiple(idsToDelete);
      const updated = cartItems.filter((i) => !i.isChecked);
      setCartItems(updated);
      updateTotal(updated);
    } catch (error) {
      console.error("❌ Lỗi xóa nhiều sản phẩm:", error);
    }
  };

  const handleCheckout = () => {
    const selectedItems = cartItems.filter((item) => item.isChecked);
    if (selectedItems.length === 0) return alert("Bạn chưa chọn sản phẩm nào!");
    navigate("/thanhtoan", { state: { selectedItems } });
  };

  const formatPrice = (price) => {
    if (typeof price !== "number" || isNaN(price)) return "0 ₫";
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="main-container">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="cart-container">
          <div className="cart-header">
            <div className="cart-header__checkbox">
              <input
                type="checkbox"
                className="custom-checkbox"
                checked={
                  cartItems.length > 0 && cartItems.every((i) => i.isChecked)
                }
                onChange={(e) => handleCheckAll(e.target.checked)}
              />
            </div>
            <div className="cart-header__title">Sản Phẩm</div>
            <div className="cart-header__price">Đơn Giá</div>
            <div className="cart-header__quantity">Số Lượng</div>
            <div className="cart-header__total">Số Tiền</div>
            <div className="cart-header__action">Thao Tác</div>
          </div>

          {cartItems.map((item, idx) => {
            const price = parseFloat(item.product?.price) || 0;
            const discount = parseFloat(item.product?.discount) || 0;
            const stock = item.product?.quantity || 1;

            const finalPrice = Math.max(0, price - discount);

            return (
              <div className="cart-item" key={idx}>
                <div className="cart-item__checkbox">
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    checked={item.isChecked}
                    onChange={() => handleCheck(idx)}
                  />
                </div>
                <div className="cart-item__details">
                <img
  src={`http://localhost:3000/uploads/${item.product.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-I3nwE8w_QXqUKIaA9R5Rjr-l7UOVLdPWQ&s"}`}
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-I3nwE8w_QXqUKIaA9R5Rjr-l7UOVLdPWQ&s"; // local fallback trong public
  }}
  className="cart-item__image"
  alt={item.product.name}
/>


                  <div className="cart-item__info">
                  <h3
  className="cart-item__name"
  style={{
    maxWidth: "250px",
    whiteSpace: "normal",
    wordWrap: "break-word",
    fontSize: "15px",
    fontWeight: 500,
    lineHeight: "1.4"
  }}
>
  {item.product.name}
</h3>

                  </div>
                </div>
                <div className="cart-item__price">
                  {discount > 0 ? (
                    <>
                      <span
                        className="old-price"
                        style={{
                          textDecoration: "line-through",
                          color: "#999",
                          marginRight: "8px",
                        }}
                      >
                        {formatPrice(price)}
                      </span>
                      <span
                        className="new-price"
                        style={{ color: "red", fontWeight: "bold" }}
                      >
                        {formatPrice(finalPrice)}
                      </span>
                    </>
                  ) : (
                    <span
                      className="new-price"
                      style={{ color: "red", fontWeight: "bold" }}
                    >
                      {formatPrice(price)}
                    </span>
                  )}
                </div>
                <div className="cart-item__quantity">
                  <button
                    className="cart-item__quantity-btn"
                    onClick={() => handleQuantityChange(idx, -1)}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={item.quantity}
                    readOnly
                    className="cart-item__quantity-input"
                  />
                  <button
                    className="cart-item__quantity-btn"
                    onClick={() => handleQuantityChange(idx, 1)}
                    disabled={item.quantity >= stock}
                  >
                    +
                  </button>

                  {/* ✅ Thông báo lỗi */}
                  {item.errorQuantity && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      {item.errorQuantity}
                    </div>
                  )}
                </div>

                <div className="cart-item__total">
                  {formatPrice(finalPrice * item.quantity)}
                </div>
                <div className="cart-item__action">
                  <button
                    className="cart-item__delete-btn"
                    onClick={() => handleDeleteOne(idx)}
                  >
                    Xóa
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="shopping-cart__summary">
          <div
            className="shopping-cart__voucher"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 0",
              borderBottom: "1px dashed #ccc",
              fontSize: "14px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "red" }}>🎟</span>
              <span style={{ fontWeight: 500 }}>Shopee Voucher</span>
            </div>
            <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
              Chọn hoặc nhập mã
            </a>
          </div>

          <div className="shopping-cart__summary-bottom">
            <div className="shopping-cart__summary-lefts">
              <input
                type="checkbox"
                className="shopping-cart__summary-select-all custom-checkbox"
                checked={cartItems.every((item) => item.isChecked)}
                onChange={(e) => handleCheckAll(e.target.checked)}
              />
              <span className="click-all-lefts">Chọn tất cả</span>
              <button
                onClick={handleDeleteSelected}
                className="shopping-cart__summary-delete-selected"
              >
                Xóa
              </button>
            </div>

            <div className="shopping-cart__summary-right">
              <span className="summary-total-label">Tổng thanh toán:</span>
              <span
                className="summary-total-amount"
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginLeft: "4px",
                }}
              >
                {formatPrice(total)}
              </span>
              <button
                onClick={handleCheckout}
                className="btn-purchase"
                style={{
                  background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
                  color: "#fff",
                  padding: "10px 16px",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  textDecoration: "none",
                  marginLeft: "24px",
                }}
              >
                Mua Hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
