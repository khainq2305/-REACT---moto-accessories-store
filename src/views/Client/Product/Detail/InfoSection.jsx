import { Row, Col, Image, Badge } from 'react-bootstrap';

const InfoSection = () => {
    return (
      <Row className="bg-white p-4 mt-4">
        <h2 className="fw-bold mb-4">CHI TIẾT SẢN PHẨM</h2>
        <Row className="bg-white p-4 mt-4">
          <h2 className="fw-bold mb-4">CHI TIẾT SẢN PHẨM</h2>

          <Col md={3} className="text-muted fw-semibold mb-2">Danh Mục</Col>
          <Col md={9} className="mb-2 text-primary">Shopee &gt; Bách Hóa Online &gt; Sữa - trứng &gt; Sữa</Col>

          <Col md={3} className="text-muted fw-semibold mb-2">Số lượng hàng khuyến mãi</Col>
          <Col md={9} className="mb-2">95</Col>

          <Col md={3} className="text-muted fw-semibold mb-2">Số sản phẩm còn lại</Col>
          <Col md={9} className="mb-2">1665</Col>

          <Col md={3} className="text-muted fw-semibold mb-2">Thương hiệu</Col>
          <Col md={9} className="mb-2 text-primary">GROWPLUS</Col>

          <Col md={3} className="text-muted fw-semibold mb-2">Gửi từ</Col>
          <Col md={9} className="mb-2">Bình Dương</Col>
        </Row>
      </Row>
    );
  };
  
  export default InfoSection;
  