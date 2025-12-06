import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ token }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">AuthApp</span>
      </div>
      <div className="nav-right">
        {!token ? (
          <>
            <Link className={isActive("/login")} to="/login">
              Login
            </Link>
            <Link className={isActive("/signup")} to="/signup">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link className={isActive("/dashboard")} to="/dashboard">
              Dashboard
            </Link>
            <button className="btn btn-outline" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
