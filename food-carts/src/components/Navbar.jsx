import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useAuth } from "./../context/Authcontext";
import axios from "axios";
import "./Navbar.css";

export const Navbar = () => {
  const { isLoggedIn, user, logout, isSignedIn } = useAuth();

  return (
    <div className="Navbar">
      <div className="links">
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        {isLoggedIn || isSignedIn ? (
          <>
            <Link to="/profile">{user ? user.username : "Profile"}</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};
