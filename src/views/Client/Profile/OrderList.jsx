// src/views/Client/Profile/OrderList.jsx
import { useEffect, useState } from "react";
import { clientOrderService } from "../../../services/orderService";

import "../../../assets/Client/css/Profile/orderlist.css";

export default function OrderList() {
  const [activeTab, setActiveTab] = useState("pending");
  const [orders, setOrders] = useState([]);

  const tabs = [
    { key: "pending", label: "Chờ xác nhận" },
    { key: "confirmed", label: "Đã xác nhận" },
    { key: "shipping", label: "Đang giao" },
    { key: "delivered", label: "Đã giao" },
    { key: "canceled", label: "Đã hủy" },
  ];

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
        const res = await clientOrderService.getOrdersByUser();

      setOrders(res.data.orders || []);
    } catch (error) {
      console.error("❌ Lỗi lấy danh sách đơn:", error);
    }
  };

  return (
    <div className="order-container">
      {/* Tabs */}
      <ul className="order-tabs">
        {tabs.map((tab) => (
          <li
            key={tab.key}
            className={`order-tab ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </li>
        ))}
      </ul>

      {/* Search */}
      <div className="order-search-bar">
        <input
          type="text"
          placeholder="Bạn có thể tìm kiếm theo tên Shop, ID đơn hàng hoặc Tên sản phẩm"
        />
      </div>

      {/* Danh sách đơn hàng */}
      {orders
        .filter((order) => {
          const statusMap = {
            pending: 0,
            confirmed: 1,
            shipping: 2,
            delivered: 3,
            canceled: 4,
          };
          return order.status === statusMap[activeTab];
        })
        .map((order) => (
          <div key={order.id} className="order-item">
            <div className="order-status-bar">
              <span className="text-success">Giao hàng thành công</span>
              <span className="text-danger fw-600">HOÀN THÀNH</span>
            </div>

            {order.orderDetails.map((detail, idx) => (
              <div key={idx} className="order-product-row">
                <img
                  src={detail.product?.image}
                  alt="product"
                  className="product-thumb"
                />
                <div className="product-main">
                  <div className="product-title">{detail.product?.name}</div>
                  <div className="product-sub">x{detail.quantity}</div>
                </div>
                <div className="product-price">
                  <div className="price-old">
                    ₫{(detail.price * 1.2).toLocaleString()}
                  </div>
                  <div className="price-new">₫{detail.price.toLocaleString()}</div>
                </div>
              </div>
            ))}

            <div className="product-total">
              <span>Thành tiền: </span>
              <span className="highlight">₫{order.total_price.toLocaleString()}</span>
            </div>

            <div className="order-action-row">
              <button className="btn btn-primary">Đánh Giá</button>
              <button className="btn btn-outline">Liên Hệ Người Bán</button>
              <button className="btn btn-outline">Mua Lại</button>
            </div>
          </div>
        ))}
    </div>
  );
}
