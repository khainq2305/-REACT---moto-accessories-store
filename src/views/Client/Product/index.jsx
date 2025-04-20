import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../../services/productService";
import { getAllCategories } from "../../../services/categoryServices";
import SidebarFilter from "./ProductFilterSidebar";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [sort, setSort] = useState("desc");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSortChange = (newSort) => setSort(newSort);

  const handleCategoryChange = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) => prev.filter((id) => id !== value));
    }
    setPage(1);
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
        setTotalPages(res.data?.totalPages || 1); // ✅ TRUY CẬP ĐÚNG VỊ TRÍ
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
          <SidebarFilter
            categories={categories}
            selectedCategories={selectedCategories}
            showAllCategories={showAllCategories}
            handleCategoryChange={handleCategoryChange}
            setShowAllCategories={setShowAllCategories}
          />

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
                  <p className="home-filter-page-now">{page}</p>/{totalPages}
                </div>
                <div className="home-filter-page-control">
                  <button
                    className="home-filter-page-btn"
                    disabled={page === 1}
                    onClick={() => handlePageChange(page - 1)}
                  >
                    <i className="fas fa-angle-left"></i>
                  </button>
                  <button
                    className="home-filter-page-btn"
                    disabled={page === totalPages}
                    onClick={() => handlePageChange(page + 1)}
                  >
                    <i className="fas fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="home-product">
              <div className="row sm-gutter" id="list-product">
                {products.map((item) => (
                  <div
                    key={item.id}
                    className="col"
                    style={{
                      flex: "0 0 20%",
                      maxWidth: "20%",
                    }}
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
                        {item.discount > 0 && (
                          <div className="home-product-item__sale-off">
                            <div className="home-product-item__sale-off-value">
                              {item.discount}%
                            </div>
                            <div className="home-product-item__sale-off-label">
                              GIẢM
                            </div>
                          </div>
                        )}
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
                  className={`pagination-item ${
                    page === i + 1 ? "pagination-item--active" : ""
                  }`}
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
