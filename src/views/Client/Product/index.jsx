import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../../services/productServices";
import { getAllCategories } from "../../../services/categoryServices";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [sort, setSort] = useState("desc");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const MAX_CATEGORIES_DISPLAY = 5;

  const handleSortChange = (newSort) => setSort(newSort);

  const handleCategoryChange = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) => prev.filter((id) => id !== value));
    }
    setPage(1); // reset về trang đầu khi thay đổi danh mục
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getAllCategories();
        setCategories(res.data);
      } catch (error) {
        console.error("❌ Lỗi khi lấy danh mục:", error);
      }
    };
    fetchCategories();
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getAllProducts({
          categoryIds: selectedCategories.join(","),
          sort,
          page,
          limit: 20,
        });
  
  
        const productList = Array.isArray(res.data?.data)
          ? res.data.data
          : Array.isArray(res.data)
          ? res.data
          : [];
  
        setProducts(productList);
        setTotalPages(res.totalPages || 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        console.error("❌ Lỗi khi lấy sản phẩm:", error);
      }
    };
    fetchProducts();
  }, [selectedCategories, sort, page]);
  
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
                  {(showAllCategories
                    ? categories
                    : categories.slice(0, MAX_CATEGORIES_DISPLAY)
                  ).map((category) => (
                    <li key={category.id} className="category-group-item">
                      <input
                        type="checkbox"
                        value={category.id}
                        className="category-group-item-check"
                        id={`cat-${category.id}`}
                        onChange={handleCategoryChange}
                      />
                      <label htmlFor={`cat-${category.id}`}>
                        {category.name}
                      </label>
                    </li>
                  ))}
                </ul>
                {categories.length > MAX_CATEGORIES_DISPLAY && (
                  <button
                    onClick={() => setShowAllCategories(!showAllCategories)}
                    className="btn btn--primary"
                  >
                    {showAllCategories ? "Ẩn bớt" : "Xem thêm"}
                  </button>
                )}
              </div>

              <div className="category-group">
                <div className="category-group-title">Nơi Bán</div>
                <ul className="category-group-list">
                  <li className="category-group-item">
                    <input
                      type="checkbox"
                      className="category-group-item-check"
                    />
                    Hà Nội
                  </li>
                  <li className="category-group-item">
                    <input
                      type="checkbox"
                      className="category-group-item-check"
                    />
                    Hồ Chí Minh
                  </li>
                  <li className="category-group-item">
                    <input
                      type="checkbox"
                      className="category-group-item-check"
                    />
                    Đà Nẵng
                  </li>
                </ul>
              </div>
              <div className="category-group">
                <div className="category-group-title">Đơn Vị Vận Chuyển</div>
                <ul className="category-group-list">
                  <li className="category-group-item">
                    <input
                      type="checkbox"
                      className="category-group-item-check"
                    />
                    Hoả tốc
                  </li>
                  <li className="category-group-item">
                    <input
                      type="checkbox"
                      className="category-group-item-check"
                    />
                    Nhanh
                  </li>
                  <li className="category-group-item">
                    <input
                      type="checkbox"
                      className="category-group-item-check"
                    />
                    Tiết kiệm
                  </li>
                </ul>
              </div>
              <div className="category-group">
                <div className="category-group-title">Thương Hiệu</div>
                <ul className="category-group-list">
                  <li className="category-group-item">
                    <input
                      type="checkbox"
                      className="category-group-item-check"
                    />
                    Kingston
                  </li>
                  <li className="category-group-item">
                    <input
                      type="checkbox"
                      className="category-group-item-check"
                    />
                    Sandisk
                  </li>
                  <li className="category-group-item">
                    <input
                      type="checkbox"
                      className="category-group-item-check"
                    />
                    Seagate
                  </li>
                </ul>
              </div>
              <div className="category-group">
                <div className="category-group-title">Khoảng Giá</div>
                <div className="category-group-filter">
                  <input
                    type="number"
                    placeholder="đ TỪ"
                    className="category-group-filter-input"
                  />
                  <i className="fas fa-arrow-right"></i>
                  <input
                    type="number"
                    placeholder="đ ĐẾN"
                    className="category-group-filter-input"
                  />
                </div>
                <button className="btn btn--primary category-group-filter-btn">
                  Áp dụng
                </button>
              </div>
              <div className="category-group">
                <div className="category-group-title">Loại Shop</div>
                <ul className="category-group-list">
                  <li className="category-group-item">
                    <input
                      type="checkbox"
                      className="category-group-item-check"
                    />
                    Shoppee
                  </li>
                  <li className="category-group-item">
                    <input
                      type="checkbox"
                      className="category-group-item-check"
                    />
                    Shoppee Mail
                  </li>
                  <li className="category-group-item">
                    <input
                      type="checkbox"
                      className="category-group-item-check"
                    />
                    Shop yêu thích
                  </li>
                </ul>
              </div>
              <div className="category-group">
                <div className="category-group-title">Tình Trạng</div>
                <ul className="category-group-list">
                  <li className="category-group-item">
                    <input
                      type="checkbox"
                      className="category-group-item-check"
                    />
                    Mới
                  </li>
                  <li className="category-group-item">
                    <input
                      type="checkbox"
                      className="category-group-item-check"
                    />
                    Đã sử dụng
                  </li>
                </ul>
              </div>
              <div className="category-group">
                <div className="category-group-title">Lựa Chọn Thanh Toán</div>
                <ul className="category-group-list">
                  <li className="category-group-item">
                    <input
                      type="checkbox"
                      className="category-group-item-check"
                    />
                    Thanh toán khi nhận hàng
                  </li>
                  <li className="category-group-item">
                    <input
                      type="checkbox"
                      className="category-group-item-check"
                    />
                    Chuyển khoản
                  </li>
                  <li className="category-group-item">
                    <input
                      type="checkbox"
                      className="category-group-item-check"
                    />
                    Trả góp 0%
                  </li>
                </ul>
              </div>
              <button className="btn btn--primary category-group-filter-btn category-group--margin">
                LÀM MỚI
              </button>
            </nav>
          </div>
          <div className="col l-10 m-12 c-12">
            <div className="home-filter hide-on-mobile-tablet">
              <div className="home-filter-control">
                <p className="home-filter-title">Sắp xếp theo</p>
                <button className="btn btn--primary home-filter-btn">
                  Phổ biến
                </button>
                <button className="btn home-filter-btn">Mới nhất</button>
                <button className="btn home-filter-btn">Bán chạy</button>
                <div className="btn home-filter-sort">
                  <p className="home-filter-sort-btn">Giá</p>
                  <i className="fas fa-sort-amount-down-alt"></i>
                  <ul className="home-filter-sort-list">
                    <li>
                      <button
                        className="home-filter-sort-item-link"
                        onClick={() => handleSortChange("desc")}
                      >
                        Giảm dần <i className="fas fa-sort-amount-down-alt"></i>
                      </button>
                    </li>
                    <li>
                      <button
                        className="home-filter-sort-item-link"
                        onClick={() => handleSortChange("asc")}
                      >
                        Tăng dần <i className="fas fa-sort-amount-up-alt"></i>
                      </button>
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
                  <a
                    href="#"
                    className="home-filter-page-btn home-filter-page-btn--disable"
                  >
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
                    <a href="#" className="mobile-category-item-link">
                      Thiết bị mạng
                    </a>
                  </li>
                  <li className="mobile-category-item">
                    <a href="#" className="mobile-category-item-link">
                      Chuột và bàn phím
                    </a>
                  </li>
                  <li className="mobile-category-item">
                    <a href="#" className="mobile-category-item-link">
                      USB
                    </a>
                  </li>
                  <li className="mobile-category-item">
                    <a href="#" className="mobile-category-item-link">
                      Link kiện máy tính
                    </a>
                  </li>
                  <li className="mobile-category-item">
                    <a href="#" className="mobile-category-item-link">
                      Wifi
                    </a>
                  </li>
                  <li className="mobile-category-item">
                    <a href="#" className="mobile-category-item-link">
                      Ổ cứng
                    </a>
                  </li>
                  <li className="mobile-category-item">
                    <a href="#" className="mobile-category-item-link">
                      CD/DVD
                    </a>
                  </li>
                  <li className="mobile-category-item">
                    <a href="#" className="mobile-category-item-link">
                      Tai nghe
                    </a>
                  </li>
                  <li className="mobile-category-item">
                    <a href="#" className="mobile-category-item-link">
                      Lót chuột
                    </a>
                  </li>
                  <li className="mobile-category-item">
                    <a href="#" className="mobile-category-item-link">
                      Micro
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="row sm-gutter" id="list-product">
                {products.map((item) => (
                  <div
                    key={item.id}
                    className="col l-2-4 m-3 c-6 home-product-item"
                  >
                    <Link
                      to={`/product/${item.id}`}
                      className="home-product-item-link"
                    >
                      <div
                        className="home-product-item__img"
                        style={{
                          backgroundImage: `url(http://localhost:3000/uploads/${item.image})`,
                        }}
                      ></div>

                      <div className="home-product-item__info">
                        <h4 className="home-product-item__name">{item.name}</h4>
                        <div className="home-product-item__price">
                          {item.discount > 0 ? (
                            <>
                              <p className="home-product-item__price-old">
                                {Number(item.price).toLocaleString("vi-VN")}đ
                              </p>
                              <p className="home-product-item__price-new">
                                {Number(item.finalPrice).toLocaleString(
                                  "vi-VN"
                                )}
                                đ
                              </p>
                            </>
                          ) : (
                            <p className="home-product-item__price-new">
                              {Number(item.price).toLocaleString("vi-VN")}đ
                            </p>
                          )}
                          <i className="home-product-item__ship fas fa-shipping-fast"></i>
                        </div>

                        <div className="home-product-item__footer">
                          <div className="home-product-item__save">
                            <input type="checkbox" id={`save-${item.id}`} />
                            <label
                              htmlFor={`save-${item.id}`}
                              className="far fa-heart"
                            ></label>
                          </div>
                          <div className="home-product-item__rating-star">
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className="star-checked far fa-star"
                              ></i>
                            ))}
                          </div>
                          <div className="home-product-item__saled">
                            Đã bán 3,8k
                          </div>
                        </div>
                        <div className="home-product-item__origin">Hà Nội</div>
                        <div className="home-product-item__favourite">
                          Yêu thích
                        </div>
                        <div className="home-product-item__sale-off">
                          <div className="home-product-item__sale-off-value">
                            40%
                          </div>
                          <div className="home-product-item__sale-off-label">
                            GIẢM
                          </div>
                        </div>
                      </div>
                      <div className="home-product-item-footer">
                        Tìm sản phẩm tương tự
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <ul className="pagination home-product-pagination">
        <li className="pagination-item">
          <button
            className="pagination-item-link"
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
        </li>

        {Array.from({ length: totalPages }, (_, i) => (
          <li
            key={i + 1}
            className={`pagination-item ${page === i + 1 ? "pagination-item--active" : ""}`}
          >
            <button
              className="pagination-item-link"
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          </li>
        ))}

        <li className="pagination-item">
          <button
            className="pagination-item-link"
            disabled={page === totalPages}
            onClick={() => handlePageChange(page + 1)}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </li>
      </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
