import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="content">
        <Outlet /> {/* This renders child routes dynamically */}
      </div>
    </div>
  );
};

export default Layout;
