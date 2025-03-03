import { addItems, removeItems } from "../../utils/cartSlice";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({items}) =>{
  // console.log("items:",items);
  const dispatch = useDispatch();
  
  const handleAddItem = (item) => {
    //dispatch an action 
    dispatch(addItems(item));
  };

 return(
  <div>
    {items.map((item)=>(
      <div key={item.card.info.id} className="m-2 py-2 text-left flex justify-between  border-gray-950 border-b-2 ">
          <div className="w-10/12 ">
              <div className="py-2 flex flex-col">
                  <span className="font-semibold py-1">{item.card.info.name}</span>
                  <span className="py-1">₹ {item.card.info.price/100}</span>
              </div>
              <p className="text-xs font-extralight pb-5">{item.card.info.description}</p>
          </div>
             
          <div className="w-2/12 pl-4 ">
            <div className="absolute">
                <button className="bg-slate-100 mx-3 shadow-lg my-20 text-black text-xs font-semibold px-3 py-1 rounded-lg"
                    onClick={() => handleAddItem(item)}>Add +</button>
            </div>
                <img src={CDN_URL + item.card.info.imageId} className="w-24 h-20"/>
          </div>
      </div>
    ))}
  </div>
 );
};

export default ItemList;