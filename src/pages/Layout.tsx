import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

const Layout = () => {
  return (
    <div className="w-full h-screen flex flex-row justify-start items-start">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
