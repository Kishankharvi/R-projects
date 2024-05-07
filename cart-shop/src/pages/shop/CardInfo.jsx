import React from "react";

import { useLocation } from "react-router-dom";

import "../../App.css";
export const CardInfo = () => {
  const location = useLocation();
  const {
    name,
    areaName,
    sla,
    costForTwo,
    avgRatingString,
    cloudinaryImageId,
  } = location.state;

  // call useParams and get value of restaurant id using object destructuring

  // const { restaurants } = useContext(RestaurantContext);

  return (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="image11"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            cloudinaryImageId
          }
          alt={name}
        />
      </div>
    </div>
  );
};
