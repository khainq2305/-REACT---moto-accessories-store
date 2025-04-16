import React from "react";
import "../../../assets/Client/css/Profile/profileInfo.css";


export default function ProfileInfo() {
    return (
      <div className="profile-info-wrapper">
        <div className="profile-info-left">
          <h1>Hồ Sơ Của Tôi</h1>
          <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
  
          <div className="form-group">
            <label>Tên đăng nhập</label>
            <strong>vanhaihia2002</strong>
          </div>
  
          <div className="form-group">
            <label>Tên</label>
            <input type="text" placeholder="Nhập tên..." />
          </div>
  
          <div className="form-group">
            <label>Email</label>
            <span>kh*********@gmail.com</span> <a href="#">Thay Đổi</a>
          </div>
  
          <div className="form-group">
            <label>Số điện thoại</label>
            <a href="#">Thêm</a>
          </div>
  
          <div className="form-group">
            <label>Giới tính</label>
            <div className="inline-group">
              <label><input type="radio" name="gender" /> Nam</label>
              <label><input type="radio" name="gender" /> Nữ</label>
              <label><input type="radio" name="gender" /> Khác</label>
            </div>
          </div>
  
          <div className="form-group">
            <label>Ngày sinh</label>
            <div className="select-group">
              <select><option>Ngày</option></select>
              <select><option>Tháng</option></select>
              <select><option>Năm</option></select>
            </div>
          </div>
  
          <button className="btn-save">Lưu</button>
        </div>
  
        <div className="profile-info-right">
          <div className="avatar-circle">Q</div>
          <div className="avatar-upload">
            <button>Chọn Ảnh</button>
            <small>Dung lượng file tối đa 1 MB</small>
            <small>Định dạng:.JPEG, .PNG</small>
          </div>
        </div>
      </div>
    );
  }
