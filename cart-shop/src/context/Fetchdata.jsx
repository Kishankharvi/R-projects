import React, { createContext, useState, useEffect } from "react";

export const FetchContext = createContext();

export const FetchProvider = ({ children }) => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      } else {
        const json = await response.json();
        const resData = await checkJsonData(json);
        setAllRestaurants(resData);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function checkJsonData(jsonData) {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      let checkData =
        jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      if (checkData !== undefined) {
        return checkData;
      }
    }
  }

  return (
    <FetchContext.Provider value={{ allRestaurants }}>
      {children}
    </FetchContext.Provider>
  );
};
