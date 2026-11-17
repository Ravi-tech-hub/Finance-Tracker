import React from "react";
import { useState } from "react";
import SideMenu from "./SideMenu";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <>
      <div className="flex items-center gap-5 bg-white/90 border-b border-slate-200 backdrop-blur py-4 px-5 sm:px-7 sticky top-0 z-30 shadow-sm shadow-slate-200/50">
        <button
          className="block lg:hidden text-slate-800 hover:text-emerald-700"
          onClick={() => {
            setOpenSideMenu(!openSideMenu);
          }}
          aria-label="Toggle navigation"
        >
          {openSideMenu ? (
            <HiOutlineX className="text-2xl" />
          ) : (
            <HiOutlineMenu className="text-2xl" />
          )}
        </button>
        <h2 className="text-lg font-semibold text-slate-950">
          Smart Finance Tracker
        </h2>
        {openSideMenu && (
          <div className="fixed top-[61px] left-0 z-40 w-64 h-[calc(100vh-61px)] bg-white border-r border-slate-200 lg:hidden shadow-xl shadow-slate-950/10">
            <SideMenu activeMenu={activeMenu} />
          </div>
        )}
      </div>
    </>
  );
};
export default Navbar;
