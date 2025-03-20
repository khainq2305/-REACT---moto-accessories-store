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

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },

      { path: "/tables/basic-table", element: <BasicTable /> },
      { path: "/form-layouts", element: <FormLayouts /> },
  

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
