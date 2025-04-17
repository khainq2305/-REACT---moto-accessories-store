import { Link } from "react-router-dom";
import styles from "../../../assets/Client/css/Home/categorySection.module.css";

const categories = [
  { id: 1, name: "Thời Trang Nam", imageUrl: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
  { id: 2, name: "Điện Thoại & Phụ Kiện", imageUrl: "https://cdn-icons-png.flaticon.com/512/5973/5973800.png" },
  { id: 3, name: "Thiết Bị Điện Tử", imageUrl: "https://cdn-icons-png.flaticon.com/512/921/921347.png" },
  { id: 4, name: "Máy Tính & Laptop", imageUrl: "https://cdn-icons-png.flaticon.com/512/270/270798.png" },
  { id: 5, name: "Máy Ảnh & Máy Quay Phim", imageUrl: "https://cdn-icons-png.flaticon.com/512/2920/2920236.png" },
  { id: 6, name: "Đồng Hồ", imageUrl: "https://cdn-icons-png.flaticon.com/512/3909/3909444.png" },
  { id: 7, name: "Giày Dép Nam", imageUrl: "https://cdn-icons-png.flaticon.com/512/2503/2503508.png" },
  { id: 8, name: "Thiết Bị Điện Gia Dụng", imageUrl: "https://cdn-icons-png.flaticon.com/512/3050/3050129.png" },
  { id: 9, name: "Thể Thao & Du Lịch", imageUrl: "https://cdn-icons-png.flaticon.com/512/3761/3761323.png" },
  { id: 10, name: "Ô Tô & Xe Máy & Xe Đạp", imageUrl: "https://cdn-icons-png.flaticon.com/512/7437/7437054.png" },
  { id: 11, name: "Thời Trang Nữ", imageUrl: "https://cdn-icons-png.flaticon.com/512/892/892457.png" },
  { id: 12, name: "Mẹ & Bé", imageUrl: "https://cdn-icons-png.flaticon.com/512/2133/2133281.png" },
  { id: 13, name: "Nhà Cửa & Đời Sống", imageUrl: "https://cdn-icons-png.flaticon.com/512/1046/1046890.png" },
  { id: 14, name: "Sắc Đẹp", imageUrl: "https://cdn-icons-png.flaticon.com/512/826/826071.png" },
  { id: 15, name: "Sức Khỏe", imageUrl: "https://cdn-icons-png.flaticon.com/512/3209/3209156.png" },
  { id: 16, name: "Giày Dép Nữ", imageUrl: "https://cdn-icons-png.flaticon.com/512/921/921347.png" },
  { id: 17, name: "Túi Ví Nữ", imageUrl: "https://cdn-icons-png.flaticon.com/512/951/951081.png" },
  { id: 18, name: "Phụ Kiện & Trang Sức Nữ", imageUrl: "https://cdn-icons-png.flaticon.com/512/3340/3340061.png" },
  { id: 19, name: "Bách Hóa Online", imageUrl: "https://cdn-icons-png.flaticon.com/512/2552/2552801.png" },
  { id: 20, name: "Nhà Sách Online", imageUrl: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png" },
];

export default function CategorySection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.header}>DANH MỤC</div>
        {categories.map((item) => (
          <Link
            to={`/product?category=${item.id}`}
            key={item.id}
            className={styles.item}
          >
            <img src={item.imageUrl} alt={item.name} className={styles.icon} />
            <span className={styles.label}>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
