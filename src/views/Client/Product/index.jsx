// src/pages/ProductPage.jsx

import { Link } from 'react-router-dom';
const ProductPage = () => {
    return (
        <div className="container">
            <div className="grid wide">
                <div className="row sm-gutter">
                    <div className="col l-2 m-0 c-0">

                        <nav className="category">
                            <h3 className="category-heading">
                                <i className="category-heading-icon fas fa-list-ul"></i>
                                Bộ lọc tìm kiếm
                            </h3>
                            <div className="category-group">
                                <div className="category-group-title">Theo Danh Mục</div>
                                <ul className="category-group-list">
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Thiết bị mạng
                                    </li>
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Chuột và bàn phím
                                    </li>
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        USB
                                    </li>
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Link kiện máy tính
                                    </li>
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Wifi
                                    </li>
                                </ul>
                            </div>
                            <div className="category-group">
                                <div className="category-group-title">Nơi Bán</div>
                                <ul className="category-group-list">
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Hà Nội
                                    </li>
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Hồ Chí Minh
                                    </li>
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Đà Nẵng
                                    </li>
                                </ul>
                            </div>
                            <div className="category-group">
                                <div className="category-group-title">Đơn Vị Vận Chuyển</div>
                                <ul className="category-group-list">
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Hoả tốc
                                    </li>
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Nhanh
                                    </li>
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Tiết kiệm
                                    </li>
                                </ul>
                            </div>
                            <div className="category-group">
                                <div className="category-group-title">Thương Hiệu</div>
                                <ul className="category-group-list">
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Kingston
                                    </li>
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Sandisk
                                    </li>
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Seagate
                                    </li>
                                </ul>
                            </div>
                            <div className="category-group">
                                <div className="category-group-title">Khoảng Giá</div>
                                <div className="category-group-filter">
                                    <input type="number" placeholder="đ TỪ" className="category-group-filter-input" />
                                    <i className="fas fa-arrow-right"></i>
                                    <input type="number" placeholder="đ ĐẾN" className="category-group-filter-input" />
                                </div>
                                <button className="btn btn--primary category-group-filter-btn">Áp dụng</button>
                            </div>
                            <div className="category-group">
                                <div className="category-group-title">Loại Shop</div>
                                <ul className="category-group-list">
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Shoppee
                                    </li>
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Shoppee Mail
                                    </li>
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Shop yêu thích
                                    </li>
                                </ul>
                            </div>
                            <div className="category-group">
                                <div className="category-group-title">Tình Trạng</div>
                                <ul className="category-group-list">
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Mới
                                    </li>
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Đã sử dụng
                                    </li>
                                </ul>
                            </div>
                            <div className="category-group">
                                <div className="category-group-title">Lựa Chọn Thanh Toán</div>
                                <ul className="category-group-list">
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Thanh toán khi nhận hàng
                                    </li>
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Chuyển khoản
                                    </li>
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Trả góp 0%
                                    </li>
                                </ul>
                            </div>
                            <div className="category-group">
                                <div className="category-group-title">Đánh Giá</div>
                                <div className="rating-star">
                                    <input type="checkbox" className="category-group-item-check" />
                                    <i className="star-checked far fa-star"></i>
                                    <i className="star-checked far fa-star"></i>
                                    <i className="star-checked far fa-star"></i>
                                    <i className="star-checked far fa-star"></i>
                                    <i className="star-checked far fa-star"></i>
                                </div>
                                <div className="rating-star">
                                    <input type="checkbox" className="category-group-item-check" />
                                    <i className="star-checked far fa-star"></i>
                                    <i className="star-checked far fa-star"></i>
                                    <i className="star-checked far fa-star"></i>
                                    <i className="star-checked far fa-star"></i>
                                    <i className="star-uncheck far fa-star"></i>
                                </div>
                                <div className="rating-star">
                                    <input type="checkbox" className="category-group-item-check" />
                                    <i className="star-checked far fa-star"></i>
                                    <i className="star-checked far fa-star"></i>
                                    <i className="star-checked far fa-star"></i>
                                    <i className="star-uncheck far fa-star"></i>
                                    <i className="star-uncheck far fa-star"></i>
                                </div>
                                <div className="rating-star">
                                    <input type="checkbox" className="category-group-item-check" />
                                    <i className="star-checked far fa-star"></i>
                                    <i className="star-checked far fa-star"></i>
                                    <i className="star-uncheck far fa-star"></i>
                                    <i className="star-uncheck far fa-star"></i>
                                    <i className="star-uncheck far fa-star"></i>
                                </div>
                                <div className="rating-star">
                                    <input type="checkbox" className="category-group-item-check" />
                                    <i className="star-checked far fa-star"></i>
                                    <i className="star-uncheck far fa-star"></i>
                                    <i className="star-uncheck far fa-star"></i>
                                    <i className="star-uncheck far fa-star"></i>
                                    <i className="star-uncheck far fa-star"></i>
                                </div>
                            </div>
                            <div className="category-group">
                                <div className="category-group-title">Dịch Vụ & Khuyến Mãi</div>
                                <ul className="category-group-list">
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Freeship Xtra
                                    </li>
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Hoàn xu Xtra
                                    </li>
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Đang giảm giá
                                    </li>
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Miễn phí vận chuyển
                                    </li>
                                    <li className="category-group-item">
                                        <input type="checkbox" className="category-group-item-check" />
                                        Gì cũng rẻ
                                    </li>
                                </ul>
                            </div>
                            <button className="btn btn--primary category-group-filter-btn category-group--margin">LÀM MỚI</button>
                        </nav>
                    </div>
                    <div className="col l-10 m-12 c-12">

                        <div className="home-filter hide-on-mobile-tablet">
                            <div className="home-filter-control">
                                <p className="home-filter-title">Sắp xếp theo</p>
                                <button className="btn btn--primary home-filter-btn">Phổ biến</button>
                                <button className="btn home-filter-btn">Mới nhất</button>
                                <button className="btn home-filter-btn">Bán chạy</button>
                                <div className="btn home-filter-sort">
                                    <p className="home-filter-sort-btn">Giá</p>
                                    <i className="fas fa-sort-amount-down-alt"></i>
                                    <ul className="home-filter-sort-list">
                                        <li>
                                            <a href="#" className="home-filter-sort-item-link">
                                                Giảm dần
                                                <i className="fas fa-sort-amount-down-alt"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="home-filter-sort-item-link">
                                                Tăng dần
                                                <i className="fas fa-sort-amount-up-alt"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="home-filter-page">
                                <div className="home-filter-page-number">
                                    <p className="home-filter-page-now">1</p>
                                    /14
                                </div>
                                <div className="home-filter-page-control">
                                    <a href="#" className="home-filter-page-btn home-filter-page-btn--disable">
                                        <i className="fas fa-angle-left"></i>
                                    </a>
                                    <a href="#" className="home-filter-page-btn">
                                        <i className="fas fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="home-product">
                            <nav className="mobile-category">
                                <ul className="mobile-category-list">
                                    <li className="mobile-category-item">
                                        <a href="#" className="mobile-category-item-link">Thiết bị mạng</a>
                                    </li>
                                    <li className="mobile-category-item">
                                        <a href="#" className="mobile-category-item-link">Chuột và bàn phím</a>
                                    </li>
                                    <li className="mobile-category-item">
                                        <a href="#" className="mobile-category-item-link">USB</a>
                                    </li>
                                    <li className="mobile-category-item">
                                        <a href="#" className="mobile-category-item-link">Link kiện máy tính</a>
                                    </li>
                                    <li className="mobile-category-item">
                                        <a href="#" className="mobile-category-item-link">Wifi</a>
                                    </li>
                                    <li className="mobile-category-item">
                                        <a href="#" className="mobile-category-item-link">Ổ cứng</a>
                                    </li>
                                    <li className="mobile-category-item">
                                        <a href="#" className="mobile-category-item-link">CD/DVD</a>
                                    </li>
                                    <li className="mobile-category-item">
                                        <a href="#" className="mobile-category-item-link">Tai nghe</a>
                                    </li>
                                    <li className="mobile-category-item">
                                        <a href="#" className="mobile-category-item-link">Lót chuột</a>
                                    </li>
                                    <li className="mobile-category-item">
                                        <a href="#" className="mobile-category-item-link">Micro</a>
                                    </li>
                                </ul>
                            </nav>
                            <div id="list-product" className="row sm-gutter"></div>
                            <div id="list-product" className="row sm-gutter">
                                <div className="col l-2-4 m-3 c-6 home-product-item">
                                    <Link to="/product/1" className="home-product-item-link">
                                        <div
                                            className="home-product-item__img"
                                            style={{ backgroundImage: "url('/Client/img/home/2.PNG')" }}
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
                                <div className="col l-2-4 m-3 c-6 home-product-item">
                                    <Link to="/product/1" className="home-product-item-link">
                                        <div
                                            className="home-product-item__img"
                                            style={{ backgroundImage: "url('/Client/img/home/2.PNG')" }}
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
                                <div className="col l-2-4 m-3 c-6 home-product-item">
                                    <Link to="/product/1" className="home-product-item-link">
                                        <div
                                            className="home-product-item__img"
                                            style={{ backgroundImage: "url('/Client/img/home/2.PNG')" }}
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
                                <div className="col l-2-4 m-3 c-6 home-product-item">
                                    <Link to="/product/1" className="home-product-item-link">
                                        <div
                                            className="home-product-item__img"
                                            style={{ backgroundImage: "url('/Client/img/home/2.PNG')" }}
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
                                <div className="col l-2-4 m-3 c-6 home-product-item">
                                    <Link to="/product/1" className="home-product-item-link">
                                        <div
                                            className="home-product-item__img"
                                            style={{ backgroundImage: "url('/Client/img/home/2.PNG')" }}
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
                                <div className="col l-2-4 m-3 c-6 home-product-item">
                                    <Link to="/product/1" className="home-product-item-link">
                                        <div
                                            className="home-product-item__img"
                                            style={{ backgroundImage: "url('/Client/img/home/2.PNG')" }}
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
                                <div className="col l-2-4 m-3 c-6 home-product-item">
                                    <Link to="/product/1" className="home-product-item-link">
                                        <div
                                            className="home-product-item__img"
                                            style={{ backgroundImage: "url('/Client/img/home/2.PNG')" }}
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
                                <div className="col l-2-4 m-3 c-6 home-product-item">
                                    <Link to="/product/1" className="home-product-item-link">
                                        <div
                                            className="home-product-item__img"
                                            style={{ backgroundImage: "url('/Client/img/home/2.PNG')" }}
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
                                <div className="col l-2-4 m-3 c-6 home-product-item">
                                    <Link to="/product/1" className="home-product-item-link">
                                        <div
                                            className="home-product-item__img"
                                            style={{ backgroundImage: "url('/Client/img/home/2.PNG')" }}
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

                        <ul className="pagination home-product-pagination">
                            <li className="pagination-item">
                                <a href="#" className="pagination-item-link pagination-item-link--disable">
                                    <i className="fas fa-chevron-left"></i>
                                </a>
                            </li>
                            <li className="pagination-item pagination-item--active">
                                <a href="#" className="pagination-item-link">1</a>
                            </li>
                            <li className="pagination-item">
                                <a href="#" className="pagination-item-link">2</a>
                            </li>
                            <li className="pagination-item">
                                <a href="#" className="pagination-item-link">3</a>
                            </li>
                            <li className="pagination-item">
                                <a className="pagination-item-link pagination-item-link--disable">. . .</a>
                            </li>
                            <li className="pagination-item">
                                <a href="#" className="pagination-item-link">8</a>
                            </li>
                            <li className="pagination-item">
                                <a href="#" className="pagination-item-link">
                                    <i className="fas fa-chevron-right"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;

