

const ContactPage = () => {
  return (
    <div className="main-container">
    <div className="container__content">
      <section className="breadcrumbs">
        <p className="breadcrumbs__path">Trang chủ / Liên hệ</p>
      </section>

      <section className="contact">
        <div className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d31433.16943385829!2d105.74979959307515!3d10.004781816439392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x31a08906415c355f%3A0x416815a99ebd841e!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYywgVG_DoCBuaMOgIEZQVCBQb2x5dGVjaG5pYywgxJAuIFPhu5EgMjIsIFRoxrDhu51uZyBUaOG6oW5oLCBDw6FpIFLEg25nLCBD4bqnbiBUaMahLCBWaeG7h3QgTmFt!3m2!1d9.982104399999999!2d105.758276!5e0!3m2!1svi!2s!4v1730388994579!5m2!1svi!2s"
            width="1440"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>

        <div className="contact__wrapper">
          <div className="contact__info">
            <h1 className="contact__info-title">Thông Tin Liên Hệ</h1>
            <ul className="contact__info-list">
              <li className="contact__info-item">
                <span className="contact__info-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <p className="contact-text">
                  FPT POLYTECHNIC, KDC Hoàng Quân, phường Thường Thạnh, quận Cái Răng, Cần Thơ
                </p>
              </li>
              <li className="contact__info-item">
                <span className="contact__info-icon">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <p className="contact__text">khainqpc08388@gmail.com</p>
              </li>
              <li className="contact__info-item">
                <span className="contact__info-icon">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <p className="contact__text">0878999894</p>
              </li>
              <li className="contact__info-item">
                <span className="contact__info-icon">
                  <i className="fa-solid fa-clock"></i>
                </span>
                <p className="contact__text">Thứ 2 đến Chủ nhật từ 8h đến 20h</p>
              </li>
            </ul>
          </div>

          <div className="contact__form">
            <h1 className="contact__form-title">Tư Vấn Quà Tặng Doanh Nghiệp</h1>
            <p className="contact__form-description">
              Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể.
            </p>
            <form>
              <div className="contact__form-group">
                <input type="text" className="contact__form-input" placeholder="Tên của bạn" />
              </div>
              <div className="contact__form-group dflex">
                <input type="email" className="contact__form-input" placeholder="Email" />
                <input type="text" className="contact__form-input" placeholder="SDT của bạn" />
              </div>
              <div className="contact__form-group">
                <textarea className="contact__form-textarea" placeholder="Nội dung"></textarea>
              </div>
              <div className="contact__form-group">
                <button type="submit" className="contact__form-button">
                  Gửi cho chúng tôi
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
  );
};

export default ContactPage;
