import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SIDE_MENU_DATA } from "../../utils/data";
import { UserContext } from "../../context/userContext";
const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleClick = (route) => {
    if (route === "/logout") {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };
  return (
    <>
      <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-slate-200 p-5 sticky top-[61px] z-20">
        <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-6 pb-6 border-b border-slate-100">
          {user?.profileUrl ? (
            <img
              src={user?.profileUrl || ""}
              alt="Profile Image"
              className="w-20 h-20 bg-slate-200 rounded-full object-cover ring-4 ring-emerald-50"
            />
          ) : user?.fullName ? (
            <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full ring-4 ring-emerald-50 flex items-center justify-center text-2xl font-semibold">
              {user.fullName.charAt(0)}
            </div>
          ) : null}

          {user?.fullName && (
            <h5 className="text-slate-950 font-semibold leading-6 text-center">
              {user.fullName}
            </h5>
          )}
        </div>
        {SIDE_MENU_DATA.map((item, index) => (
          <button
            key={`menu_${index}`}
            className={`w-full flex items-center gap-4 text-[15px] py-3 px-5 rounded-lg mb-2 ${
              activeMenu === item.label
                ? "text-white bg-emerald-600 shadow-lg shadow-emerald-600/20"
                : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
            }`}
            onClick={() => handleClick(item.path)}
          >
            <item.icon className="text-xl" />
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
};
export default SideMenu;
