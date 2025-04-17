import { Link } from "react-router-dom";

const ProductSection = ({ products }) => {
  return (
    <div style={{ maxWidth: '1200px' }} className="grid wide">
       {/* 👇 Thêm tiêu đề nếu muốn */}
       <div
  style={{
    backgroundColor: "#fff",
    padding: "16px 0",
    marginBottom: "10px",
    textAlign: "center",
    borderBottom: "4px solid transparent",
    borderImage: "linear-gradient(to right, #0f2027, #203a43, #2c5364) 1",
  }}
>
<h2
  style={{
    fontSize: "2rem",
    fontWeight: 500,
    textTransform: "uppercase",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: 0,
    display: "inline-block",
    lineHeight: 1.2,
  }}
>
  Sản phẩm nổi bật
</h2>

</div>


      <div className="row sm-gutter">
        <div className="col l-12 m-12 c-12">
          <div className="home-product">
            <div className="row sm-gutter" id="list-product" >
              {products.map((item) => (
                <div
                key={item.id}
                className="col"
                style={{
                  flex: "0 0 16.66667%",
                  maxWidth: "16.66667%",
                }}
              >
              

                  <div className="home-product-item">
                    <Link className="home-product-item-link" to={`/product/${item.id}`}>
                      <div
                        className="home-product-item__img"
                        style={{
                          backgroundImage: item.image
                            ? `url(http://localhost:3000/uploads/${item.image})`
                            : "url(https://via.placeholder.com/200x200?text=No+Image)",
                        }}
                      ></div>
                      <div className="home-product-item__info">
                        <h4 className="home-product-item__name">{item.name}</h4>
                        <div className="home-product-item__price">
  {Number(item.discount) > 0 ? (
    <>
      <p className="home-product-item__price-old">
        {Number(item.price).toLocaleString("vi-VN")}đ
      </p>
      <p className="home-product-item__price-new">
        {Number(item.price - item.discount).toLocaleString("vi-VN")}đ
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
                            <label htmlFor={`save-${item.id}`} className="far fa-heart"></label>
                          </div>
                          <div className="home-product-item__rating-star">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="star-checked far fa-star"></i>
                            ))}
                          </div>
                          <div className="home-product-item__saled">Đã bán 3,8k</div>
                        </div>
                        <div className="home-product-item__origin">Hà Nội</div>
                        <div className="home-product-item__favourite">Yêu thích</div>
                        {item.discount > 0 && (
                          <div className="home-product-item__sale-off">
                            <div className="home-product-item__sale-off-value">{item.discount}%</div>
                            <div className="home-product-item__sale-off-label">GIẢM</div>
                          </div>
                        )}
                      </div>
                      <div className="home-product-item-footer">Tìm sản phẩm tương tự</div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
