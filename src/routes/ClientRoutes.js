

// ✅ Đổi từ ../pages/... sang ../views/...
import ProductPage from '../views/Client/Product';
import ProductDetail from '../views/Client/Product/Detail';
import ShopeeBanner from '../views/Client/Home';
import CartPage from '../views/Client/Cart';
import CheckoutPage from '../views/Client/Payment';
import LoginPage from '../views/Client/Auth/Login';
import HomepageSection from '../views/Client/About';
import StorePage from '../views/Client/Store';
import BlogPage from '../views/Client/Blog';
import ContactPage from '../views/Client/Contact';

import RegisterPage from '../views/Client/Auth/Register';

// ✅ Layout đúng
import ClientLayout from "../layouts/Client/ClientLayout";

const ClientRoutes = [
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      { path: "", element: <ShopeeBanner /> },
      { path: "product", element: <ProductPage /> },
      { path: "product/1", element: <ProductDetail /> },
      { path: "cart", element: <CartPage /> },
      { path: "thanhtoan", element: <CheckoutPage /> },
      { path: "about", element: <HomepageSection /> },
      { path: "blog", element: <BlogPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "cua-hang", element: <StorePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },

    ],
  },
];

export default ClientRoutes;
