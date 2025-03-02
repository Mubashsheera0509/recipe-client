import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/App_Context";

const Navbar = () => {
  const { isAuthenticated, logOut } = useContext(AppContext);

  return (
    <div className="navbar-container bg-dark p-2 d-flex justify-content-between align-items-center">
      <Link to="/" className="text-white text-decoration-none">
        <h2>SAVORISM</h2>
      </Link>
      <div className="nav-buttons d-flex align-items-center">
        {isAuthenticated ? (
          <>
            <Link to="/add" className="btn btn-info mx-2">
              Add
            </Link>
            <Link to="/profile" className="btn btn-warning mx-2">
              Profile
            </Link>
            <button className="btn btn-danger mx-2" onClick={logOut}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-primary mx-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-warning mx-2">
              Register
            </Link>
          </>
        )}
        <Link to="/saved" className="btn btn-light mx-2">
          Saved
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
