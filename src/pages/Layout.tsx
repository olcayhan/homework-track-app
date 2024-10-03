import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-screen flex flex-row justify-center items-start p-6">
      <div className="w-1/4 h-full flex flex-col justify-start items-center gap-3 border border-neutral-950"></div>
      <Outlet />
    </div>
  );
};

export default Layout;
