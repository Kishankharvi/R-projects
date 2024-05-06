import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { removeFromCart, updateCartItemCount, addToCart } =
    useContext(ShopContext);
  const { id, productName, productImage, price } = props.data;
  return (
    <div>
      <div className="cartItem">
        <img src={productImage} />
        <div className="description">
          <p>
            <b>{productName}</b>
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
