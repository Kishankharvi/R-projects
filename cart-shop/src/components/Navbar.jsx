import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";
export const Navbar = () => {
  console.log("nav opened");
  return (
    <div className="Navbar">
      <div className="links">
        <Link to="/" onClick={console.log("clicked")}>
          Shop
        </Link>

        <Link to="/contact" onClick={console.log("clicked2")}>
          Contact
        </Link>
        <Link to="/cart" onClick={console.log("clicked3")}>
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
