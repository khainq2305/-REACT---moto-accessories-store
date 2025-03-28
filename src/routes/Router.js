import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';

/* ***Layouts**** */
const FullLayout = lazy(() => import('../layouts/full/FullLayout'));
const BlankLayout = lazy(() => import('../layouts/blank/BlankLayout'));

/* ****Pages***** */
const Dashboard = lazy(() => import('../views/dashboard/Dashboard'))

const Error = lazy(() => import('../views/authentication/Error'));
const Register = lazy(() => import('../views/authentication/Register'));
const Login = lazy(() => import('../views/authentication/Login'));

const BasicTable = lazy(() => import("../views/tables/BasicTable"));

const FormLayouts = lazy(() => import("../views/form-layouts/FormLayouts"));
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const User = lazy(() => import("../views/pages/Users/UserAdd"));
const UserList = lazy(()=> import("../views/pages/Users/UserList"))
const Contact = lazy(() => import("../views/pages/Contact/Contact"))
=======
=======
>>>>>>> 5483f35 (Quan ly san pham)
/* ✅ Import Product Pages */
const ProductList = lazy(() => import("../views/product/ProductList.js"));

const ProductAdd = lazy(() => import("../views/product/ProductAdd"));
const ProductEdit = lazy(() => import("../views/product/ProductAdd")); // Dùng chung với form thêm
const ProductTrash = lazy(() => import("../views/product/ProductTrash"));
const OrderList = lazy(() => import("../views/orders/OrderList"));
const OrderDetail = lazy(() => import("../views/orders/OrderDetail"));
<<<<<<< HEAD
>>>>>>> 5483f35 (Quan ly san pham)
=======
const User = lazy(() => import("../views/pages/Users/UserAdd"));
const UserList = lazy(()=> import("../views/pages/Users/UserList"))
const Contact = lazy(() => import("../views/pages/Contact/Contact"))
>>>>>>> cdf9d17 (First commit)
=======
>>>>>>> 5483f35 (Quan ly san pham)
const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },

      { path: "/tables/basic-table", element: <BasicTable /> },
      { path: "/form-layouts", element: <FormLayouts /> },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      { path: "/users/useradd", element: <User /> },
      { path: "/users/userlist", element: <UserList /> },
      { path: "/contact/contact", element: <Contact /> },
=======
=======
>>>>>>> 5483f35 (Quan ly san pham)
  // ✅ Sửa lỗi: Chỉ cần thêm routes sản phẩm vào đây
  { path: "/products", element: <ProductList /> }, 
  { path: "/products/add", element: <ProductAdd /> },
  { path: "/products/edit/:id", element: <ProductEdit /> }, // thêm route edit
  { path: '/products/trash', element: <ProductTrash /> },
  { path: '/orders', element: <OrderList /> },
      { path: '/orders/:id', element: <OrderDetail /> },
<<<<<<< HEAD
>>>>>>> 5483f35 (Quan ly san pham)
=======
      { path: "/users/useradd", element: <User /> },
      { path: "/users/userlist", element: <UserList /> },
      { path: "/contact/contact", element: <Contact /> },
>>>>>>> cdf9d17 (First commit)
=======
>>>>>>> 5483f35 (Quan ly san pham)
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

const router = createBrowserRouter(Router);

export default router;