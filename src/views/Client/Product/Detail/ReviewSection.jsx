import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const ReviewSection = () => {
  return (
    <Row className="bg-white p-4 mt-4">
    <h5 className="fw-bold mb-3">ĐÁNH GIÁ SẢN PHẨM</h5>
    
    {/* Tổng sao + bộ lọc */}
    <div className="border p-3 rounded mb-4">
      <div className="d-flex gap-4 flex-wrap align-items-center justify-content-between">
        {/* Bên trái: Tổng sao 4.9 trên 5 */}
        <div style={{ minWidth: 140 }} className="d-flex flex-column align-items-center justify-content-center">
          <div className="text-danger fw-bold" style={{ fontSize: '32px' }}>
            4.9 <span className="text-muted" style={{ fontSize: '16px' }}>trên 5</span>
          </div>
          <div className="text-danger fs-5" style={{ fontSize: '20px' }}>★★★★★</div>
        </div>
    
        {/* Bên phải: Filter đánh giá chia 2 hàng */}
        <div className="d-flex flex-column gap-2" style={{ flex: 1 }}>
          <div className="d-flex flex-wrap gap-2">
            {[
              'Tất Cả',
              '5 Sao (45,2k)',
              '4 Sao (2,1k)',
              '3 Sao (631)',
              '2 Sao (208)',
              '1 Sao (420)',
            ].map((label, idx) => (
              <button
                key={idx}
                style={{
                  padding: '6px 16px',
                  fontSize: '14px',
                  borderRadius: '4px',
                  border: idx === 0 ? '1px solid #ee4d2d' : '1px solid #ccc',
                  color: idx === 0 ? '#ee4d2d' : '#333',
                  backgroundColor: idx === 0 ? '#fff6f5' : '#fff',
                  fontWeight: idx === 0 ? '600' : 'normal',
                  minWidth: 'fit-content'
                }}
              >
                {label}
              </button>
            ))}
          </div>
    
          <div className="d-flex flex-wrap gap-2">
            {[
              'Có Bình Luận (28,6k)',
              'Có Hình Ảnh / Video (13,9k)'
            ].map((label, idx) => (
              <button
                key={idx}
                style={{
                  padding: '6px 16px',
                  fontSize: '14px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  color: '#333',
                  backgroundColor: '#fff',
                  minWidth: 'fit-content'
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    
    {/* 1 đánh giá */}
    <div className="mb-4">
      {/* Avatar + info */}
      <div className="d-flex align-items-center mb-3">
        <div
          className="rounded-circle bg-light me-2"
          style={{ width: '40px', height: '40px' }}
        ></div>
        <div>
          <strong className='mb-2'>m*****2</strong>
          <div className="text-warning mb-2">★★★★★</div>
          <div className="text-muted mb-2" style={{ fontSize: '13px' }}>2023-12-14 19:03</div>
          <div className="text-muted mb-2" style={{ fontSize: '13px' }}>
            Độ tuổi sử dụng: <strong className="text-dark">trên 2t</strong>
          </div>
        </div>
      </div>
    
      {/* Nội dung bình luận */}
      <p className="mb-3">
        Giao hàng nhanh, đóng gói kỹ, có quà tặng kèm theo. Date xa, có chương trình thẻ cào trúng thưởng.
      </p>
    
      {/* Ảnh sản phẩm */}
      <div className="d-flex flex-wrap gap-2 mb-3">
        {[...Array(5)].map((_, i) => (
          <Image
            key={i}
            src="https://down-vn.img.susercontent.com/file/vn-11134201-7ra0g-m7rdzzgrw2pyca@resize_w900_nl.webp"
            thumbnail
            width={60}
          />
        ))}
      </div>
    
      {/* Phản hồi người bán */}
      <div
        className="bg-light rounded p-3 text-muted mb-2"
        style={{ fontSize: '14px', marginTop: '16px' }}
      >
        <strong className="d-block text-dark mb-1">Phản Hồi Của Người Bán</strong>
        Chào bạn, cảm ơn bạn đã chọn mua sản phẩm Thùng Sữa Bột Pha Sẵn Nutifood GrowPLUS+ ít đường...
        GrowPlus sẽ luôn cố gắng cải thiện chất lượng để đem lại trải nghiệm tốt nhất cho khách hàng.
        Rất mong tiếp tục nhận được sự ủng hộ của bạn trong thời gian sắp tới.
      </div>
    
      {/* Lượt thích */}
      <div className="text-muted" style={{ fontSize: '13px', marginTop: '8px' }}>👍 52</div>
    </div>
    
    </Row>
  );
};

export default ReviewSection;
