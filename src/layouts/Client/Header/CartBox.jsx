import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartService } from "../../../services/cartService";
import { toast } from "react-toastify";

const CartBox = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQty, setTotalQty] = useState(0);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const { id } = JSON.parse(atob(token.split(".")[1])); // ✅ giống CartPage
      const res = await cartService.getCartByUser(id);
      const items = res.data.data?.filter((item) => item.product) || [];

      setCartItems(items);
      setTotalQty(items.reduce((acc, item) => acc + item.quantity, 0));
    } catch (error) {
      console.error("❌ Lỗi khi lấy giỏ hàng:", error);
    }
  };

  useEffect(() => {
    fetchCart();
    window.addEventListener("storage", fetchCart); // khi localStorage thay đổi
    return () => window.removeEventListener("storage", fetchCart);
  }, []);

  const handleDelete = async (cartItemId) => {
    try {
      await cartService.deleteItem(cartItemId);
      toast.success("🗑️ Đã xóa sản phẩm khỏi giỏ");
      fetchCart();
    } catch (error) {
      toast.error("❌ Xóa thất bại");
    }
  };

  return (
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
          {cartItems.length === 0 ? (
            <p style={{ padding: "16px", color: "#888" }}>Chưa có sản phẩm nào</p>
          ) : (
            cartItems.map((item) => (
              <li className="header__cart-item" key={item.id}>
                <img
                  src={
                    item.product.image
                      ? `http://localhost:3000/uploads/${item.product.image}`
                      : "https://via.placeholder.com/60x60?text=No+Image"
                  }
                  className="header__cart-item-img"
                  alt={item.product.name}
                />
                <div className="header__cart-item-info">
                  <div className="header__cart-item-heading">
                    <h3 className="header__cart-item-name">{item.product.name}</h3>
                    <p className="header__cart-item-price">
                      {(item.product.price - item.product.discount).toLocaleString()}đ
                    </p>
                  </div>
                  <div className="header__cart-item-body">
                    <p className="header__cart-item-number">x {item.quantity}</p>
                    <div
                      className="header__cart-item-close"
                      onClick={() => handleDelete(item.id)}
                      style={{ cursor: "pointer" }}
                    >
                      Xoá <i className="fas fa-times"></i>
                    </div>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>

        <div className="header__cart-footer">
          <Link to="/cart" className="btn btn--primary header__cart-see-cart">
            Xem giỏ hàng
          </Link>
        </div>
      </div>

      <div className="header__cart-count">{totalQty}</div>
    </div>
  );
};

export default CartBox;
