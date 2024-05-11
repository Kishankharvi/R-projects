import React, { useContext } from "react";

import { CartItem } from "./cart-item";
import { ShopContext } from "../../context/shop-context";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  const change = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div className="cart" onChange={change}>
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            // Add other properties as needed
          />
        ))}
      </div>
      {/* Render checkout section */}
    </div>
  );
};

export default Cart;
