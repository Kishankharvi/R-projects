import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { imageUrl } from "../../../../cart-shop/src/constant";
import "./product.css";
export const Product = ({
  cloudinaryImageId,
  cuisines,
  name,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  const Navigate = useNavigate();

  console.log(cloudinaryImageId);
  function handleclick() {
    Navigate("/cardinfo", {
      state: {
        name,
        cuisines,
        areaName,
        sla,
        costForTwo,
        avgRatingString,
        cloudinaryImageId,
      },
    });
  }
  console.log("ENter product component");
  return (
    <div className="card" onClick={handleclick}>
      <img src={imageUrl + cloudinaryImageId} />
      <h3>{name}</h3>

      <h5>{areaName}</h5>
      <span>
        <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "red" }
              : avgRatingString === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>

        <h4>•</h4>

        <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? "₹200 for two"}</h4>
        <h4>•</h4>
        <h4>{cuisines}</h4>
      </span>
    </div>
  );
};
