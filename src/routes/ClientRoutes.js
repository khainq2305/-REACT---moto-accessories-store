// src/routes/ClientRoutes.js
import ClientLayout from '../layouts/Client/ClientLayout';
import Home from '../views/Client/Home';
import ProductPage from '../views/Client/Product';
import ProductDetail from '../views/Client/Product/Detail';
import CartPage from '../views/Client/Cart';
import CheckoutPage from '../views/Client/Payment';
import StorePage from '../views/Client/Store';
import BlogPage from '../views/Client/Blog';
import ContactPage from '../views/Client/Contact';
import HomepageSection from '../views/Client/About';
// 📦 Profile (Tài khoản, Đơn mua)
import ProfileLayout from '../views/Client/Profile/ProfileLayout';
import ProfileInfo from '../views/Client/Profile/ProfileInfo';
import OrderList from '../views/Client/Profile/OrderList';
import AuthPage from '../views/Client/Auth/Auth';
// ✨ Auth

import AuthLayout from '../layouts/AuthLayout';
const ClientRoutes = [
  // ✅ Auth route đặt riêng ngoài ClientLayout
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <AuthPage /> },
    ],
  },

  // ✅ Các route dùng chung layout Client
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "product", element: <ProductPage /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "cart", element: <CartPage /> },
      { path: "thanhtoan", element: <CheckoutPage /> },
      { path: "about", element: <HomepageSection /> },
      { path: "blog", element: <BlogPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "cua-hang", element: <StorePage /> },

      {
        path: "account",
        element: <ProfileLayout />,
        children: [
          { index: true, element: <ProfileInfo /> },
          { path: "info", element: <ProfileInfo /> },
          { path: "orders", element: <OrderList /> },
        ],
      },
    ],
  },
];


export default ClientRoutes;
