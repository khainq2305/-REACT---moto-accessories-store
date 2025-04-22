import React, { useEffect, useState } from "react";
import "../../../assets/Client/css/Profile/orderlist.css";
import { clientOrderService } from "../../../services/orderService";
import ReviewModal from './ReviewModal'
const formatCurrency = (value) =>
  new Intl.NumberFormat("vi-VN", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(value);

const getReviewDeadline = (createdAt) => {
  const created = new Date(createdAt);
  const deadline = new Date(created.getTime() + 15 * 24 * 60 * 60 * 1000);
  return deadline.toLocaleDateString("vi-VN");
};

const isReviewAvailable = (createdAt) => {
  const now = new Date();
  const created = new Date(createdAt);
  return (now.getTime() - created.getTime()) / (1000 * 3600 * 24) <= 15;
};

const tabs = [
  { label: "Tất cả", status: null },
  { label: "Chờ xác nhận", status: 0 },
  { label: "Đã xác nhận", status: 1 },
  { label: "Đang giao", status: 2 },
  { label: "Đã giao", status: 3 },
  { label: "Đã huỷ", status: 4 },
];

const statusMap = {
  0: { label: "CHỜ XÁC NHẬN", color: "text-danger" },
  1: { label: "ĐÃ XÁC NHẬN", color: "text-danger" },
  2: { label: "ĐANG GIAO", color: "text-danger" },
  3: { label: "HOÀN THÀNH", color: "text-success" },
  4: { label: "ĐÃ HUỶ", color: "text-danger" },
};

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Tất cả");
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => setIsModalOpen(false)
  const [selectedProduct, setSelectedProduct] = useState(null)


  const handleOpenModal = (productId, userId) => {
    
    setSelectedProduct({ productId, userId });
    console.log("ID người dùng là:", userId);
    console.log("ID product là:", productId);
    setIsModalOpen(true);
  };


  const fetchOrders = async () => {
    try {
      const currentTab = tabs.find((t) => t.label === selectedTab);
      const params =
        currentTab?.status !== null ? { status: currentTab.status } : {};

      const res = await clientOrderService.getOrdersByUser(params);
      const ordersData = res?.data?.orders;

      if (!Array.isArray(ordersData)) {
        console.error("❌ Dữ liệu đơn hàng không hợp lệ:", res);
        setOrders([]);
        return;
      }

      console.log("Orders Data:", ordersData); // In log để kiểm tra cấu trúc

      const mapped = ordersData.map((order) => {
        console.log("➡️ Order:", order); // In log từng order
        return {
          ...order,
          status: Number(order.status),
          userId: order.idUser
        };
      });
      setOrders(mapped);
    } catch (err) {
      console.error("❌ Lỗi khi lấy đơn hàng:", err);
      setOrders([]);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [selectedTab]);

  const currentTab = tabs.find((t) => t.label === selectedTab);
  const filteredOrders = orders
    .filter(
      (order) =>
        currentTab?.status === null || order.status === currentTab.status
    )
    .filter((order) =>
      order.orderDetails?.some((d) =>
        d.product.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );

  return (
    <div className="order-container">
      <ul className="order-tabs">
        {tabs.map((tab) => (
          <li
            key={tab.label}
            className={`order-tabs__item ${selectedTab === tab.label ? "active" : ""
              }`}
            onClick={() => setSelectedTab(tab.label)}
          >
            {tab.label}
          </li>
        ))}
      </ul>

      <div className="order-search-bar">
        <input
          type="text"
          placeholder="Tìm theo tên sản phẩm..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {filteredOrders.map((order, i) => (
        <div className="order-item" key={i}>
          <div className="order-status-bar">
            <div className="order-status-left">
              <span className="label-love">Yêu thích</span>
              <strong>Topick Global</strong>
              <button className="btn btn-outline btn-chat">🗨 Chat</button>
              <button className="btn btn-outline btn-shop">🛒 Xem Shop</button>
            </div>
            <div className="order-status-right">
              <span className="delivery-status">
              </span>
              <span className="order-status-label">
                {statusMap[order.status]?.label || "Không rõ trạng thái"}

              </span>
            </div>
          </div>

          {order.orderDetails.map((detail, j) => (
            <div className="order-product-row" key={j}>
              <img
                src={`http://localhost:3000/uploads/${detail.product.image}`}
                alt="thumb"
                className="product-thumb"
              />
              <div className="product-main">
                <div className="product-title">{detail.product.name}</div>
                <div className="product-sub">
                  Phân loại hàng: {detail.variant || "Mặc định"}
                </div>
                <div className="product-sub">x{detail.quantity}</div>

              </div>

              <div className="product-price">
                {detail.product.price !== detail.price &&
                  detail.product.price &&
                  !isNaN(detail.product.price) && (
                    <span className="price-old">
                      ₫{formatCurrency(detail.product.price)}
                    </span>
                  )}
                <span className="price-new">
                  ₫{formatCurrency(detail.price)}
                </span>
              </div>
            </div>
          ))}

          {/* Tổng đơn hàng và các hành động */}
          <div className="product-total">
            Thành tiền: <span className="highlight">₫{formatCurrency(order.total_price)}</span>
          </div>

          <div className="product-sub mt-2">
            Đánh giá sản phẩm trước <span className="evaluate-date">{getReviewDeadline(order.createdAt)}</span>
            <br />
            <span className="evaluate-promo">Đánh giá ngay và nhận 200 Xu</span>
          </div>

          <div className="order-action-row">
            <button className="btn btn-outline btn-refund">Yêu Cầu Trả Hàng/Hoàn Tiền</button>
            <button className="btn btn-outline btn-more">Thêm</button>
          </div>


          <div className="product-total">
            Thành tiền: <span className="highlight">₫{formatCurrency(order.total_price)}</span>
          </div>

          <div className="product-sub mt-2">
            Đánh giá sản phẩm trước <span className="evaluate-date">{getReviewDeadline(order.createdAt)}</span>
            <br />
            <span className="evaluate-promo">Đánh giá ngay và nhận 200 Xu</span>
          </div>

          <div className="order-action-row">
            {isReviewAvailable(order.createdAt) && order.orderDetails && order.orderDetails.length > 0 && (
              <div className="review-buttons">
                {/* Phương án 1: Nút đánh giá cho từng sản phẩm */}
                {order.orderDetails.map((detail, index) => (
                  <button 
                    key={index}
                    className="btn btn-primary bg-blue-500 text-danger px-4 py-2 rounded mr-2"
                    onClick={() => {
                      console.log("Product ID:",detail.idProduct) ;
                      handleOpenModal(detail.idProduct,  order.userId);

                    }}
                  >
                    Đánh Giá
                    
                  </button>
                ))}
                
              </div>
            )}
            <button className="btn btn-outline btn-refund">Yêu Cầu Trả Hàng/Hoàn Tiền</button>
            <button className="btn btn-outline btn-more">Thêm</button>
          </div>
        </div>
      ))}
      <ReviewModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        productId={selectedProduct?.productId}
        userId={selectedProduct?.userId}
      />

    </div>

  );
};

export default OrderList;