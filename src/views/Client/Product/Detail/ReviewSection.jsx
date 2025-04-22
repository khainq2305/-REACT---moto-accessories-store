import React, { useEffect, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { commentServices } from "../../../../services/commentServices";
import DEFAULT_IMAGE from '../../../../config/apiEndpoint'
const ReviewSection = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchReviews = async () => {
  try {
    const response = await commentServices.getCommentsByProduct(productId);
    console.log(response); // Kiểm tra xem API trả về gì

    // Kiểm tra nếu phản hồi có success và comments là một mảng
    if (response.success && Array.isArray(response.comments)) {
      setReviews(response.comments); // Cập nhật reviews
    } else {
      setError("Dữ liệu bình luận không hợp lệ"); // Nếu không đúng định dạng
      console.log("Lỗi dữ liệu bình luận:", response.comments);
    }
  } catch (err) {
    setError("Lỗi khi tải bình luận");
    console.error("Lỗi:", err); // In lỗi nếu có vấn đề trong việc gọi API
  } finally {
    setLoading(false); // Cập nhật trạng thái loading sau khi hoàn thành
  }
};

  useEffect(() => {
     fetchReviews();
  }, [productId]);

  if (loading) {
    return <div>Đang tải bình luận...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Row className="bg-white p-4 mt-4">
      <h5 className="fw-bold mb-3">ĐÁNH GIÁ SẢN PHẨM</h5>

      {/* Tổng sao + bộ lọc */}
      <div className="border p-3 rounded mb-4">
        <div className="d-flex gap-4 flex-wrap align-items-center justify-content-between">
          <div style={{ minWidth: 140 }} className="d-flex flex-column align-items-center justify-content-center">
            <div className="text-danger fw-bold" style={{ fontSize: "32px" }}>
              4.9 <span className="text-muted" style={{ fontSize: "16px" }}>trên 5</span>
            </div>
            <div className="text-danger fs-5" style={{ fontSize: "20px" }}>★★★★★</div>
          </div>

          <div className="d-flex flex-column gap-2" style={{ flex: 1 }}>
            <div className="d-flex flex-wrap gap-2">
              {["Tất Cả", "5 Sao (45,2k)", "4 Sao (2,1k)", "3 Sao (631)", "2 Sao (208)", "1 Sao (420)"].map(
                (label, idx) => (
                  <button
                    key={idx}
                    style={{
                      padding: "6px 16px",
                      fontSize: "14px",
                      borderRadius: "4px",
                      border: idx === 0 ? "1px solid #ee4d2d" : "1px solid #ccc",
                      color: idx === 0 ? "#ee4d2d" : "#333",
                      backgroundColor: idx === 0 ? "#fff6f5" : "#fff",
                      fontWeight: idx === 0 ? "600" : "normal",
                      minWidth: "fit-content",
                    }}
                  >
                    {label}
                  </button>
                )
              )}
            </div>
            <div className="d-flex flex-wrap gap-2">
              {["Có Bình Luận (28,6k)", "Có Hình Ảnh / Video (13,9k)"].map((label, idx) => (
                <button
                  key={idx}
                  style={{
                    padding: "6px 16px",
                    fontSize: "14px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    color: "#333",
                    backgroundColor: "#fff",
                    minWidth: "fit-content",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Danh sách bình luận */}
      {reviews.length === 0 ? (
        <div>Chưa có bình luận nào.</div>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className="mb-4">
            <div className="d-flex align-items-center mb-3">
              <div
                className="rounded-circle bg-light me-2"
                style={{ width: "40px", height: "40px" }}
              ></div>
              <div>
                <strong className="mb-2">{review.user || "Ẩn danh"}</strong>
                <div className="text-warning mb-2">
                  {"★".repeat(review.rating || 5) + "☆".repeat(5 - (review.rating || 5))}
                </div>
                <div className="text-muted mb-2" style={{ fontSize: "13px" }}>
                  {review.date || "Không xác định"}
                </div>
                <div className="text-muted mb-2" style={{ fontSize: "13px" }}>
                  Độ tuổi sử dụng: <strong className="text-dark">{review.age || "Không xác định"}</strong>
                </div>
              </div>
            </div>

            <p className="mb-3">{review.content || "Không có nội dung"}</p>

            <div className="d-flex flex-wrap gap-2 mb-3">
              {(review.images || []).map((image, idx) => (
                <Image key={idx} src={image} thumbnail width={60} onError={(e) => e.target.src = DEFAULT_IMAGE}/>
              ))}
            </div>

            <div
              className="bg-light rounded p-3 text-muted mb-2"
              style={{ fontSize: "14px", marginTop: "16px" }}
            >
              <strong className="d-block text-dark mb-1">Phản Hồi Của Người Bán</strong>
              {review.sellerResponse || "Chưa có phản hồi"}
            </div>

            <div className="text-muted" style={{ fontSize: "13px", marginTop: "8px" }}>
              👍 {review.likes || 0}
            </div>
          </div>
        ))
      )}
    </Row>
  );
};

export default ReviewSection;