
import { useState, useEffect } from "react";
import mockData from "../mockMenu.json"; 

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
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