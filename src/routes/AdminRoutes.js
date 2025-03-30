// src/routes/AdminRoutes.js
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const FullLayout = lazy(() => import("../layouts/full/FullLayout"));
const Dashboard = lazy(() => import("../views/dashboard/Dashboard"));
const ProductList = lazy(() => import("../views/product/ProductList"));
const ProductAdd = lazy(() => import("../views/product/ProductAdd"));
const ProductEdit = lazy(() => import("../views/product/ProductAdd"));
const ProductTrash = lazy(() => import("../views/product/ProductTrash"));
const OrderList = lazy(() => import("../views/orders/OrderList"));
const OrderDetail = lazy(() => import("../views/orders/OrderDetail"));
const User = lazy(() => import("../views/pages/Users/UserAdd"));
const UserList = lazy(() => import("../views/pages/Users/UserList"));
const Contact = lazy(() => import("../views/pages/Contact/Contact"));

const CategoryPage = lazy(() => import("../views/category/CategoryPage"));
const CategoryList = lazy(() => import("../views/category/CategoryList"));
const CategoryForm = lazy(() => import("../views/category/Category-add"));
const CategoryEdit = lazy(() => import("../views/category/CategoryEdit"));
const CategoryTrash = lazy(() => import("../views/category/CategoryTrash"));

const CommentList = lazy(() => import("../views/comment/CommentList"));
const CommentDetail = lazy(() => import("../views/comment/CommentDetail"));
const CommentPage = lazy(() => import("../views/comment/CommentPage"));

const AdminRoutes = [
  {
    path: "/admin",
    element: <FullLayout />,
    children: [
      { path: "", element: <Navigate to="dashboard" /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "users/useradd", element: <User /> },
      { path: "users/userlist", element: <UserList /> },
      { path: "contact/contact", element: <Contact /> },

      { path: "products", element: <ProductList /> },
      { path: "products/add", element: <ProductAdd /> },
      { path: "products/edit/:id", element: <ProductEdit /> },
      { path: "products/trash", element: <ProductTrash /> },
      { path: "orders", element: <OrderList /> },
      { path: "orders/:id", element: <OrderDetail /> },

      {
        path: "category",
        element: <CategoryPage />,
        children: [
          { path: "", element: <CategoryList /> },
          { path: "create", element: <CategoryForm /> },
          { path: "edit/:id", element: <CategoryEdit /> },
          { path: "trash", element: <CategoryTrash /> },
        ],
      },
      {
        path: "comment",
        element: <CommentPage />,
        children: [
          { path: "", element: <CommentList /> },
          { path: ":productId", element: <CommentDetail /> },
        ],
      },
      { path: "*", element: <Navigate to="/admin/dashboard" /> },
    ],
  },
];

export default AdminRoutes;
