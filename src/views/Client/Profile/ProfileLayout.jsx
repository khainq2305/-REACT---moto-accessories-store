import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function ProfileLayout() {
  return (
    <div
      className="profile-wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#f5f5f5",
      }}
    >
      <div style={{ width: 1200, display: "flex", padding: 24, background: "#fff" }}>
        <Sidebar />
        <div className="profile-content" style={{ flex: 1, paddingLeft: 24 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
