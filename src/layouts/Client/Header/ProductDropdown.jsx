// 📁 src/layouts/Client/Header/ProductDropdown.jsx
import { Link } from 'react-router-dom';

const ProductDropdown = () => {
  return (
    <div className="header__dropdown">
      <div className="header__dropdown-col">
        <h4>Thương Hiệu Thụy Sĩ</h4>
        <ul>
          <li>Rado <span className="tag">NEW</span></li>
          <li>Longines <span className="tag">🔥</span></li>
          <li>Tissot <span className="tag">🔥</span></li>
          <li>Jowissa <span className="tag tag--special">ĐỘC QUYỀN</span></li>
          <li>Silvana <span className="tag tag--special">ĐỘC QUYỀN</span></li>
          <li>Jacques Du Manoir</li>
          <li>Claude Bernad</li>
        </ul>
      </div>

      <div className="header__dropdown-col">
        <h4>Thương Hiệu Nhật Bản</h4>
        <ul>
          <li>Seiko <span className="tag">NEW</span></li>
          <li>Citizen</li>
          <li>Casio</li>
          <li>Orient</li>
        </ul>
      </div>

      <div className="header__dropdown-col">
        <h4>Thương Hiệu Thời Trang</h4>
        <ul>
          <li>Disney Watch <span className="tag">NEW</span></li>
          <li>Titan <span className="tag">NEW</span></li>
          <li>Daniel Wellington</li>
          <li>Calvin Klein</li>
          <li>Michael Kors</li>
          <li>Fossil</li>
          <li>Skagen</li>
        </ul>
      </div>

      <div className="header__dropdown-col">
        <h4>Thương hiệu thời trang</h4>
        <ul>
          <li>Daniel Wellington</li>
          <li>Calvin Klein</li>
          <li>Michael Kors</li>
          <li>Fossil</li>
          <li>Skagen</li>
        </ul>
      </div>

      <div className="header__dropdown-col">
        <h4>Thương Hiệu Khác</h4>
        <ul>
          <li>Avi-8 <span className="tag tag--special">ĐỘC QUYỀN</span></li>
          <li>Olivia Burton</li>
          <li>Kenneth Cole</li>
          <li>Just Cavalli</li>
          <li>Lancaster <span className="tag tag--special">ĐỘC QUYỀN</span></li>
        </ul>
      </div>

      <div className="header__dropdown-col">
        <h4>Giới Tính</h4>
        <ul>
          <li>Nam</li>
          <li>Nữ</li>
          <li>Unisex</li>
        </ul>
      </div>

      <div className="header__dropdown-col">
        <h4>Chủng Loại</h4>
        <ul>
          <li>Hàng đặt trước</li>
          <li>Đồng Hồ</li>
          <li>Đồng Hồ Cặp</li>
        </ul>
      </div>

      <div className="header__dropdown-col">
        <h4>Bộ Máy</h4>
        <ul>
          <li>Quartz (Pin)</li>
          <li>Automatic (cơ tự động)</li>
          <li>Eco-drive</li>
          <li>Powermatic 80</li>
          <li>Solar (Pin mặt trời)</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDropdown;
