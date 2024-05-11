import React, { useContext } from "react";

import { CartItem } from "./cart-item";
import { ShopContext } from "../../context/shop-context";
//import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkOut } = useContext(ShopContext);
  const PRODUCTS = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    // Add more products as needed
  ];
  const totalAmount = getTotalCartAmount();
  //const Navigate = useNavigate();
  console.log("cart opened");
  /* const cartItemsArray = Object.entries(cartItems).map((id, quantity) => ({
    id: id,
    quantity: quantity,
  }));*/
  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cart">
        {Object.entries(cartItems).map(([itemId, quantity]) => {
          if (quantity > 0) {
            const product = PRODUCTS.find((p) => p.id === Number(itemId));
            return <CartItem data={product} quantity={quantity} key={itemId} />;
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div>
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
        </div>
      ) : (
        <h1>Your shopping cart is empty</h1>
      )}
    </div>
  );
};
