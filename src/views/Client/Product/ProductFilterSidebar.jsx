const SidebarFilter = ({
    categories,
    selectedCategories,
    showAllCategories,
    handleCategoryChange,
    setShowAllCategories,
  }) => {
    const MAX_CATEGORIES_DISPLAY = 5;
  
    return (
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
                    checked={selectedCategories.includes(category.id)}
                  />
                  <label htmlFor={`cat-${category.id}`}>{category.name}</label>
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
  
          {/* Giữ nguyên các khối khác y chang */}
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
    );
  };
  
  export default SidebarFilter;
  