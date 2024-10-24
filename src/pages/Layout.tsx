import { Outlet } from "react-router-dom";
import Sidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Layout = () => {
  return (
    <SidebarProvider>
      <div className="w-full h-screen flex flex-row justify-start items-start">
        <Sidebar />
        <SidebarTrigger />
        <Outlet />
      </div>
    </SidebarProvider>
  );
};

export default Layout;
