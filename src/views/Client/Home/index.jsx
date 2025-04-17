import { useEffect, useState } from "react";

import { getFeaturedProducts } from "../../../services/productService"; // 👈 Sử dụng API mới
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopeeMainBanner from "./ShopeeMainBanner";
import CategorySection from "./CategorySection";
import TopSearchSection from "./TopSearchSections";
import ProductSection from "./ProductSection";
import BlogSection from "./BlogSection";

export default function ShopeeBanner() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchFeaturedProducts = async () => {
      try {
        const res = await getFeaturedProducts(); 
      
        const productList = Array.isArray(res.data) ? res.data : [];
        setProducts(productList);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm nổi bật:", error);
      }
    };

   
    fetchFeaturedProducts();
  }, []);

  return (
    <>
      <ShopeeMainBanner />

      <div style={{ backgroundColor: "#F5F5F5", padding: "16px 0" }}>
      <CategorySection />

        <TopSearchSection />

       

        <ProductSection products={products} />
        <BlogSection />
      </div>
    </>
  );
}
