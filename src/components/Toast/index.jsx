import React, { useEffect } from 'react';
import styles from './CustomToast.module.css';

const CustomToast = ({ image, name, price, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={styles['custom-toast']}>
      <button className={styles['toast-close']} onClick={onClose}>×</button>
      <div className={styles['toast-content']}>
        <img src={image} alt={name} className={styles['toast-img']} />
        <div className={styles['toast-info']}>
          <div className={styles['toast-title']}>Đã thêm vào giỏ hàng thành công!</div>
          <div className={styles['toast-name']}>{name}</div>
          <div className={styles['toast-price']}>{price.toLocaleString('vi-VN')}₫</div>
        </div>
      </div>
      <div className={styles['toast-progress']} />
    </div>
  );
};

export default CustomToast;
