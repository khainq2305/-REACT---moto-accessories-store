import React, { useEffect } from 'react';
import styles from './CustomToast.module.css';

const CustomToast = ({ image, name, price, oldPrice, onClose }) => {

  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={styles['custom-toast']}>
      <button className={styles['toast-close']} onClick={onClose}>×</button>
      <div className={styles['toast-content']}>
      <img
  src={image ? `http://localhost:3000/uploads/${image}` : "/fallback.png"}
  alt={name}
  className={styles['toast-img']}
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = "/fallback.png";
  }}
/>

        <div className={styles['toast-info']}>
          <div className={styles['toast-title']}>Đã thêm vào giỏ hàng thành công!</div>
          <div className={styles['toast-name']}>{name}</div>
          <div className={styles['toast-price']}>
            {oldPrice && (
              <span className={styles['toast-old-price']}>
                {Number(oldPrice).toLocaleString('vi-VN')}₫
              </span>
            )}
            <span className={styles['toast-final-price']}>
              {Number(price).toLocaleString('vi-VN')}₫
            </span>
          </div>
        </div>
      </div>
      <div className={styles['toast-progress']} />
    </div>
  );
};

export default CustomToast;
