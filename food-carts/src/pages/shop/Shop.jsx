import React, { useContext } from "react";

import { Product } from "./product";
import { FetchContext } from "../../context/Fetchdata";
import "./Shop.css";

export const Shop = () => {
  const { allRestaurants } = useContext(FetchContext);
  return (
    <div className="body-container">
      <div className="shopTitle">
        <h1>Food shop</h1>
      </div>

      <div className="restaurant-list">
        {allRestaurants.map((restaurant) => (
          <Product {...restaurant?.info} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
};
