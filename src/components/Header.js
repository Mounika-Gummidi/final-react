import {LOGO_URL} from  "../../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import {useSelector} from "react-redux";

const Header = () =>{
  const [loginbutton, setLoginbutton] = useState("Login");

  const onlineStatus = useOnlineStatus();

  // subcribing to the store using selector
  const cartItems = useSelector((store)=>store.cart.items);
 
  // if there is no dependency array in useEffect then the callback function will be called after "EVERY" render { useEffect(()=>{}) }
  // if we kept dependency array in useEffect then.. callBack function will be called "ONLY ONCE(i.e, initially)"after componnet render
  // if  useEffect( ()=>{} , [loginbutton]) this callback function will be called "initially" and aslo whenever the "loginbutton" UPDATES
  return (
    <div>
        <div className="flex justify-between shadow-md mb-3 bg-gray-800">
          <div className="w-32">
            <img className="logo h-24 w-96" src={LOGO_URL}/>
          </div>

          <div className="flex items-center">
            <ul className="flex p-4 m-4 ">
              <li className="px-4 text-white font-bold">OnlineStatus: {onlineStatus? "✅":"🔴"}</li>
              <li className="px-4"><Link className="text-white font-bold"to="/">Home</Link></li>
              <li className="px-4"><Link className="text-white font-bold"to="/about">About Us</Link></li>
              <li className="px-4"><Link className="text-white font-bold"to="/contact">Contact Us</Link></li>
              <li className="px-4"><Link className="text-white font-bold"to="/grocery">Grocery</Link></li>
              <li className="px-4 text-white font-bold"><Link className="text-white font-bold"to="/cart">Cart({cartItems.length} items)</Link></li>
              <button className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-3xl " 
                onClick={()=>{
                  loginbutton === "Login"? 
                    setLoginbutton("Logout") : setLoginbutton("Login")
                  }}>
                    {loginbutton}</button>
            </ul>
          </div>
          </div>
    </div>
    
  );
};

export default Header;