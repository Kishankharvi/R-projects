import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { useLocation, useNavigate } from "react-router-dom";
import "./Cardinfo.css";

export const CardInfo = () => {
  const { addToCart } = useContext(ShopContext);
  const {
    id,
    name,
    areaName,
    costForTwo,
    avgRatingString,
    cloudinaryImageId,
    cuisines,
  } = useLocation().state;
  const Navigate = useNavigate();
  const [selectedCuisine, setSelectedCuisine] = useState("");

  const handleAddToCart = () => {
    const price = parseInt(costForTwo.replace(/\D/g, ""), 10);
    addToCart({
      name,
      areaName,
      price,
      avgRatingString,
      cloudinaryImageId,
      cuisine: selectedCuisine, // Add selected cuisine to cart item
    });
    useEffect(() => {
      const timer = setTimeout(() => {
        Navigate("/cart");
      }, 5000);

      return () => clearTimeout(timer);
    }, [Navigate]);
  };

  const handleSelectCuisine = (e) => {
    setSelectedCuisine(e.target.value);
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
        <div>
          <label htmlFor="cuisine">Select Cuisine:</label>
          <select id="cuisine" onChange={handleSelectCuisine}>
            <option value="">Select Cuisine</option>
            {cuisines.map((cuisine) => (
              <option key={cuisine} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
        </div>
        <span>{avgRatingString}</span>
        <h4>${costForTwo}</h4>
        <button className="addToCartBttn" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
