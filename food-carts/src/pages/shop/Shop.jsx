import React, { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "./product";
import "./Shop.css";

export const Shop = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await axios.get(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = response.data;
      const resData = checkJsonData(jsonData);
      setAllRestaurants(resData);
    } catch (error) {
      console.error(error);
    }
  }

  function checkJsonData(jsonData) {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      let checkData =
        jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      if (checkData !== undefined) {
        return checkData;
      }
    }
    return [];
  }

  return (
    <div className="body-container">
      <div className="shopTitle">
        <h3>Order your food here..</h3>
      </div>

      <div className="restaurant-list">
        {allRestaurants.map((restaurant, id) => (
          <Product {...restaurant?.info} key={id} />
        ))}
      </div>
    </div>
  );
};
