// File: src/utils/useRestaurantMenu.js

import { useState, useEffect } from "react";
// CORRECTION: Change path from two levels up (../../) to one level up (../)
// This path goes from src/utils/ up to src/ 
import mockData from "../mockMenu.json"; 

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    // Directly use the imported JSON object
    setResInfo(mockData);
  }, [resId]); 

  return resInfo;
};

export default useRestaurantMenu;


// import {useState,useEffect} from "react";
// import {MENU_LINK} from "../utils/constants";

// const useRestaurantMenu = (resId) => {
//  const [resInfo, setResInfo] = useState(null);

//  useEffect(() => {
//   fetchMenu();
//  },[]);

//  const fetchMenu = async () => {
//   const data = await fetch(MENU_LINK+resId);
//   const json = await data.json();
//   setResInfo(json.data);
//   console.log(json.data);
//  };
//  return resInfo;
// };

// export default useRestaurantMenu;