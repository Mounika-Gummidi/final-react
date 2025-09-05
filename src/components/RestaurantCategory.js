import ItemList from "./ItemList";
import {useState} from "react";

export const RestaurantCategory = ({data,showItems,setShowIndex}) => {
  // console.log("data:",data);
//  const [showItems,setShowItems] = useState(false);

  const handleClick = () => {
    // showStatus === true ? setShowStatus(false):setShowStatus(true);
    // setShowItems(!showItems);
    setShowIndex();
  };

  return(
    <div>
      {/* accordian header */}
      <div className="bg-gray-800 w-6/12 mx-auto my-4 p-4 ">

        <div className="flex justify-between cursor-pointer " onClick={handleClick}>
          <span className="font-semibold">{data.title}({data.itemCards.length})</span>
          <span>⬇️</span>
        </div>
      
       {showItems && <ItemList items={data.itemCards}/>} 
      </div>
 
    </div>
  );
};
 
