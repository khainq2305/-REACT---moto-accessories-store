import React, { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import { productService } from '../../../../services/productService';
import TopSection from './TopSection';
import InfoSection from './InfoSection';
import DescriptionSection from './DescriptionSection';
import ReviewSection from './ReviewSection';
import RelatedProducts from './RelatedProducts';


const variants = [
  {
    label: 'XÁM-BỘ 2pin10 CELL',
    img: 'https://down-vn.img.susercontent.com/file/a47fad230034db8ea8439d879c3cfb49.webp',
  },
  {
    label: 'XÁM-BỘ 2pin10 CELL',
    img: 'https://down-vn.img.susercontent.com/file/a47fad230034db8ea8439d879c3cfb49.webp',
  },
  {
    label: 'XÁM-BỘ 2pin10 CELL',
    img: 'https://down-vn.img.susercontent.com/file/a47fad230034db8ea8439d879c3cfb49.webp',
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');
  
  useEffect(() => {
    productService.getProductById(id)
      .then(res => {
        console.log('📦 Product:', res.data);
        setProduct(res.data);
      })
      .catch(err => console.error('❌ Error:', err));
  }, [id]);

  const getFinalPrice = () => {
    if (!product) return 0;
    const price = Number(product.price || 0);
    const discount = Number(product.discount || 0);
    return price - discount;
  };

  const formatPrice = (price) => {
    if (isNaN(price)) return '0₫';
    return Number(price).toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  };

  if (!product) return <div>Đang tải sản phẩm...</div>;

  return (
    <div className="bg-light py-4">
      <Container style={{ maxWidth: '1200px', background: 'none' }}>
        <TopSection
          product={product}
          quantity={quantity}
          setQuantity={setQuantity}
          error={error}
          setError={setError}
          variants={variants}
          formatPrice={formatPrice}
          getFinalPrice={getFinalPrice}
        />
  
        <InfoSection />
  
        <DescriptionSection />
  
        <ReviewSection />
  
        <RelatedProducts />
      </Container>
    </div>
  );
  
};

export default ProductDetail;
