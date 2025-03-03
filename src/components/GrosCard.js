import {CDN_URL} from "../../utils/constants";

const GrosCard = (props) =>{
  // console.log("props: ",props);
  const  {resData}  = props; 
  
  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData; 
  return(
    <div className="m-3 ml-4 p-4 w-[280px] h-auto bg-gray-700 ">
      <div className="w-[235px]">
          <img className="rounded-lg"src={CDN_URL+
            cloudinaryImageId
          }/>
      </div>

      <h3 className="font-bold py-3 text-center text-white">{name} </h3>
      <h4 className="flex font-sans justify-center text-white">{cuisines.join(", ")}</h4>
      <h4 className="font-sans text-center text-white">{avgRating} stars</h4>
      <h4 className="font-sans text-center text-white">{costForTwo}</h4>
      <h4 className="font-sans text-center text-white">{sla.deliveryTime} min's</h4>
    </div>
  );
};

// higher order functions
 export const WithPromotedLabel = (GrosCard) => {
  return(props) => {
    return(
      <div>
        <label className="bg-white text-black px-2  my-3 absolute rounded-sm">Promoted</label>
        <GrosCard {...props} />
      </div>
    );
  };
};
export default GrosCard;