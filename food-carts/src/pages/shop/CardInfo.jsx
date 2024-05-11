import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useLocation } from "react-router-dom";
import "./Cardinfo.css";
export const CardInfo = () => {
  const { addToCart } = useContext(ShopContext);
  const { id, name, areaName, costForTwo, avgRatingString, cloudinaryImageId } =
    useLocation().state;

  const handleAddToCart = () => {
    addToCart({
      name,
      areaName,
      costForTwo,
      avgRatingString,
      cloudinaryImageId,
    });
  };

  return (
    <div className="restaurant-menu">
      <div className="left">
        <img
          className="image11"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            cloudinaryImageId
          }
          alt={name}
        />
      </div>
      <div className="right">
        <h3>{name}</h3>
        <h5>{areaName}</h5>
        <span>{avgRatingString}</span>
        <h4>${costForTwo}</h4>
        <button className="addToCartBttn" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
