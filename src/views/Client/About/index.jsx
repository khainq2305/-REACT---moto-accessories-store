import React from 'react';

const HomepageSection = () => {
  return (
    <>
      <div className="banner-introduce">
        <img
          src="https://www.honda.com.vn/images/trung-tam-dao-tao/gioi-thieu-trung-tam-dao-tao-training_activities.jpg"
          alt="Banner"
          className="slide__image"
        />
      </div>

      <section className="brand-introduction">
        <div className="main-container">
          <div className="content">
            <div className="image-container">
              <img src="https://cdn.honda.com.vn/news-honda/November2024/0Ep0AnVwTFtWzpNhiaZJ.jpg" alt="Ảnh giới thiệu" />
            </div>
            <div className="text-content">
              <h2>TỪ ĐAM MÊ, CHÚNG TÔI TẠO RA CHẤT LƯỢNG</h2>
              <p>
                Trải qua nhiều năm gắn bó với lĩnh vực thể thao, chúng tôi tự hào mang đến cho bạn những sản phẩm chất lượng cao nhất...
              </p>
              <p>
                Chúng tôi tin rằng mỗi sản phẩm thể thao đều là một trợ thủ đắc lực, giúp bạn nâng cao hiệu suất và duy trì lối sống năng động...
              </p>
              <a href="/sanpham"><button className="cta-button">Khám phá ngay</button></a>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-introduction">
        <div className="main-container">
          <div className="content reverse">
            <div className="text-content">
              <h2>CHẤT LƯỢNG TỪ TÂM, ĐỒNG HÀNH CÙNG ĐAM MÊ THỂ THAO</h2>
              <p>
                ComfortWear là đơn vị chuyên cung cấp các sản phẩm thể thao chất lượng cao, từ các thương hiệu uy tín...
              </p>
              <p>
                Hãy đến với chúng tôi để khám phá các sản phẩm thể thao hiện đại, đáp ứng mọi nhu cầu từ luyện tập đến thi đấu...
              </p>
              <a href="/sanpham"><button className="cta-button">Khám phá thêm</button></a>
            </div>
            <div className="image-container">
              <img src="https://cdn.honda.com.vn/news-honda/September2024/pP9sxUHicUOadvlR5XiF.jpg" alt="Giới thiệu 2" />
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="main-container">
          <h2 className="why-choose__title">
            Tại sao bạn nên chọn cửa hàng của
            <span className="why-choose__highlight"> Savor House</span>
          </h2>
          <div className="why-choose__items">
            <div className="why-choose__item">
              <i className="why-choose__icon fas fa-truck"></i>
              <h3 className="why-choose__item-title">Giao hàng nhanh chóng</h3>
              <p className="why-choose__item-description">Giao hàng từ 30-40 phút kể từ lúc đặt hàng</p>
            </div>
            <div className="why-choose__item">
              <i className="why-choose__icon fas fa-award"></i>
              <h3 className="why-choose__item-title">Sản phẩm chất lượng</h3>
              <p className="why-choose__item-description">Sản phẩm uy tín, chất lượng đến từ nhà Savor House</p>
            </div>
            <div className="why-choose__item">
              <i className="why-choose__icon fas fa-phone"></i>
              <h3 className="why-choose__item-title">Hỗ trợ nhiệt tình</h3>
              <p className="why-choose__item-description">Hỗ trợ và lắng nghe ý kiến khách hàng</p>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy">
        <div className="main-container">
          <h2 className="philosophy__title">Triết lý kinh doanh</h2>
          <div className="philosophy__items">
            {[
              {
                title: "Khái niệm thương hiệu",
                desc: "Thông qua các sản phẩm được lựa chọn cẩn thận và dịch vụ đổi mới...",
                img: "https://website.hdlcdns.com/website/image/ed47fa792a92413183769f2f4ef4cbad-600-360.png",
              },
              {
                title: "Tầm nhìn thương hiệu",
                desc: "Giao tiếp là điều cần thiết giữa con người...",
                img: "https://images.pexels.com/photos/7643867/pexels-photo-7643867.jpeg",
              },
              {
                title: "Dịch vụ đặc biệt",
                desc: "Chúng tôi cam kết mang đến dịch vụ đặc biệt...",
                img: "https://website.hdlcdns.com/website/image/4014a49397e0455781021c9a9f6e0736-600-360.png",
              },
              {
                title: "Cam kết tận tâm",
                desc: "Tại Morning Fruit, chúng tôi luôn có chính sách bảo hành linh động...",
                img: "https://website.hdlcdns.com/website/image/23b726523994467bb032da1b8eb2887a-600-360.jpg",
              },
            ].map((item, index) => (
              <div className="philosophy__item" key={index}>
                <div className="philosophy__item-inner">
                  <div className="philosophy__image">
                    <img src={item.img} alt={item.title} />
                    <p className="philosophy__caption">{item.title}</p>
                  </div>
                  <div className="philosophy__text-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomepageSection;
