import Carousel from 'react-bootstrap/Carousel';

export default function ShopeeMainBanner() {
  return (
    <div style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        backgroundColor: '#ccc',
        padding: '24px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}></div>
        {/* Banner Slider */}
        <div className="container py-3">
          <div className="row g-3">
            <div className="col-md-8">
              <Carousel fade controls indicators interval={3000}>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded"
                    src="https://cf.shopee.vn/file/sg-11134258-7rd53-m7qcd1493itf9e_xxhdpi"
                    alt="Slide 1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded"
                    src="https://cf.shopee.vn/file/sg-11134258-7rd5j-m7t1a2mcqdj713_xxhdpi"
                    alt="Slide 2"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded"
                    src="https://cf.shopee.vn/file/sg-11134258-7rd3q-m7u9hgdk18dja4_xxhdpi"
                    alt="Slide 3"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded"
                    src="https://cf.shopee.vn/file/sg-11134258-7rd3o-m7t7az042l1fb1_xxhdpi"
                    alt="Slide mới"
                  />
                </Carousel.Item>
              </Carousel>

            </div>

            <div className="col-md-4 d-flex flex-column gap-2">
              <img
                src="https://cf.shopee.vn/file/sg-11134258-7rd3z-m7u94ozab0541c_xhdpi"
                alt="Banner 2"
                className="w-100 rounded"
              />
              <img
                src="https://cf.shopee.vn/file/sg-11134258-7rd4a-m7u94px4xgu00c_xhdpi"
                alt="Banner 3"
                className="w-100 rounded"
              />
            </div>
          </div>
        </div>

        {/* Icon section */}
        <div className="container py-3 border-top">
          <div className="d-flex justify-content-center flex-wrap text-center gap-3">
            {[
              { icon: 'https://cf.shopee.vn/file/vn-50009109-5bf65d4dc0eb8f6b42074751e8b736a7_xhdpi', label: 'Hàng Chọn Giá Hời' },
              { icon: 'https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi', label: 'Mã Giảm Giá' },
              { icon: 'https://cf.shopee.vn/file/vn-50009109-c7a2e1ae720f9704f92f72c9ef1a494a_xhdpi', label: 'Miễn Phí Ship' },
              { icon: 'https://cf.shopee.vn/file/vn-50009109-c02353c969d19918c53deaa4ea15bdbe_xhdpi', label: 'Shopee Style 30%' },
              { icon: 'https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi', label: 'Voucher Giảm Đến 1 Triệu' },
              { icon: 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi', label: 'Khung Giờ Săn Sale' },
              { icon: 'https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi', label: 'Hàng Quốc Tế' },
              { icon: 'https://cf.shopee.vn/file/vn-11134258-7ra0g-m6ow0co1pmqgd6_xhdpi', label: 'Nạp Thẻ, Dịch Vụ & Hóa Đơn' },
            ].map((item, index) => (
              <div key={index} style={{ width: '100px' }}>
                <img
                  src={item.icon}
                  alt={item.label}
                  className="mb-2"
                  style={{ width: '36px', height: '36px' }}
                />
                <div style={{ fontSize: '12px' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
