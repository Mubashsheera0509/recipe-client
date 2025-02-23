import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    
    <div className="navbar-container">
    <h2 className="logo">SAVORISM</h2>
    <div className="nav-buttons">
      <Link to={"/login"} className="btn btn-primary mx-2">Login</Link>
      <Link to={"/register"}className="btn btn-warning mx-2">Register</Link>
      <Link to={"/add"} className="btn btn-info mx-2">Add</Link>
      <Link to={"/profile"} className="btn btn-warning mx-2">Profile</Link>
      <button className="btn btn-danger mx-2">Logout</button>
      <Link to={"/saved"}className="btn btn-light mx-2">Saved</Link>
      </div>
  
      </div>

    </>
  );
};

export default Navbar;