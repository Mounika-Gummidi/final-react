import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

const Grocery = lazy(()=>import("./components/Grocery"));
//chunking
//code spliting
//dyanamic bundling
//LAZY LOADING
//pn demand loading


const AppLayout = () =>{
  return (
    // provider takes app store as props
    <Provider store={appStore}>
      <div className="bg-gray-900">
        <Header /> 
        <Outlet />
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    children: [
      {
        path:"/",
        element: <Body />,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/contact",
        element: <Contact/>,
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
        // must use FALLBACK don't forget
      },
      {
        path:"/cart",
        element: <Cart />,
      },
      {
        path:"/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error/>,
  },
 
]);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);