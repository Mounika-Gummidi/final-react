import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import {RestaurantCategory} from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    
    const {resId} = useParams();
    //custom hooks to optimize code
    const resInfo = useRestaurantMenu(resId);
    
    // controlled components
    const [showIndex, setShowIndex] = useState(null);

    // This path works for the provided mock JSON structure (index [2] for info)
    const {name,cuisines,costForTwoMessage} = resInfo?.cards?.[2]?.card?.card?.info || {}; 
    
    // This path works for the provided mock JSON structure (index [4] for menu)
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>{ return c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"}
    ) || [];
    // console.log("categories:" ,categories); // You can uncomment this to verify the categories array


    return (resInfo === null) ? (<Shimmer/>) : (
        <div className="text-white text-center ">
            
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines?.join(", ")} - {costForTwoMessage}</h3>

            {categories.map((category,index) => (
                <RestaurantCategory 
                    key={category?.card?.card?.id} 
                    data={category?.card?.card}
                    showItems={ index === showIndex? true : false}
                    setShowIndex={()=>setShowIndex(showIndex===index? null : index)}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;
