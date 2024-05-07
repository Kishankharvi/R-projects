import React, { useContext } from "react";

import { CartItem } from "./cart-item";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";
import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkOut } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const Navigate = useNavigate();
  console.log("cart opened");
  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            console.log("Product ID:", product.id);
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal :${totalAmount}</p>
          <button onClick={() => Navigate("/")}>Continue Shopping</button>
          <button
            onClick={() => {
              checkOut();
              Navigate("/ ");
            }}
          >
            {""}
            CheckOut{""}
          </button>
        </div>
      ) : (
        <h1>Your shopping cart is empty</h1>
      )}
    </div>
  );
};
