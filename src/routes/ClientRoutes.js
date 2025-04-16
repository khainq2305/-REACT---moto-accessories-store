// src/routes/ClientRoutes.js
import ClientLayout from '../layouts/Client/ClientLayout';
import Home from '../views/Client/Home';
import ProductPage from '../views/Client/Product';
import ProductDetail from '../views/Client/Product/Detail';
import CartPage from '../views/Client/Cart';
import CheckoutPage from '../views/Client/Payment';

// 📦 Profile (Tài khoản, Đơn mua)
import ProfileLayout from '../views/Client/Profile/ProfileLayout';
import ProfileInfo from '../views/Client/Profile/ProfileInfo';
import OrderList from '../views/Client/Profile/OrderList';

// ✨ Auth
import LoginPage from '../views/Client/Auth/Login';
import RegisterPage from '../views/Client/Auth/Register';

const ClientRoutes = [
  {
    path: '/',
    element: <ClientLayout />, // giao diện chung: header/footer
    children: [
      { index: true, element: <Home /> },
      { path: 'product', element: <ProductPage /> },
      { path: 'product/:id', element: <ProductDetail /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'thanhtoan', element: <CheckoutPage /> },

      // 👤 Tài khoản / Đơn mua
      {
        path: 'account',
        element: <ProfileLayout />,
        children: [
          { index: true, element: <ProfileInfo /> }, // khi truy cập /account
          { path: 'info', element: <ProfileInfo /> },
          { path: 'orders', element: <OrderList /> },
        ],
      },

      // 🏥 Auth
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },
];

export default ClientRoutes;
