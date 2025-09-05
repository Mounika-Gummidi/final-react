import {CDN_URL} from "../../utils/constants";

const RestaurantCard = (props) =>{
  // console.log("props: ",props);
  const  {resData}  = props; 
  
  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData.info; 
  return(
    <div className="rounded-xl  m-3 ml-4 mt-4 pb-4 w-[224px] h-auto shadow-2xl bg-[#1e293b] transition-transform hover:scale-105 hover:shadow-xl">
      <div className=" w-[150px] ml-9 pt-4">
          <img className="rounded-lg w-[160px]"src={CDN_URL+
            cloudinaryImageId
          }/> 
      </div>

      <h3 className="font-bold py-3 text-center text-white">{name} </h3>
      <h4 className="flex font-sans justify-center px-7 text-white">{cuisines.join(", ")}</h4>
      <h4 className="font-sans text-center text-white">{avgRating} stars</h4>
      <h4 className="font-sans text-center text-orange-400">{costForTwo}</h4>
      <h4 className="font-sans text-center text-white">{sla.deliveryTime} min's</h4>
    </div>
  );
};

// higher order functions
 export const WithPromotedLabel = (RestaurantCard) => {
  return(props) => {
    return(
      <div>
        <label className="bg-white text-black px-2  my-3 absolute rounded-sm">Promoted</label>
        <RestaurantCard {...props} /> 
      </div>
    );
  };
};
export default RestaurantCard;