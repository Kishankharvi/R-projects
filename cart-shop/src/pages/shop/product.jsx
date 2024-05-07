import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
export const Product = ({
  cloudinaryImageId,
  name,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  const Navigate = useNavigate();

  function handleclick() {
    Navigate("/CardInfo", {
      state: {
        name,
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
      <img
        className="image11"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
          cloudinaryImageId
        }
        alt={name}
      />
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
      </span>
    </div>
  );
};
