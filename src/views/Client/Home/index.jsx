// Shopee-style banner with slider and icon section
// import React from 'react';

import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopeeMainBanner from '../../../components/Client/ShopeeMainBanner';

export default function ShopeeBanner() {


  
  return (
    <>
       <ShopeeMainBanner/>

      {/* Danh mục bán chạy */}
      <div style={{ backgroundColor: 'white', padding: '24px 0', marginTop: '16px' }}>
        <div style={{ width: '1200px', margin: '0 auto' }}>
          <h5 style={{ fontWeight: 'bold', marginBottom: '16px' }}>DANH MỤC</h5>

          {/* Hàng 1 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Thời Trang Nam</div>
            </div>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Điện Thoại & Phụ Kiện</div>
            </div>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Thiết Bị Điện Tử</div>
            </div>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Máy Tính & Laptop</div>
            </div>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Máy Ảnh & Quay Phim</div>
            </div>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Đồng Hồ</div>
            </div>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Giày Dép Nam</div>
            </div>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Thiết Bị Gia Dụng</div>
            </div>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Thể Thao & Du Lịch</div>
            </div>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Ô Tô & Xe Máy</div>
            </div>
          </div>

          {/* Hàng 2 */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Thời Trang Nữ</div>
            </div>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Mẹ & Bé</div>
            </div>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/24b194a695ea59d384768b7b471d563f@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Nhà Cửa & Đời Sống</div>
            </div>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/ef1f336ecc6f97b790d5aae9916dcb72@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Sắc Đẹp</div>
            </div>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/49119e891a44fa135f5f6f5fd4cfc747@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Sức Khỏe</div>
            </div>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/48630b7c76a7b62bc070c9e227097847@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Giày Dép Nữ</div>
            </div>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Túi Ví Nữ</div>
            </div>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/8e71245b9659ea72c1b4e737be5cf42e@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Phụ Kiện & Trang Sức</div>
            </div>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Bách Hóa Online</div>
            </div>
            <div style={{ width: '100px', textAlign: 'center', backgroundColor: '#fff', padding: '12px 8px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <img src="https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889@resize_w640_nl.webp" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '8px' }} />
              <div style={{ fontSize: '13px' }}>Nhà Sách Online</div>
            </div>
          </div>
        </div>
      </div>

      {/* TÌM KIẾM HÀNG ĐẦU - Giao diện chuẩn như Shopee */}
      <div style={{ backgroundColor: 'white', padding: '16px 0', marginTop: '16px' }}>
        <div style={{ width: '1200px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h6 style={{ color: 'red', fontWeight: 'bold', fontSize: '16px' }}>TÌM KIẾM HÀNG ĐẦU</h6>
            <a href="#" style={{ fontSize: '14px', color: 'red' }}>Xem Tất Cả &gt;</a>
          </div>

          {/* Sản phẩm */}
          <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>

            {/* Item 1 */}
            <div style={{
              width: '140px', textAlign: 'center',
              backgroundColor: 'white', padding: '12px 8px',
              borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              flexShrink: 0
            }}>
              <div style={{ position: 'relative' }}>
                <img src="https://down-vn.img.susercontent.com/file/710ed1641b681b5fad2e67fbb527c068" alt="Bàn Học Gấp Gọn Mini"
                  style={{ width: '100%', height: '100px', objectFit: 'contain', marginBottom: '8px' }} />
                <div style={{
                  position: 'absolute', top: 0, left: 0,
                  backgroundColor: 'orangered', color: 'white',
                  fontWeight: 'bold', fontSize: '12px',
                  padding: '2px 6px'
                }}>TOP</div>
              </div>
              <div style={{ backgroundColor: '#ccc', fontSize: '12px', padding: '2px 0', marginBottom: '4px' }}>Bán 34k+ / tháng</div>
              <div style={{ fontSize: '14px' }}>Bàn Học Gấp Gọn Mini</div>
            </div>
            {/* Item 1 */}
            <div style={{
              width: '140px', textAlign: 'center',
              backgroundColor: 'white', padding: '12px 8px',
              borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              flexShrink: 0
            }}>
              <div style={{ position: 'relative' }}>
                <img src="https://down-vn.img.susercontent.com/file/909c3dffbe686640a9ca4ff4c9cac644" alt="Bàn Học Gấp Gọn Mini"
                  style={{ width: '100%', height: '100px', objectFit: 'contain', marginBottom: '8px' }} />
                <div style={{
                  position: 'absolute', top: 0, left: 0,
                  backgroundColor: 'orangered', color: 'white',
                  fontWeight: 'bold', fontSize: '12px',
                  padding: '2px 6px'
                }}>TOP</div>
              </div>
              <div style={{ backgroundColor: '#ccc', fontSize: '12px', padding: '2px 0', marginBottom: '4px' }}>Bán 34k+ / tháng</div>
              <div style={{ fontSize: '14px' }}>Bàn Học Gấp Gọn Mini</div>
            </div>
            {/* Item 1 */}
            <div style={{
              width: '140px', textAlign: 'center',
              backgroundColor: 'white', padding: '12px 8px',
              borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              flexShrink: 0
            }}>
              <div style={{ position: 'relative' }}>
                <img src="https://down-vn.img.susercontent.com/file/9fcce96cf92603b35c0acf95b17df6e7" alt="Bàn Học Gấp Gọn Mini"
                  style={{ width: '100%', height: '100px', objectFit: 'contain', marginBottom: '8px' }} />
                <div style={{
                  position: 'absolute', top: 0, left: 0,
                  backgroundColor: 'orangered', color: 'white',
                  fontWeight: 'bold', fontSize: '12px',
                  padding: '2px 6px'
                }}>TOP</div>
              </div>
              <div style={{ backgroundColor: '#ccc', fontSize: '12px', padding: '2px 0', marginBottom: '4px' }}>Bán 34k+ / tháng</div>
              <div style={{ fontSize: '14px' }}>Bàn Học Gấp Gọn Mini</div>
            </div>
            {/* Item 1 */}
            <div style={{
              width: '140px', textAlign: 'center',
              backgroundColor: 'white', padding: '12px 8px',
              borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              flexShrink: 0
            }}>
              <div style={{ position: 'relative' }}>
                <img src="https://down-vn.img.susercontent.com/file/d71ce7550959216c3c536515d0771e6a" alt="Bàn Học Gấp Gọn Mini"
                  style={{ width: '100%', height: '100px', objectFit: 'contain', marginBottom: '8px' }} />
                <div style={{
                  position: 'absolute', top: 0, left: 0,
                  backgroundColor: 'orangered', color: 'white',
                  fontWeight: 'bold', fontSize: '12px',
                  padding: '2px 6px'
                }}>TOP</div>
              </div>
              <div style={{ backgroundColor: '#ccc', fontSize: '12px', padding: '2px 0', marginBottom: '4px' }}>Bán 34k+ / tháng</div>
              <div style={{ fontSize: '14px' }}>Bàn Học Gấp Gọn Mini</div>
            </div>
            {/* Item 1 */}
            <div style={{
              width: '140px', textAlign: 'center',
              backgroundColor: 'white', padding: '12px 8px',
              borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              flexShrink: 0
            }}>
              <div style={{ position: 'relative' }}>
                <img src="https://down-vn.img.susercontent.com/file/6142596f32624791af1b5ea8cfa4b8ff" alt="Bàn Học Gấp Gọn Mini"
                  style={{ width: '100%', height: '100px', objectFit: 'contain', marginBottom: '8px' }} />
                <div style={{
                  position: 'absolute', top: 0, left: 0,
                  backgroundColor: 'orangered', color: 'white',
                  fontWeight: 'bold', fontSize: '12px',
                  padding: '2px 6px'
                }}>TOP</div>
              </div>
              <div style={{ backgroundColor: '#ccc', fontSize: '12px', padding: '2px 0', marginBottom: '4px' }}>Bán 34k+ / tháng</div>
              <div style={{ fontSize: '14px' }}>Bàn Học Gấp Gọn Mini</div>
            </div>
            {/* Item 1 */}
            <div style={{
              width: '140px', textAlign: 'center',
              backgroundColor: 'white', padding: '12px 8px',
              borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              flexShrink: 0
            }}>
              <div style={{ position: 'relative' }}>
                <img src="https://down-vn.img.susercontent.com/file/8465ac240b9d43f4b6383626b5167b42" alt="Bàn Học Gấp Gọn Mini"
                  style={{ width: '100%', height: '100px', objectFit: 'contain', marginBottom: '8px' }} />
                <div style={{
                  position: 'absolute', top: 0, left: 0,
                  backgroundColor: 'orangered', color: 'white',
                  fontWeight: 'bold', fontSize: '12px',
                  padding: '2px 6px'
                }}>TOP</div>
              </div>
              <div style={{ backgroundColor: '#ccc', fontSize: '12px', padding: '2px 0', marginBottom: '4px' }}>Bán 34k+ / tháng</div>
              <div style={{ fontSize: '14px' }}>Bàn Học Gấp Gọn Mini</div>
            </div>
            {/* Item 1 */}
            <div style={{
              width: '140px', textAlign: 'center',
              backgroundColor: 'white', padding: '12px 8px',
              borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              flexShrink: 0
            }}>
              <div style={{ position: 'relative' }}>
                <img src="https://down-vn.img.susercontent.com/file/75cb7f359291380dedb46e16ffd4b105" alt="Bàn Học Gấp Gọn Mini"
                  style={{ width: '100%', height: '100px', objectFit: 'contain', marginBottom: '8px' }} />
                <div style={{
                  position: 'absolute', top: 0, left: 0,
                  backgroundColor: 'orangered', color: 'white',
                  fontWeight: 'bold', fontSize: '12px',
                  padding: '2px 6px'
                }}>TOP</div>
              </div>
              <div style={{ backgroundColor: '#ccc', fontSize: '12px', padding: '2px 0', marginBottom: '4px' }}>Bán 34k+ / tháng</div>
              <div style={{ fontSize: '14px' }}>Bàn Học Gấp Gọn Mini</div>
            </div>
            {/* Item 1 */}
            <div style={{
              width: '140px', textAlign: 'center',
              backgroundColor: 'white', padding: '12px 8px',
              borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              flexShrink: 0
            }}>
              <div style={{ position: 'relative' }}>
                <img src="https://down-vn.img.susercontent.com/file/36699bdc79d69f9c26469f7d940b5170" alt="Bàn Học Gấp Gọn Mini"
                  style={{ width: '100%', height: '100px', objectFit: 'contain', marginBottom: '8px' }} />
                <div style={{
                  position: 'absolute', top: 0, left: 0,
                  backgroundColor: 'orangered', color: 'white',
                  fontWeight: 'bold', fontSize: '12px',
                  padding: '2px 6px'
                }}>TOP</div>
              </div>
              <div style={{ backgroundColor: '#ccc', fontSize: '12px', padding: '2px 0', marginBottom: '4px' }}>Bán 34k+ / tháng</div>
              <div style={{ fontSize: '14px' }}>Bàn Học Gấp Gọn Mini</div>
            </div>
            {/* Item 1 */}
            <div style={{
              width: '140px', textAlign: 'center',
              backgroundColor: 'white', padding: '12px 8px',
              borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              flexShrink: 0
            }}>
              <div style={{ position: 'relative' }}>
                <img src="https://down-vn.img.susercontent.com/file/710ed1641b681b5fad2e67fbb527c068" alt="Bàn Học Gấp Gọn Mini"
                  style={{ width: '100%', height: '100px', objectFit: 'contain', marginBottom: '8px' }} />
                <div style={{
                  position: 'absolute', top: 0, left: 0,
                  backgroundColor: 'orangered', color: 'white',
                  fontWeight: 'bold', fontSize: '12px',
                  padding: '2px 6px'
                }}>TOP</div>
              </div>
              <div style={{ backgroundColor: '#ccc', fontSize: '12px', padding: '2px 0', marginBottom: '4px' }}>Bán 34k+ / tháng</div>
              <div style={{ fontSize: '14px' }}>Bàn Học Gấp Gọn Mini</div>
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
                <div className="col l-2 m-3 c-6 home-product-item">
                <Link className="home-product-item-link" to="/product/1">

                    <div
                      className="home-product-item__img"
                      style={{ backgroundImage: "url('Client/img/home/7.PNG')" }}
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
                  <a className="home-product-item-link" href="#">
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
                  </a>
                </div>
                <div className="col l-2 m-3 c-6 home-product-item">
                  <a className="home-product-item-link" href="#">
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
                  </a>
                </div>

              </div>
            </div>


          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#fff8ef', padding: '40px 0', marginTop: '32px' }}>
        <div style={{ width: '1200px', margin: '0 auto' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '24px' }}>BÀI VIẾT NỔI BẬT</h4>

          {/* Hàng 1 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
            <div style={{ width: '32%', backgroundColor: 'white', padding: '16px', borderRadius: '12px' }}>
              <img src="https://file.hstatic.net/1000075078/article/thecoffeehouse_caphehighlight01_de40c0102a954c50a328f7befcdd82bd_grande.jpg" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <p style={{ color: '#777', fontSize: '13px', marginTop: '12px' }}>19/09/2023</p>
              <h5 style={{ fontWeight: 'bold' }}>TRUNG THU NÀY, SAO BẠN KHÔNG TỰ CHIẾU?</h5>
              <p style={{ fontSize: '14px', color: '#333' }}>Bạn đã từng nghe: Trung thu thôi mà, có gì đâu mà chơi...</p>
            </div>
            <div style={{ width: '32%', backgroundColor: 'white', padding: '16px', borderRadius: '12px' }}>
              <img src="https://file.hstatic.net/1000075078/article/cautoankeothom_thecoffeehouse_03_29cd435c9a574e1a867ac36f2c863bb6_grande.jpg" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <p style={{ color: '#777', fontSize: '13px', marginTop: '12px' }}>16/01/2023</p>
              <h5 style={{ fontWeight: 'bold' }}>BỘ SƯU TẬP CÂU TOÀN KẸO THƠM: &quot;VÍA&quot;
              </h5>
              <p style={{ fontSize: '14px', color: '#333' }}>Tết này vẫn giống Tết xưa, nhưng thêm nhiều hoạt động xin vía hiện đại...</p>
            </div>
            <div style={{ width: '32%', backgroundColor: 'white', padding: '16px', borderRadius: '12px' }}>
              <img src="https://file.hstatic.net/1000075078/article/dscf0216_2890bcca44ae49aaaf843d5fa3db2fc6_grande.jpg" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <p style={{ color: '#777', fontSize: '13px', marginTop: '12px' }}>16/08/2022</p>
              <h5 style={{ fontWeight: 'bold' }}>{`KHƯẤY ĐỂ THẤY TRĂNG – KHUẤY LÊN…`}</h5>
              <p style={{ fontSize: '14px', color: '#333' }}>Trung thu 2022 rộn rà, vui vẻ cùng bạn bè, trải nghiệm mới mẻ...</p>
            </div>
          </div>

          {/* Hàng 2 */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '32%', backgroundColor: 'white', padding: '16px', borderRadius: '12px' }}>
              <img src="https://file.hstatic.net/1000075078/article/an_banh_uong_nuoc_nhom_03_d499c0cab14746588fff6fe0dee678ad_grande.jpg" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <p style={{ color: '#777', fontSize: '13px', marginTop: '12px' }}>05/08/2022</p>
              <h5 style={{ fontWeight: 'bold' }}>THỮ GIÂY XANH ĐẺN SÁNG – GIẢI NHIỆT CÀNG HƠNG</h5>
              <p style={{ fontSize: '14px', color: '#333' }}>Lấy cảm hứng từ màu xanh mát, mang đến trài nghiệm thanh mát ngày hè.</p>
            </div>
            <div style={{ width: '32%', backgroundColor: 'white', padding: '16px', borderRadius: '12px' }}>
              <img src="https://file.hstatic.net/1000075078/article/zalo_01c6f0bfb0854951a16a92b52457ca56_grande.jpg" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <p style={{ color: '#777', fontSize: '13px', marginTop: '12px' }}>10/07/2022</p>
              <h5 style={{ fontWeight: 'bold' }}>TRÀ SƯA HÈ RỰC - VÀI NGÀY TRÀ MÁT</h5>
              <p style={{ fontSize: '14px', color: '#333' }}>Đủ ngọt ngào, đủ thơm ngon - combo trà sữa và trái cây tươi mát.</p>
            </div>
            <div style={{ width: '32%', backgroundColor: 'white', padding: '16px', borderRadius: '12px' }}>
              <img src="https://file.hstatic.net/1000075078/article/thecoffeehouse_timesquare_02_b87f7576b02d4d82ba5b7ed4e40b6b00_grande.png" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <p style={{ color: '#777', fontSize: '13px', marginTop: '12px' }}>20/06/2022</p>
              <h5 style={{ fontWeight: 'bold' }}>CHILL THÂU HÈ VỜi SIRO TRÁI CÂY</h5>
              <p style={{ fontSize: '14px', color: '#333' }}>Thư giãn cảm xúc, refresh bản thân bằng sự tươi mới của sữa và hoa quả.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}