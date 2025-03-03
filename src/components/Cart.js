import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";


const Cart = () => {

const cartItems = useSelector((store)=>store.cart.items);
const dispatch = useDispatch();

const handleClearCart= () => {
  dispatch(clearCart())
}
return(
  <div className="text-white w-6/12 m-auto pb-6 h-lvh"> 
   <h1 className="text-white  font-extrabold text-3xl text-center m-5">Cart</h1> 
   
   {cartItems.length===0? 
      <h1 className="font-semibold mt-20 text-3xl flex justify-center">Your Cart is Empty. <span className="text-yellow-300"> Add items to Cart!!</span></h1> :
      <div>
          <button className="bg-white text-black rounded-xl font-bold py-1 px-2" onClick={handleClearCart}>Clear Cart</button>
          <div className="bg-gray-800">
            <ItemList items={cartItems}/>
          </div>
      </div>
      
   }
   
  </div>
);
};
export default Cart;