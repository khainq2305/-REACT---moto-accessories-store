import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBox = ({ open, toggleSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (keyword.trim()) {
      const fetchData = async () => {
        try {
          const res = await axios.get(`http://localhost:3000/products/search?keyword=${keyword}`);
          setResults(res.data);
        } catch (err) {
          console.error("Lỗi tìm kiếm:", err);
        }
      };
      fetchData();
    } else {
      setResults([]);
    }
  }, [keyword]);

  return (
    <>
      <div className="header__svg-icon" onClick={toggleSearch} style={{ cursor: 'pointer' }}>
        <svg role="presentation" strokeWidth="2" stroke="white" fill="white" width="22" height="22" viewBox="0 0 22 22">
          <circle cx="11" cy="10" r="7" fill="none"></circle>
          <path d="m16 15 3 3" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </div>

      <div className={`search-overlay ${open ? 'open' : ''}`}>
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
              <div key={product.id} className="search-result-item">
                <img src={product.image} alt={product.name} className="result-thumb" />
                <div>
                  <p className="result-name">{product.name}</p>
                  <p className="result-price">
                    {product.salePrice?.toLocaleString()}đ{" "}
                    {product.originalPrice > product.salePrice && (
                      <span className="line-through">{product.originalPrice?.toLocaleString()}đ</span>
                    )}
                  </p>
                </div>
              </div>
            ))
          ) : (
            keyword && <p>Không tìm thấy sản phẩm phù hợp.</p>
          )}
        </div>
      </div>

      {open && <div className="overlay-search" onClick={toggleSearch}></div>}
    </>
  );
};

export default SearchBox;
