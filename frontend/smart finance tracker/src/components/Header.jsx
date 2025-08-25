import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsloggedIn(!!token);
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsloggedIn(false);
    navigate("/login");
  };

  return (
    <>
      <header>
        <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... shadow-lg h-20 w-full flex justify-between text-white ">
          <div className="  text-2xl font-bold text- font-serif mt-6 ml-3">
            <Link to="/">Finance Tracker</Link>
          </div>
          <div className="hidden md:flex space-x-4 text-lg font-bold font-serif items-center">
            <Link to="/" className="">
              Home
            </Link>
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="">
                  Dashboard
                </Link>
                <Link to="/anaytics" className="">
                  Analytics
                </Link>
                <button onClick={handleLogout} className="flex ">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signup" className="">
                  sign Up
                </Link>
                <Link to="/login" className="mr-3">
                  Login
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex flex-col space-y-4 p-4 font-bold">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                  Dashboard
                </Link>
                <Link to="/analytics" onClick={() => setMenuOpen(false)}>
                  Analytics
                </Link>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/signup" onClick={() => setMenuOpen(false)}>
                  Sign Up
                </Link>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
              </>
            )}
          </div>
        )}
      </header>
    </>
  );
};
export default Header;
