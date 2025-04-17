import styles from '../../../assets/Client/css/Home/topSearchSection.module.css';

const topItems = [
  {
    name: 'Loa Vi Tính',
    sold: 'Bán 9k+ / tháng',
    img: 'https://down-vn.img.susercontent.com/file/0af0129cabd913b58795a9ba49561f07',
  },
  {
    name: 'Áo Khoác Blazer Nam',
    sold: 'Bán 3k+ / tháng',
    img: 'https://down-vn.img.susercontent.com/file/909c3dffbe686640a9ca4ff4c9cac644',
  },
  {
    name: 'Máy Xay Cầm Tay',
    sold: 'Bán 11k+ / tháng',
    img: 'https://down-vn.img.susercontent.com/file/f4b1c76329022b9109d709e0b2a3e851',
  },
  {
    name: 'Máy Hút Bụi Deerma',
    sold: 'Bán 6k+ / tháng',
    img: 'https://down-vn.img.susercontent.com/file/f88df72ed2bf168fce89c01b84e6d904',
  },
  {
    name: 'Máy Hút Bụi',
    sold: 'Bán 7k+ / tháng',
    img: 'https://down-vn.img.susercontent.com/file/76af6be440d2661da352bdf7ec57b273',
  },
  {
    name: 'Quạt Tích Điện',
    sold: 'Bán 7k+ / tháng',
    img: 'https://down-vn.img.susercontent.com/file/2c11bf21c07bd1d10969036479a86903',
  },
];

export default function TopSearchSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.header}>
            <h3 className={styles.title}>TÌM KIẾM HÀNG ĐẦU</h3>
            <a href="#" className={styles.viewAll}>Xem Tất Cả &gt;</a>
          </div>

          {topItems.map((item, idx) => (
            <div key={idx} className={styles.item}>
              <div className={styles.imageWrapper}>
                <img src={item.img} alt={item.name} />
                <span className={styles.topTag}>TOP</span>
              </div>
              <div className={styles.sold}>{item.sold}</div>
              <div className={styles.name}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

