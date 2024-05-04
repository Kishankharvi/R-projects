import React from "react";

export const CartItem = (props) => {
  return (
    <div>
      <div className="cartItem">
        <img src={productImage} />
        <div className="description">
          <p>
            <b>{productImage}</b>
          </p>
          <p>Price :${price}</p>
          <div className="countHandler">
            <button onClick={() => removeFromCart(id)}>-</button>
            <input
              value={CartItem[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />

            <button onClick={() => addToCart(id)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};
