import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import useAuth from "@/hooks/useAuth";
import { Role } from "@/types/Role";

const Layout = () => {
  const { role } = useAuth();

  if (role === Role.Guest) {
    return <Navigate to="/login" />;
  }
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
