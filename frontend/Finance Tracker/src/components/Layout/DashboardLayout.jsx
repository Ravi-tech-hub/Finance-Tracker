import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import SideMenu from "./SideMenu";
import Navbar from "./Navbar";
const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Navbar activeMenu={activeMenu} />
      {user && (
        <div className="flex min-h-[calc(100vh-61px)]">
          <div className="hidden lg:block">
            <SideMenu activeMenu={activeMenu} />
          </div>
          <main className="grow px-4 sm:px-6 lg:px-8 py-6">{children}</main>
        </div>
      )}
    </>
  );
};
export default DashboardLayout;
