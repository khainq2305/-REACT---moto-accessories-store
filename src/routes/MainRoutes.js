// src/routes/MainRouter.jsx
import { useRoutes } from "react-router-dom";
import ClientRoutes from "./ClientRoutes";
import AdminRoutes from "./AdminRoutes"; // ✅ thay vì Router

const MainRouter = () => {
  const routing = useRoutes([
    ...ClientRoutes,
    ...AdminRoutes,
  ]);

  return routing;
};

export default MainRouter;
