import { Row, Col, Image, Badge } from 'react-bootstrap';

const DescriptionSection = () => {
    return ( <Row className="bg-white p-4 mt-4">
        <h2 className="fw-bold mb-3">MÔ TẢ SẢN PHẨM</h2>
        <Col style={{ fontSize: '15px', lineHeight: '1.8', color: '#333' }}>
          <p style={{ marginBottom: '20px' }}>
            Sữa Bột Pha Sẵn GrowPLUS+ Ít đường 110ml trên 1 tuổi (Thùng)<br />
            Nutifood GrowPLUS+ Nhãn hiệu Sữa trẻ em với công thức FDI độc quyền
            nghiên cứu bởi Viện Nghiên Cứu Dinh Dưỡng Nutifood Thụy Điển, xây dựng nền
            tảng “Đề Kháng Khỏe, Tiêu Hóa Tốt”, với bộ đôi HMO + FOS và tăng cường gấp 2 lần DHA.
          </p>
        
          <h3 className="fw-bold mt-4 mb-2">SẢN PHẨM ĐÃ ĐƯỢC CHỨNG NHẬN LÂM SÀNG</h3>
          <ul className="mb-4">
            <li>Giúp bé tăng cân, tăng chiều cao sau 3 tháng</li>
            <li>Giúp giảm 45,9% tỷ lệ biếng ăn</li>
            <li>Giúp giảm tỷ lệ nhiễm khuẩn hô hấp</li>
            <li>Được 93,4% mẹ tin dùng</li>
          </ul>
        
          <h3 className="fw-bold mt-4 mb-2">LỢI ÍCH</h3>
          <ul className="mb-4">
            <li>Hấp thu tốt, giúp trẻ tăng cân</li>
            <li>Giúp tăng chiều cao</li>
            <li>Phát triển não bộ</li>
            <li>Tăng cường sức đề kháng</li>
            <li>Tiêu hóa tốt, ngăn ngừa táo bón</li>
          </ul>
        
          <h3 className="fw-bold mt-4 mb-2">THÀNH PHẦN</h3>
          <p className="mb-4">Xem trên bao bì</p>
        
          <h3 className="fw-bold mt-4 mb-2">HƯỚNG DẪN SỬ DỤNG</h3>
          <ul className="mb-0">
            <li>Ngon hơn khi uống lạnh.</li>
            <li>Sản phẩm sử dụng cho 1 lần uống.</li>
            <li>Nên dùng 3-4 hộp/ngày hoặc theo hướng dẫn của bác sĩ.</li>
            <li>Lắc đều trước khi sử dụng</li>
          </ul>
        </Col>
        
        </Row>);
  };
  
  export default DescriptionSection;
  