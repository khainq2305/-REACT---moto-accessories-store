import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
const variants = [
 
  {
    label: 'XÁM-BỘ 2pin10 CELL',
    img: 'https://down-vn.img.susercontent.com/file/a47fad230034db8ea8439d879c3cfb49.webp',
  },
  {
    label: 'XÁM-BỘ 2pin10 CELL',
    img: 'https://down-vn.img.susercontent.com/file/a47fad230034db8ea8439d879c3cfb49.webp',
  },
  {
    label: 'XÁM-BỘ 2pin10 CELL',
    img: 'https://down-vn.img.susercontent.com/file/a47fad230034db8ea8439d879c3cfb49.webp',
  },
];

const ProductDetail = () => {
  return (
    <div className="bg-light py-4">
      <Container style={{ maxWidth: '1200px', background: 'none' }}>
        {/* Top Section */}
        <Row className="bg-white p-4">
          <Col md={5}>
            <Image
              src="https://down-vn.img.susercontent.com/file/vn-11134201-7ra0g-m7rdzzgrw2pyca@resize_w900_nl.webp"
              fluid
              className="border mb-3"
              alt="Product"
            />
            <div className="d-flex justify-content-between">
              <Image
                src="https://down-vn.img.susercontent.com/file/vn-11134201-7ra0g-m7rdzzgrw2pyca@resize_w900_nl.webp"
                thumbnail
                width={90}
                height={90}
                alt="thumb"
              />
              <Image
                src="https://down-vn.img.susercontent.com/file/vn-11134201-7ra0g-m7rdzzgrw2pyca@resize_w900_nl.webp"
                thumbnail
                width={90}
                height={90}
                alt="thumb"
              />
              <Image
                src="https://down-vn.img.susercontent.com/file/vn-11134201-7ra0g-m7rdzzgrw2pyca@resize_w900_nl.webp"
                thumbnail
                width={90}
                height={90}
                alt="thumb"
              />
              <Image
                src="https://down-vn.img.susercontent.com/file/vn-11134201-7ra0g-m7rdzzgrw2pyca@resize_w900_nl.webp"
                thumbnail
                width={90}
                height={90}
                alt="thumb"
              />
              <Image
                src="https://down-vn.img.susercontent.com/file/vn-11134201-7ra0g-m7rdzzgrw2pyca@resize_w900_nl.webp"
                thumbnail
                width={90}
                height={90}
                alt="thumb"
              />
            </div>
          </Col>

          <Col md={7} className="text-start" style={{ fontSize: '14px', color: '#222' }}>

            {/* Tiêu đề sản phẩm */}
            <h4 className="fw-bold mb-3" style={{ fontSize: '20px', lineHeight: '28px' }}>
              <Badge bg="danger" className="me-2">Yêu Thích+</Badge>
              Máy siết bulong pin WORKFIX WF-IW650N, Động cơ Không chổi than, Lực siết 650Nm, 4 tốc độ
            </h4>

            {/* Đánh giá */}
            <div className="d-flex align-items-center mb-4">
              <div className="text-warning me-2 fs-5">★★★★★</div>
              <span className="text-dark fw-semibold me-4">469 Đánh Giá</span>
              <span className="text-dark fw-semibold">778 Sold</span>
            </div>

            {/* Giá */}
            <div className="bg-light py-3 px-4 mb-4 rounded d-flex align-items-center gap-4">
              <h3 className="text-danger fw-bold mb-0" style={{ fontSize: '24px' }}>₫685.000 - ₫1.449.000</h3>
              <div className="text-muted text-decoration-line-through" style={{ fontSize: '14px' }}>₫980.000 - ₫2.072.000</div>
              <Badge bg="light" text="danger" className="border border-danger px-2 py-1">-30%</Badge>
            </div>

            {/* Vận chuyển */}
            <div className="mb-3">
              <strong>Vận Chuyển:</strong>{' '}
              <span className="text-success fw-semibold">Nhận vào 3 Th04, phí giao ₫0</span><br />
              <small className="text-muted">Tặng Voucher ₫15.000 nếu đơn giao sau thời gian trên.</small>
            </div>

            {/* Chính sách an tâm */}
            <div className="mb-4 text-muted">
              <span className="text-danger fw-semibold">Trả hàng miễn phí 15 ngày</span> · Bảo hiểm bảo vệ người tiêu dùng
            </div>

            {/* Lựa chọn */}
            <div className="mb-4">
              <strong className="d-block mb-2">Lựa Chọn:</strong>
              <div className="d-flex flex-wrap gap-2">
  {variants.map((item, idx) => (
    <button
      key={idx}
      className="d-flex align-items-center rounded px-3 py-2"
      style={{
        border: idx === 0 ? '1px solid red' : '1px solid #ccc',
        color: idx === 0 ? 'red' : '#333',
        backgroundColor: '#fff',
        fontWeight: '500',
        fontSize: '14px',
        minWidth: '200px',
      }}
    >
      <img
        src={item.img}
        alt="icon"
        width="24"
        height="24"
        className="me-2"
    
      />
      {item.label}
    </button>
  ))}
</div>

            </div>

            {/* Số lượng */}
            <div className="d-flex align-items-center gap-2 mb-4" style={{ fontSize: '14px' }}>
              <label className="fw-semibold mb-0" style={{ minWidth: '70px' }}>Số Lượng</label>

              <div className="d-flex align-items-center border rounded overflow-hidden" style={{
                height: '36px',
                width: '110px'
              }}>
                <button
                  className="border-0 bg-light"
                  style={{
                    width: '36px',
                    height: '100%',
                    fontSize: '14px'
                  }}
                >-</button>

                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  className="text-center border-0"
                  style={{
                    width: '38px',
                    height: '100%',
                    fontSize: '14px',
                    color: 'red',
                    outline: 'none'
                  }}
                />

                <button
                  className="border-0 bg-light"
                  style={{
                    width: '36px',
                    height: '100%',
                    fontSize: '14px'
                  }}
                >+</button>
              </div>

              <span className="text-muted ms-2">1095 sản phẩm có sẵn</span>
            </div>

            {/* Nút hành động */}
            <div className="d-flex flex-wrap align-items-center gap-3 mt-2">
              <button
                className="d-flex align-items-center justify-content-center"
                style={{
                  border: '1px solid #ee4d2d',
                  color: '#ee4d2d',
                  backgroundColor: '#fff',
                  fontSize: '16px',
                  fontWeight: 600,
                  padding: '12px 24px',
                  borderRadius: '2px',
                  lineHeight: 1.5
                }}
              >
                🛒 Thêm Vào Giỏ Hàng
              </button>

              <button
                style={{
                  backgroundColor: '#ee4d2d',
                  color: '#fff',
                  border: '1px solid #ee4d2d',
                  fontSize: '16px',
                  fontWeight: 600,
                  padding: '12px 24px',
                  borderRadius: '2px',
                  lineHeight: 1.5
                }}
              >
                Mua Ngay
              </button>
            </div>


          </Col>



        </Row>

        {/* Product Info */}
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
        {/* Description */}
        <Row className="bg-white p-4 mt-4">
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

        </Row>

        {/* Reviews */}
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
        <div className="bg-white p-4 mt-4 rounded shadow-sm">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold" style={{ fontSize: '20px', marginBottom: 0 }}>Các sản phẩm liên quan</h2>
            <a
              href="/tat-ca-san-pham"
              className="btn btn-primary btn-sm d-flex align-items-center gap-1"
              style={{ borderRadius: '4px' }}
            >
              Xem tất cả
              <i className="fas fa-arrow-right"></i>
            </a>

          </div>

          <div id="list-product" className="row sm-gutter">
            <div className="col l-2 m-3 c-6 home-product-item">

              <Link className="home-product-item-link" to="/product/1">

                <div
                  className="home-product-item__img"
                  style={{ backgroundImage: "url('Client/img/home/1.PNG')" }}
                ></div>

                <div className="home-product-item__info">
                  <Link to="/product/1">
                    <h4 className="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                  </Link>
                  <div className="home-product-item__price">
                    <p className="home-product-item__price-old">180.000đ</p>
                    <p className="home-product-item__price-new">200.000đ</p>
                    <i className="home-product-item__ship fas fa-shipping-fast"></i>
                  </div>
                  <div className="home-product-item__footer">
                    <div className="home-product-item__save">
                      <input type="checkbox" name="save-check" id="heart-save" />
                      <label htmlFor="heart-save" className="far fa-heart"></label>
                    </div>
                    <div className="home-product-item__rating-star">
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                    </div>
                    <div className="home-product-item__saled">Đã bán 3,8k</div>
                  </div>
                  <div className="home-product-item__origin">Hà Nội</div>
                  <div className="home-product-item__favourite">
                    Yêu thích
                  </div>
                  <div className="home-product-item__sale-off">
                    <div className="home-product-item__sale-off-value">40%</div>
                    <div className="home-product-item__sale-off-label">GIẢM</div>
                  </div>
                </div>
                <div className="home-product-item-footer">Tìm sản phẩm tương tự</div>
              </Link>
            </div>
            <div className="col l-2 m-3 c-6 home-product-item">
              <Link className="home-product-item-link" to="/product/1">

                <div
                  className="home-product-item__img"
                  style={{ backgroundImage: "url('Client/img/home/2.PNG')" }}
                ></div>

                <div className="home-product-item__info">
                  <h4 className="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                  <div className="home-product-item__price">
                    <p className="home-product-item__price-old">180.000đ</p>
                    <p className="home-product-item__price-new">200.000đ</p>
                    <i className="home-product-item__ship fas fa-shipping-fast"></i>
                  </div>
                  <div className="home-product-item__footer">
                    <div className="home-product-item__save">
                      <input type="checkbox" name="save-check" id="heart-save" />
                      <label htmlFor="heart-save" className="far fa-heart"></label>
                    </div>
                    <div className="home-product-item__rating-star">
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                    </div>
                    <div className="home-product-item__saled">Đã bán 3,8k</div>
                  </div>
                  <div className="home-product-item__origin">Hà Nội</div>
                  <div className="home-product-item__favourite">
                    Yêu thích
                  </div>
                  <div className="home-product-item__sale-off">
                    <div className="home-product-item__sale-off-value">40%</div>
                    <div className="home-product-item__sale-off-label">GIẢM</div>
                  </div>
                </div>
                <div className="home-product-item-footer">Tìm sản phẩm tương tự</div>
              </Link>
            </div>
            <div className="col l-2 m-3 c-6 home-product-item">
              <Link className="home-product-item-link" to="/product/1">

                <div
                  className="home-product-item__img"
                  style={{ backgroundImage: "url('Client/img/home/3.PNG')" }}
                ></div>

                <div className="home-product-item__info">
                  <h4 className="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                  <div className="home-product-item__price">
                    <p className="home-product-item__price-old">180.000đ</p>
                    <p className="home-product-item__price-new">200.000đ</p>
                    <i className="home-product-item__ship fas fa-shipping-fast"></i>
                  </div>
                  <div className="home-product-item__footer">
                    <div className="home-product-item__save">
                      <input type="checkbox" name="save-check" id="heart-save" />
                      <label htmlFor="heart-save" className="far fa-heart"></label>
                    </div>
                    <div className="home-product-item__rating-star">
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                    </div>
                    <div className="home-product-item__saled">Đã bán 3,8k</div>
                  </div>
                  <div className="home-product-item__origin">Hà Nội</div>
                  <div className="home-product-item__favourite">
                    Yêu thích
                  </div>
                  <div className="home-product-item__sale-off">
                    <div className="home-product-item__sale-off-value">40%</div>
                    <div className="home-product-item__sale-off-label">GIẢM</div>
                  </div>
                </div>
                <div className="home-product-item-footer">Tìm sản phẩm tương tự</div>
              </Link>
            </div>
            <div className="col l-2 m-3 c-6 home-product-item">
              <Link className="home-product-item-link" to="/product/1">

                <div
                  className="home-product-item__img"
                  style={{ backgroundImage: "url('Client/img/home/4.PNG')" }}
                ></div>

                <div className="home-product-item__info">
                  <h4 className="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                  <div className="home-product-item__price">
                    <p className="home-product-item__price-old">180.000đ</p>
                    <p className="home-product-item__price-new">200.000đ</p>
                    <i className="home-product-item__ship fas fa-shipping-fast"></i>
                  </div>
                  <div className="home-product-item__footer">
                    <div className="home-product-item__save">
                      <input type="checkbox" name="save-check" id="heart-save" />
                      <label htmlFor="heart-save" className="far fa-heart"></label>
                    </div>
                    <div className="home-product-item__rating-star">
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                    </div>
                    <div className="home-product-item__saled">Đã bán 3,8k</div>
                  </div>
                  <div className="home-product-item__origin">Hà Nội</div>
                  <div className="home-product-item__favourite">
                    Yêu thích
                  </div>
                  <div className="home-product-item__sale-off">
                    <div className="home-product-item__sale-off-value">40%</div>
                    <div className="home-product-item__sale-off-label">GIẢM</div>
                  </div>
                </div>
                <div className="home-product-item-footer">Tìm sản phẩm tương tự</div>
              </Link>
            </div>
            <div className="col l-2 m-3 c-6 home-product-item">
              <Link className="home-product-item-link" to="/product/1">

                <div
                  className="home-product-item__img"
                  style={{ backgroundImage: "url('Client/img/home/5.PNG')" }}
                ></div>

                <div className="home-product-item__info">
                  <h4 className="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                  <div className="home-product-item__price">
                    <p className="home-product-item__price-old">180.000đ</p>
                    <p className="home-product-item__price-new">200.000đ</p>
                    <i className="home-product-item__ship fas fa-shipping-fast"></i>
                  </div>
                  <div className="home-product-item__footer">
                    <div className="home-product-item__save">
                      <input type="checkbox" name="save-check" id="heart-save" />
                      <label htmlFor="heart-save" className="far fa-heart"></label>
                    </div>
                    <div className="home-product-item__rating-star">
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                    </div>
                    <div className="home-product-item__saled">Đã bán 3,8k</div>
                  </div>
                  <div className="home-product-item__origin">Hà Nội</div>
                  <div className="home-product-item__favourite">
                    Yêu thích
                  </div>
                  <div className="home-product-item__sale-off">
                    <div className="home-product-item__sale-off-value">40%</div>
                    <div className="home-product-item__sale-off-label">GIẢM</div>
                  </div>
                </div>
                <div className="home-product-item-footer">Tìm sản phẩm tương tự</div>
              </Link>
            </div>
            <div className="col l-2 m-3 c-6 home-product-item">
              <Link className="home-product-item-link" to="/product/1">

                <div
                  className="home-product-item__img"
                  style={{ backgroundImage: "url('Client/img/home/6.PNG')" }}
                ></div>

                <div className="home-product-item__info">
                  <h4 className="home-product-item__name">Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm nước</h4>
                  <div className="home-product-item__price">
                    <p className="home-product-item__price-old">180.000đ</p>
                    <p className="home-product-item__price-new">200.000đ</p>
                    <i className="home-product-item__ship fas fa-shipping-fast"></i>
                  </div>
                  <div className="home-product-item__footer">
                    <div className="home-product-item__save">
                      <input type="checkbox" name="save-check" id="heart-save" />
                      <label htmlFor="heart-save" className="far fa-heart"></label>
                    </div>
                    <div className="home-product-item__rating-star">
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                      <i className="star-checked far fa-star"></i>
                    </div>
                    <div className="home-product-item__saled">Đã bán 3,8k</div>
                  </div>
                  <div className="home-product-item__origin">Hà Nội</div>
                  <div className="home-product-item__favourite">
                    Yêu thích
                  </div>
                  <div className="home-product-item__sale-off">
                    <div className="home-product-item__sale-off-value">40%</div>
                    <div className="home-product-item__sale-off-label">GIẢM</div>
                  </div>
                </div>
                <div className="home-product-item-footer">Tìm sản phẩm tương tự</div>
              </Link>
            </div>


          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;