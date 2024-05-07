import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Product } from "./product";
import { RestaurantContext } from "../../context/ResturantContext";
import "./Shop.css";

export const Shop = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  // const { setResturants } = useContext(RestaurantContext);

  console.log("shopv opened");
  useEffect(() => {
    getRestaurants();
  }, []);

  // async function getRestaurant to fetch API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );
      // if response is not ok then throw new Error
      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      } else {
        const json = await response.json();

        // initialize checkJsonData() function to check Swiggy Restaurant data
        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
            // initialize checkData for Swiggy Restaurant data
            let checkData =
              json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;

            // if checkData is not undefined then return it
            if (checkData !== undefined) {
              return checkData;
            }
          }
        }

        // call the checkJsonData() function which return Swiggy Restaurant data
        const resData = await checkJsonData(json);
        // setResturants(resData);
        setAllRestaurants(resData);
      }
    } catch (error) {
      console.error(error); // show error in console
    }
  }

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
