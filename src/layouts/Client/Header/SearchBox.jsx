import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../../assets/Client/css/Header/searchBox.css"; // 👉 gắn file CSS thường
const SearchBox = ({ open, toggleSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!keyword.trim()) return setResults([]);
      try {
        const res = await axios.get(`http://localhost:3000/products/search?keyword=${keyword}`);
        const resultWithFinalPrice = res.data.map((p) => {
          const discount = p.discount || 0;
          const finalPrice = p.price - discount;
          return { ...p, finalPrice };
        });
        setResults(resultWithFinalPrice);
      } catch (err) {
        console.error("❌ Lỗi tìm kiếm:", err);
      }
    };
    fetchData();
  }, [keyword]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <div className="header__svg-icon" onClick={toggleSearch} style={{ cursor: "pointer" }}>
        <svg role="presentation" strokeWidth="2" stroke="white" fill="white" width="22" height="22" viewBox="0 0 22 22">
          <circle cx="11" cy="10" r="7" fill="none"></circle>
          <path d="m16 15 3 3" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </div>

      <div className={`search-overlay ${open ? "open" : ""}`}>
        <div className="row-search-overlay">
          <input
            type="text"
            placeholder="Tìm sản phẩm..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <span className="overlay-close" onClick={toggleSearch}>✕</span>
        </div>

        <div className="search-results">
          {results.length > 0 ? (
            results.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="search-result-item">
                <img
                  src={`http://localhost:3000/uploads/${product.image}`}
                  alt={product.name}
                  className="result-thumb"
                />
                <div className="result-info">
                  <p className="result-name">{product.name}</p>
                  <p className="result-price">
                    <span style={{ color: "red", fontWeight: "bold" }}>{formatPrice(product.finalPrice)}</span>{" "}
                    {product.discount > 0 && (
                      <span className="line-through" style={{ color: "#888", textDecoration: "line-through", marginLeft: 8 }}>
                        {formatPrice(product.price)}
                      </span>
                    )}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            keyword && <p style={{ padding: "10px" }}>Không tìm thấy sản phẩm phù hợp.</p>
          )}
        </div>
      </div>

      {open && <div className="overlay-search" onClick={toggleSearch}></div>}
    </>
  );
};

export default SearchBox;
