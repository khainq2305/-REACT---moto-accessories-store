// src/layouts/ClientLayout.jsx
import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import '../../../assets/Client/css/style.css';  // Import style.css cho toàn bộ ứng dụng
import '../../../assets/Client/css/base.css';  // Import style.css cho toàn bộ ứng dụng
import '../../../assets/Client/css/grid.css';  // Import style.css cho toàn bộ ứng dụng
import '../../../assets/Client/css/responsive.css';  // Import style.css cho toàn bộ ứng dụng
import '../../../assets/Client/css/Auth/Login.css';
import '../../../assets/Client/css/cart.css';
import '../../../assets/Client/css/payment.css';
import '../../../assets/Client/css/about.css';
import '../../../assets/Client/css/store.css';
import '../../../assets/Client/css/blog.css';
import '../../../assets/Client/css/contact.css';

import 'font-awesome/css/font-awesome.min.css';
export default function ClientLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
