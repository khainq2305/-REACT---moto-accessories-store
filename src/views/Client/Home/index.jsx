import { useEffect, useState } from "react";
import { getAllCategories } from "../../../services/categoryServices";
import { getHomeProducts } from "../../../services/productServices";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopeeMainBanner from "../../../components/Client/ShopeeMainBanner";
import { Link } from "react-router-dom";

export default function ShopeeBanner() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getAllCategories();
        setCategories(res.data);
      } catch (error) {
        console.error("Lỗi khi lấy danh mục:", error);
      }
    };

    const fetchProducts = async () => {
      try {
        const res = await getHomeProducts();
        console.log("🔥 Sản phẩm trang chủ:", res);
    
        const productList = Array.isArray(res) ? res : [];
        setProducts(productList);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };

    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <>
      <ShopeeMainBanner />

      {/* Danh mục bán chạy */}
      <div
        style={{
          backgroundColor: "white",
          padding: "24px 0",
          marginTop: "16px",
        }}
      >
        <div style={{ width: "1200px", margin: "0 auto" }}>
          <h5 style={{ fontWeight: "bold", marginBottom: "16px" }}>DANH MỤC</h5>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "20px",
              justifyContent: "space-between",
            }}
          >
            {categories.map((item) => (
              <Link
                to={`/product?category=${item.id}`}
                key={item.id}
                style={{
                  width: "100px",
                  textAlign: "center",
                  backgroundColor: "#fff",
                  padding: "12px 8px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <img
                  src={`http://localhost:3000/uploads/${item.imageUrl}`}
                  alt={item.name}
                  style={{
                    width: "64px",
                    height: "64px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    marginBottom: "8px",
                  }}
                />
                <div style={{ fontSize: "13px" }}>{item.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* TÌM KIẾM HÀNG ĐẦU - Giao diện chuẩn như Shopee */}
      <div
        style={{
          backgroundColor: "white",
          padding: "16px 0",
          marginTop: "16px",
        }}
      >
        <div style={{ width: "1200px", margin: "0 auto" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <h6 style={{ color: "red", fontWeight: "bold", fontSize: "16px" }}>
              TÌM KIẾM HÀNG ĐẦU
            </h6>
            <a href="#" style={{ fontSize: "14px", color: "red" }}>
              Xem Tất Cả &gt;
            </a>
          </div>

          {/* Sản phẩm */}
          <div style={{ display: "flex", gap: "10px", overflowX: "auto" }}>
            {/* Item 1 */}
            <div
              style={{
                width: "140px",
                textAlign: "center",
                backgroundColor: "white",
                padding: "12px 8px",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                flexShrink: 0,
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src="https://down-vn.img.susercontent.com/file/710ed1641b681b5fad2e67fbb527c068"
                  alt="Bàn Học Gấp Gọn Mini"
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "contain",
                    marginBottom: "8px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "orangered",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "12px",
                    padding: "2px 6px",
                  }}
                >
                  TOP
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#ccc",
                  fontSize: "12px",
                  padding: "2px 0",
                  marginBottom: "4px",
                }}
              >
                Bán 34k+ / tháng
              </div>
              <div style={{ fontSize: "14px" }}>Bàn Học Gấp Gọn Mini</div>
            </div>
            {/* Item 1 */}
            <div
              style={{
                width: "140px",
                textAlign: "center",
                backgroundColor: "white",
                padding: "12px 8px",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                flexShrink: 0,
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src="https://down-vn.img.susercontent.com/file/909c3dffbe686640a9ca4ff4c9cac644"
                  alt="Bàn Học Gấp Gọn Mini"
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "contain",
                    marginBottom: "8px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "orangered",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "12px",
                    padding: "2px 6px",
                  }}
                >
                  TOP
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#ccc",
                  fontSize: "12px",
                  padding: "2px 0",
                  marginBottom: "4px",
                }}
              >
                Bán 34k+ / tháng
              </div>
              <div style={{ fontSize: "14px" }}>Bàn Học Gấp Gọn Mini</div>
            </div>
            {/* Item 1 */}
            <div
              style={{
                width: "140px",
                textAlign: "center",
                backgroundColor: "white",
                padding: "12px 8px",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                flexShrink: 0,
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src="https://down-vn.img.susercontent.com/file/9fcce96cf92603b35c0acf95b17df6e7"
                  alt="Bàn Học Gấp Gọn Mini"
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "contain",
                    marginBottom: "8px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "orangered",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "12px",
                    padding: "2px 6px",
                  }}
                >
                  TOP
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#ccc",
                  fontSize: "12px",
                  padding: "2px 0",
                  marginBottom: "4px",
                }}
              >
                Bán 34k+ / tháng
              </div>
              <div style={{ fontSize: "14px" }}>Bàn Học Gấp Gọn Mini</div>
            </div>
            {/* Item 1 */}
            <div
              style={{
                width: "140px",
                textAlign: "center",
                backgroundColor: "white",
                padding: "12px 8px",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                flexShrink: 0,
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src="https://down-vn.img.susercontent.com/file/d71ce7550959216c3c536515d0771e6a"
                  alt="Bàn Học Gấp Gọn Mini"
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "contain",
                    marginBottom: "8px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "orangered",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "12px",
                    padding: "2px 6px",
                  }}
                >
                  TOP
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#ccc",
                  fontSize: "12px",
                  padding: "2px 0",
                  marginBottom: "4px",
                }}
              >
                Bán 34k+ / tháng
              </div>
              <div style={{ fontSize: "14px" }}>Bàn Học Gấp Gọn Mini</div>
            </div>
            {/* Item 1 */}
            <div
              style={{
                width: "140px",
                textAlign: "center",
                backgroundColor: "white",
                padding: "12px 8px",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                flexShrink: 0,
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src="https://down-vn.img.susercontent.com/file/6142596f32624791af1b5ea8cfa4b8ff"
                  alt="Bàn Học Gấp Gọn Mini"
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "contain",
                    marginBottom: "8px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "orangered",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "12px",
                    padding: "2px 6px",
                  }}
                >
                  TOP
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#ccc",
                  fontSize: "12px",
                  padding: "2px 0",
                  marginBottom: "4px",
                }}
              >
                Bán 34k+ / tháng
              </div>
              <div style={{ fontSize: "14px" }}>Bàn Học Gấp Gọn Mini</div>
            </div>
            {/* Item 1 */}
            <div
              style={{
                width: "140px",
                textAlign: "center",
                backgroundColor: "white",
                padding: "12px 8px",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                flexShrink: 0,
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src="https://down-vn.img.susercontent.com/file/8465ac240b9d43f4b6383626b5167b42"
                  alt="Bàn Học Gấp Gọn Mini"
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "contain",
                    marginBottom: "8px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "orangered",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "12px",
                    padding: "2px 6px",
                  }}
                >
                  TOP
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#ccc",
                  fontSize: "12px",
                  padding: "2px 0",
                  marginBottom: "4px",
                }}
              >
                Bán 34k+ / tháng
              </div>
              <div style={{ fontSize: "14px" }}>Bàn Học Gấp Gọn Mini</div>
            </div>
            {/* Item 1 */}
            <div
              style={{
                width: "140px",
                textAlign: "center",
                backgroundColor: "white",
                padding: "12px 8px",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                flexShrink: 0,
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src="https://down-vn.img.susercontent.com/file/75cb7f359291380dedb46e16ffd4b105"
                  alt="Bàn Học Gấp Gọn Mini"
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "contain",
                    marginBottom: "8px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "orangered",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "12px",
                    padding: "2px 6px",
                  }}
                >
                  TOP
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#ccc",
                  fontSize: "12px",
                  padding: "2px 0",
                  marginBottom: "4px",
                }}
              >
                Bán 34k+ / tháng
              </div>
              <div style={{ fontSize: "14px" }}>Bàn Học Gấp Gọn Mini</div>
            </div>
            {/* Item 1 */}
            <div
              style={{
                width: "140px",
                textAlign: "center",
                backgroundColor: "white",
                padding: "12px 8px",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                flexShrink: 0,
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src="https://down-vn.img.susercontent.com/file/36699bdc79d69f9c26469f7d940b5170"
                  alt="Bàn Học Gấp Gọn Mini"
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "contain",
                    marginBottom: "8px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "orangered",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "12px",
                    padding: "2px 6px",
                  }}
                >
                  TOP
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#ccc",
                  fontSize: "12px",
                  padding: "2px 0",
                  marginBottom: "4px",
                }}
              >
                Bán 34k+ / tháng
              </div>
              <div style={{ fontSize: "14px" }}>Bàn Học Gấp Gọn Mini</div>
            </div>
            {/* Item 1 */}
            <div
              style={{
                width: "140px",
                textAlign: "center",
                backgroundColor: "white",
                padding: "12px 8px",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                flexShrink: 0,
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src="https://down-vn.img.susercontent.com/file/710ed1641b681b5fad2e67fbb527c068"
                  alt="Bàn Học Gấp Gọn Mini"
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "contain",
                    marginBottom: "8px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "orangered",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "12px",
                    padding: "2px 6px",
                  }}
                >
                  TOP
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#ccc",
                  fontSize: "12px",
                  padding: "2px 0",
                  marginBottom: "4px",
                }}
              >
                Bán 34k+ / tháng
              </div>
              <div style={{ fontSize: "14px" }}>Bàn Học Gấp Gọn Mini</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid wide">
        <div className="row sm-gutter">
          <div className="col l-12 m-12 c-12">
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
              <div
                className="row sm-gutter"
                id="list-product"
                style={{ marginTop: "24px" }}
              >
                {Array.isArray(products) &&
                  products.map((item) => (
                    <div
                      key={item.id}
                      className="col l-2 m-3 c-6 home-product-item"
                    >
                      <Link
                        className="home-product-item-link"
                        to={`/product/${item.id}`}
                      >
                        <div
                          className="home-product-item__img"
                          style={{
                            backgroundImage: item.image
                              ? `url(http://localhost:3000/uploads/${item.image})`
                              : "url(https://via.placeholder.com/200x200?text=No+Image)",
                          }}
                        ></div>

                        <div className="home-product-item__info">
                          <h4 className="home-product-item__name">
                            {item.name}
                          </h4>
                          <div className="home-product-item__price">
                            {Number(item.discount) > 0 ? (
                              <>
                                <p className="home-product-item__price-old">
                                  {Number(item.price).toLocaleString("vi-VN")}đ
                                </p>
                                <p className="home-product-item__price-new">
                                  {Number(
                                    item.price *
                                      (1 - Number(item.discount) / 100)
                                  ).toLocaleString("vi-VN")}
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
                          <div className="home-product-item__origin">
                            Hà Nội
                          </div>
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
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#fff8ef",
          padding: "40px 0",
          marginTop: "32px",
        }}
      >
        <div style={{ width: "1200px", margin: "0 auto" }}>
          <h4 style={{ fontWeight: "bold", marginBottom: "24px" }}>
            BÀI VIẾT NỔI BẬT
          </h4>

          {/* Hàng 1 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                width: "32%",
                backgroundColor: "white",
                padding: "16px",
                borderRadius: "12px",
              }}
            >
              <img
                src="https://file.hstatic.net/1000075078/article/thecoffeehouse_caphehighlight01_de40c0102a954c50a328f7befcdd82bd_grande.jpg"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <p style={{ color: "#777", fontSize: "13px", marginTop: "12px" }}>
                19/09/2023
              </p>
              <h5 style={{ fontWeight: "bold" }}>
                TRUNG THU NÀY, SAO BẠN KHÔNG TỰ CHIẾU?
              </h5>
              <p style={{ fontSize: "14px", color: "#333" }}>
                Bạn đã từng nghe: Trung thu thôi mà, có gì đâu mà chơi...
              </p>
            </div>
            <div
              style={{
                width: "32%",
                backgroundColor: "white",
                padding: "16px",
                borderRadius: "12px",
              }}
            >
              <img
                src="https://file.hstatic.net/1000075078/article/cautoankeothom_thecoffeehouse_03_29cd435c9a574e1a867ac36f2c863bb6_grande.jpg"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <p style={{ color: "#777", fontSize: "13px", marginTop: "12px" }}>
                16/01/2023
              </p>
              <h5 style={{ fontWeight: "bold" }}>
                BỘ SƯU TẬP CÂU TOÀN KẸO THƠM: &quot;VÍA&quot;
              </h5>
              <p style={{ fontSize: "14px", color: "#333" }}>
                Tết này vẫn giống Tết xưa, nhưng thêm nhiều hoạt động xin vía
                hiện đại...
              </p>
            </div>
            <div
              style={{
                width: "32%",
                backgroundColor: "white",
                padding: "16px",
                borderRadius: "12px",
              }}
            >
              <img
                src="https://file.hstatic.net/1000075078/article/dscf0216_2890bcca44ae49aaaf843d5fa3db2fc6_grande.jpg"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <p style={{ color: "#777", fontSize: "13px", marginTop: "12px" }}>
                16/08/2022
              </p>
              <h5
                style={{ fontWeight: "bold" }}
              >{`KHƯẤY ĐỂ THẤY TRĂNG – KHUẤY LÊN…`}</h5>
              <p style={{ fontSize: "14px", color: "#333" }}>
                Trung thu 2022 rộn rà, vui vẻ cùng bạn bè, trải nghiệm mới mẻ...
              </p>
            </div>
          </div>

          {/* Hàng 2 */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                width: "32%",
                backgroundColor: "white",
                padding: "16px",
                borderRadius: "12px",
              }}
            >
              <img
                src="https://file.hstatic.net/1000075078/article/an_banh_uong_nuoc_nhom_03_d499c0cab14746588fff6fe0dee678ad_grande.jpg"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <p style={{ color: "#777", fontSize: "13px", marginTop: "12px" }}>
                05/08/2022
              </p>
              <h5 style={{ fontWeight: "bold" }}>
                THỮ GIÂY XANH ĐẺN SÁNG – GIẢI NHIỆT CÀNG HƠNG
              </h5>
              <p style={{ fontSize: "14px", color: "#333" }}>
                Lấy cảm hứng từ màu xanh mát, mang đến trài nghiệm thanh mát
                ngày hè.
              </p>
            </div>
            <div
              style={{
                width: "32%",
                backgroundColor: "white",
                padding: "16px",
                borderRadius: "12px",
              }}
            >
              <img
                src="https://file.hstatic.net/1000075078/article/zalo_01c6f0bfb0854951a16a92b52457ca56_grande.jpg"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <p style={{ color: "#777", fontSize: "13px", marginTop: "12px" }}>
                10/07/2022
              </p>
              <h5 style={{ fontWeight: "bold" }}>
                TRÀ SƯA HÈ RỰC - VÀI NGÀY TRÀ MÁT
              </h5>
              <p style={{ fontSize: "14px", color: "#333" }}>
                Đủ ngọt ngào, đủ thơm ngon - combo trà sữa và trái cây tươi mát.
              </p>
            </div>
            <div
              style={{
                width: "32%",
                backgroundColor: "white",
                padding: "16px",
                borderRadius: "12px",
              }}
            >
              <img
                src="https://file.hstatic.net/1000075078/article/thecoffeehouse_timesquare_02_b87f7576b02d4d82ba5b7ed4e40b6b00_grande.png"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <p style={{ color: "#777", fontSize: "13px", marginTop: "12px" }}>
                20/06/2022
              </p>
              <h5 style={{ fontWeight: "bold" }}>
                CHILL THÂU HÈ VỜi SIRO TRÁI CÂY
              </h5>
              <p style={{ fontSize: "14px", color: "#333" }}>
                Thư giãn cảm xúc, refresh bản thân bằng sự tươi mới của sữa và
                hoa quả.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
