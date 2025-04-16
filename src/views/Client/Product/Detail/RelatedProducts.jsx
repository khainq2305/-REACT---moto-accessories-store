import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Badge } from 'react-bootstrap';

const RelatedProducts = () => {
  return (
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
  );
};

export default RelatedProducts;
