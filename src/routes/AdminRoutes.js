import { lazy } from "react";
import { Navigate } from "react-router-dom";
import AdminRoute from "../components/RouteGuards/AdminRoute";

// Layout
const FullLayout = lazy(() => import("../layouts/full/FullLayout"));

// Dashboard
const Dashboard = lazy(() => import("../views/dashboard/Dashboard"));

// Product
const ProductList = lazy(() => import("../views/product/ProductList"));
const ProductAddOrEdit = lazy(() => import("../views/product/ProductAddOrEdit"));

const ProductTrash = lazy(() => import("../views/product/ProductTrash"));

// Order
const OrderList = lazy(() => import("../views/orders/OrderList"));
const OrderDetail = lazy(() => import("../views/orders/OrderDetail"));

// User
const User = lazy(() => import("../views/pages/Users/UserAdd"));
const UserList = lazy(() => import("../views/pages/Users/UserList"));

// Contact
const Contact = lazy(() => import("../views/pages/Contact/Contact"));

// Category
const CategoryPage = lazy(() => import("../views/category/CategoryPage"));
const CategoryList = lazy(() => import("../views/category/CategoryList"));
const CategoryForm = lazy(() => import("../views/category/Category-add"));
const CategoryEdit = lazy(() => import("../views/category/CategoryEdit"));
const CategoryTrash = lazy(() => import("../views/category/CategoryTrash"));

// Comment
const CommentList = lazy(() => import("../views/comment/CommentList"));
const CommentDetail = lazy(() => import("../views/comment/CommentDetail"));
const CommentPage = lazy(() => import("../views/comment/CommentPage"));

const AdminRoutes = [
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <FullLayout />
      </AdminRoute>
    ),
    children: [
      { path: "", element: <Navigate to="dashboard" /> },
      { path: "dashboard", element: <Dashboard /> },

      // Users
      { path: "users/useradd", element: <User /> },
      { path: "users/userlist", element: <UserList /> },

      // Contact
      { path: "contact/contact", element: <Contact /> },

      // Products
 // Products
{ path: "products", element: <ProductList /> },
{ path: "products/add", element: <ProductAddOrEdit /> },
{ path: "products/edit/:id", element: <ProductAddOrEdit /> },
{ path: "products/trash", element: <ProductTrash /> },

      // Orders
      { path: "orders", element: <OrderList /> },
      { path: "orders/:id", element: <OrderDetail /> },

      // Categories
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

      // Comments
      {
        path: "comment",
        element: <CommentPage />,
        children: [
          { path: "", element: <CommentList /> },
          { path: ":productId", element: <CommentDetail /> },
        ],
      },

      // Redirect unknown route
      { path: "*", element: <Navigate to="/admin/dashboard" /> },
    ],
  },
];

export default AdminRoutes;
