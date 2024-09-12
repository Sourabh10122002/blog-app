import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => (
  <nav className="header">
    <div className="header-left">
      <Link to="/">Home</Link>
    </div>
    <div className="header-right">
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  </nav>
);
