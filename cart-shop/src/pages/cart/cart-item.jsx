import React, { useContext } from "react";
import { imageUrl } from "../../constant";
import { ShopContext } from "../../context/shop-context";

// CartItem.jsx
export const CartItem = ({ data, quantity }) => {
  const { removeFromCart, updateCartItemCount, addToCart } =
    useContext(ShopContext);
  const { id, cloudinaryImageId, price, name } = data;

  return (
    <div>
      <div className="cartItem">
        <img src={imageUrl + cloudinaryImageId} />
        <div className="description">
          <p>
            <b>{name}</b>
          </p>
          <p>Price: ${price}</p>
          <div className="countHandler">
            <button onClick={() => removeFromCart(id)}>-</button>
            <input
              value={quantity}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button onClick={() => addToCart(id)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};
