

const BlogPage = () => {
  return (
    <div className="main-container main-news">
    <div className="news-container">
      <div className="news-header">
        <h1>Tin Tức</h1>
        <p>Cập nhật những tin tức mới nhất về trái cây và thực phẩm sạch.</p>
      </div>

      <div className="news-layout">
        {/* Khối bên trái */}
        <div className="news-content">
          <div
            className="news-item"
            onClick={() => (window.location.href = "/news-detail")}
          >
            <a href="/news-detail">
              <img src="https://file.hstatic.net/1000075078/article/thecoffeehouse_caphehighlight01_de40c0102a954c50a328f7befcdd82bd_master.jpg"  alt="Tin tức 1" className="news-thumbnail" />
            </a>
            <div className="news-details">
              <h2 className="news-title">Cách chọn trái cây chín và chất lượng</h2>
              <p className="news-date">20/04/2024</p>
              <p className="news-excerpt">
                Cung cấp các mẹo chọn trái cây chín và chất lượng tại chợ, bao gồm màu sắc, độ cứng và mùi hương. Điều này sẽ đặc biệt hữu ích cho những ai không biết cách đánh giá độ tươi ngon của trái cây
              </p>
              <a href="#" className="read-more">Xem thêm</a>
            </div>
          </div>

          <div
            className="news-item"
            onClick={() => (window.location.href = "/news-detail")}
          >
            <img src="https://file.hstatic.net/1000075078/article/3__1__2b67342f4db64bb082944cf078afd910_master.jpg"  alt="Tin tức 2" className="news-thumbnail" />
            <div className="news-details">
              <h2 className="news-title">Xu hướng và cải tiến trong ngành trái cây</h2>
              <p className="news-date">20/04/2024</p>
              <p className="news-excerpt">
                Đưa tin về các xu hướng trong ngành trái cây như trái cây hữu cơ, trái cây nhập khẩu và các cách thưởng thức trái cây mới (ví dụ: trái cây sấy lạnh). Bạn cũng có thể đề cập đến các giống trái cây mới đang được giới thiệu
              </p>
              <a href="#" className="read-more">Xem thêm</a>
            </div>
          </div>

          <div
            className="news-item"
            onClick={() => (window.location.href = "/news-detail")}
          >
            <img src="https://file.hstatic.net/1000075078/article/zalo_01c6f0bfb0854951a16a92b52457ca56_master.jpg"  alt="Tin tức 3" className="news-thumbnail" />
            <div className="news-details">
              <h2 className="news-title">
                Lợi ích của chế độ ăn dựa trên thực vật và vai trò của trái cây
              </h2>
              <p className="news-date">20/04/2024</p>
              <p className="news-excerpt">
                Thảo luận về vai trò của trái cây trong chế độ ăn dựa trên thực vật và các dưỡng chất mà chúng cung cấp. Giải thích tầm quan trọng của trái cây trong chế độ ăn cân đối và lợi ích cho sức khỏe tổng thể
              </p>
              <a href="#" className="read-more">Xem thêm</a>
            </div>
          </div>

          <div
            className="pagination"
            onClick={() => (window.location.href = "/news-detail")}
          >
            <div className="page-item active">1</div>
            <div className="page-item">2</div>
            <div className="dots">...</div>
            <div className="page-item">8</div>
          </div>
        </div>

        {/* Khối bên phải */}
        <aside className="news-sidebar">
          <div className="news-categories">
            <h3>Danh Mục Blog</h3>
            <ul>
              <li><a href="#">Tin Tức Nam An (59)</a></li>
              <li><a href="#">Tin Khuyến Mãi (106)</a></li>
              <li><a href="#">Tin Tuyển Dụng (3)</a></li>
              <li><a href="#">Kiến Thức Sản Phẩm (128)</a></li>
              <li><a href="#">Công Thức Nấu Ăn (26)</a></li>
            </ul>
          </div>

          <div className="featured-news">
            <h3>Bài Viết Mới Nhất</h3>

            <div className="featured-item">
              <img src="https://file.hstatic.net/1000075078/article/thecoffeehouse_caphehighlight01_de40c0102a954c50a328f7befcdd82bd_master.jpg" alt="Bài viết mới nhất 1" />
              <div>
                <a href="#">Vì Sao Cả Thế Giới Phát Cuồng PARMIGIANO...</a>
                <p>Tháng 10 30, 2024</p>
              </div>
            </div>

            <div className="featured-item">
              <img src="https://file.hstatic.net/1000075078/article/3__1__2b67342f4db64bb082944cf078afd910_master.jpg"  alt="Bài viết mới nhất 2" />
              <div>
                <a href="#">Khám Phá Bí Mật Của &apos;Vua Phô Mai&apos; Pháp...
                </a>
                <p>Tháng 10 11, 2024</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
  );
};

export default BlogPage;
