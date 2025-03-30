import React from 'react';

const StorePage = () => {
  return (
    <>
      <div className="store-banner">
        <img
          src="https://www.honda.com.vn/images/trung-tam-dao-tao/gioi-thieu-trung-tam-dao-tao-training_activities.jpg"
          alt="Banner - Fresh Fruit Store"
          className="store-banner__image"
        />
        <div className="store-banner__content">
          <h1>Phong cách, chất lượng, và đam mê thể thao!</h1>
          <p>Cùng bạn bứt phá mọi giới hạn – Dẫn đầu hành trình mới!</p>
        </div>
      </div>

      <div className="main-container">
        <div className="store">
          <div className="store__sidebar">
            <h2 className="store__sidebar-title">Theo khu vực</h2>
            <ul className="store__sidebar-list">
              <li className="store__sidebar-item store__sidebar-item--active">Ho Chi Minh City (53)</li>
              <li className="store__sidebar-item">Hanoi (32)</li>
              <li className="store__sidebar-item">Hai Phong (3)</li>
              <li className="store__sidebar-item">Tay Ninh (2)</li>
              <li className="store__sidebar-item">Nha Trang (3)</li>
              <li className="store__sidebar-item">Ba Ria Vung Tau (1)</li>
              <li className="store__sidebar-item">Dong Nai (1)</li>
              <li className="store__sidebar-item">Hung Yen (1)</li>
              <li className="store__sidebar-item">Binh Duong (1)</li>
              <li className="store__sidebar-item">Tien Giang (1)</li>
            </ul>
          </div>

          <section className="store__listings">
            <div className="store__listings-cards">
              {[1, 2, 3, 4].map((_, i) => (
                <div className="store-card" key={i}>
                  <img
                    src={`https://yamaha-motor.com.vn/wp/wp-content/uploads/2024/08/Thumb-1-768x432.jpg`}
                    alt="Store Image"
                    className="store-card__image"
                  />
                  <h3 className="store-card__name">Đỉnh cao phong cách – Khẳng định cá tính của bạn!</h3>
                  <a href="#" className="store-card__view-map">Xem vị trí cửa hàng</a>
                  <p className="store-card__address">123 Đường Trái Cây, Quận 1, Thành phố Hồ Chí Minh</p>
                  <p className="store-card__time">8:00 - 20:00</p>
                  <div className="store-card__features">
                    <span className="store-card__feature"><i className="fas fa-car"></i> Có chỗ đỗ xe hơi</span>
                    <span className="store-card__feature"><i className="fas fa-child"></i> Thân thiện</span>
                    <span className="store-card__feature"><i className="fas fa-shopping-bag"></i> Mua mang về</span>
                  </div>
                  <div className="store-card__share">
                    <span>Share on:</span>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-zalo"></i>
                    <i className="fas fa-copy"></i>
                    <i className="fas fa-link"></i>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default StorePage;