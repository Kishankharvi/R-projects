import React, { useContext } from "react";
import "./cart.css";
import { ShopContext } from "../../context/shop-context";

// CartItem.jsx
export const CartItem = ({
  cloudinaryImageId,

  name,
  areaName,

  costForTwo,
  avgRatingString,
}) => {
  const { removeFromCart, updateCartItemCount, addToCart } =
    useContext(ShopContext);

  return (
    <div>
      <div className="cartItem">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            cloudinaryImageId
          }
        />
        <div className="description">
          <p>
            <b>{name}</b>
          </p>
          <p>Price: ${costForTwo}</p>
          <div className="countHandler">
            <button>-</button>

            <button
              onClick={() =>
                addToCart({
                  name,
                  areaName,
                  costForTwo,
                  avgRatingString,
                  cloudinaryImageId,
                })
              }
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
