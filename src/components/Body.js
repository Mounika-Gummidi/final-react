import RestaurantCard,{WithPromotedLabel} from "./RestaurantCard";
// import reslist from "../utils/mockdata"; 
// and also we removed mockdata file
import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () =>{ 
   const [resList1, setReslist1] = useState([]);
  // here we use this state variable "FilteredRestuarants" to keep track of filteredRestuarants
  // but when we are using "filter" function we need to use the "resList1" because it contains the data of complete restaurants..
  // while the "filteredRestuarants" contains only the filteredRestuarants
  // by doing this we are not modifying our "resList1" anymore but only when we are fetching...
   const [FilteredRestuarants , setfilteredRestuarants] = useState([]);

   const [searchText , setSearchText] =useState("");
  
   const PromoteCard = WithPromotedLabel(RestaurantCard);

   console.log("Body Rendered");
   useEffect(()=>{
      fetchData();
   } , []);
   
   const fetchData = async () => {
    const originalUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.461421&lng=78.3346205&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  
    const proxyUrl = "https://corsproxy.io/?" + encodeURIComponent(originalUrl);
  
    const data = await fetch(proxyUrl);
    const json = await data.json();
  
    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setReslist1(restaurants);
    setFilteredRestuarants(restaurants);
  }

    console.log("resList1: ",resList1);
    

    //custom hooks
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
      return(
        <h3>
          Looks like you are Offline!! Please check Your internet connection
        </h3>
      );
    

      if (!resList1 || resList1.length === 0) {
        return <Shimmer />;
      }
    return (
    
    <div className="body-container">

    <div className="flex items-center">
      <div className="search m-4 p-4 ">

          <input type="text" className="px-4 py-2 border border-solid border-black rounded-md" placeholder="Search Restuarants Here" 
              value={searchText} 
              onChange={ (e) => {
                setSearchText(e.target.value);
                }}/>

          <button className="px-3 py-2 ml-2 rounded-md bg-orange-500"
            onClick={()=>{
             const filteredRestuarant = resList1.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRestuarants(filteredRestuarant);

          }}>Search</button>
        </div>

        <div className="">
          <button className="bg-yellow-400 rounded-lg px-4 py-2" 
                  onClick = { () => {
                    const filteredList = resList1.filter(
                      (res) => res.info.avgRating>4.3
                    );
                    // setReslist1(filteredList);
                    setfilteredRestuarants(filteredList)
                  }}>

          Top Rated Restuarants</button>
        </div>
    </div>
    {/* key={Restuarant.info.id} */}
      <div className="flex flex-wrap ">
        {FilteredRestuarants.map((Restuarant)=>(
          <Link className="link" key={Restuarant.info.id} to={"/restaurant/"+Restuarant.info.id}>
              {Restuarant.info.promoted ? 
              <PromoteCard resData={Restuarant}/> :
              <RestaurantCard resData={Restuarant}/>}
          </Link>
            
        ))}
      </div>
    </div>
  );
};

export default Body;