
import { useDispatch } from "react-redux"; 
import { addItems } from "../../utils/cartSlice"; 

const ItemList = ({items}) =>{
  const dispatch = useDispatch();
  
  const handleAddItem = (item) => {
    dispatch(addItems(item)); 
  };

  return(
  <div>
    {items.map((item)=>(
      <div 
        key={item.card.info.id} 
        className="m-2 py-2 text-left flex justify-between border-gray-950 border-b-2 "
      >
        <div className="w-10/12 ">
          <div className="py-2 flex flex-col">
            <span className="font-semibold py-1">{item.card.info.name}</span>
            <span className="py-1">₹ {item.card.info.price/100}</span>
          </div>
          <p className="text-xs font-extralight pb-5">{item.card.info.description}</p>
        </div>
              
        <div className="relative w-28 h-28"> 
          {item.card.info.imageUrl ? (
            <img 
              src={item.card.info.imageUrl} 
              alt={item.card.info.name} 
              className="w-full h-full object-cover rounded-lg" 
            />
          ) : (
            <div className="w-full h-full bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 text-sm">No Image</div>
          )}
          
          <div 
            className="absolute top-0 right-0 p-1 bg-white shadow-lg rounded-lg text-black text-sm font-bold cursor-pointer"
            onClick={() => handleAddItem(item)} 
          >
            Add +
          </div>
        </div>
      </div>
    ))}
  </div>
 );
};

export default ItemList;






// // import { addItems, removeItems } from "../../utils/cartSlice";
// // import { CDN_URL } from "../../utils/constants";
// // import { useDispatch } from "react-redux";

// const ItemList = ({items}) =>{
//   // console.log("items:",items);
//   // const dispatch = useDispatch();
  
//   // const handleAddItem = (item) => {
//   //   //dispatch an action 
//   //   dispatch(addItems(item));
//   // };

//  return(
//   <div>
//     {items.map((item)=>(
//       <div key={item.card.info.id} className="m-2 py-2 text-left flex justify-between  border-gray-950 border-b-2 ">
//           <div className="w-10/12 ">
//               <div className="py-2 flex flex-col">
//                   <span className="font-semibold py-1">{item.card.info.name}</span>
//                   <span className="py-1">₹ {item.card.info.price/100}</span>
//               </div>
//               <p className="text-xs font-extralight pb-5">{item.card.info.description}</p>
//           </div>
             
//           <div className="relative w-28 h-28"> 
//               {item.card.info.imageUrl ? (
//                 <img 
//                   src={item.card.info.imageUrl} 
//                   alt={item.card.info.name} 
//                   className="w-full h-full object-cover rounded-lg" 
//                 />
//               ) : (
//                 <div className="w-full h-full bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 text-sm">No Image</div>
//               )}
//             {/* Add button logic (adjust tailwind classes if needed) */}
//             <div className="absolute top-0 right-0 p-1 bg-white shadow-lg rounded-lg text-green-600 text-sm font-bold cursor-pointer">
//               Add +
//             </div>
//           </div>
//       </div>
//     ))}
//   </div>
//  );
// };

// export default ItemList;


