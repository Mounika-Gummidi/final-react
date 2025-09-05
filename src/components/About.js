// import User from "./User";
// import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
  constructor(props){
    super(props);
    console.log("parent constructor");
  }
  componentDidMount(){
    console.log("parent componentDidMount");
  }
  render(){
    console.log("parent render");
    return(
      <div className="text-white h-96 flex justify-center">
        
        <div className="w-6/12 m-auto ">
            <h1 className="flex font-bold text-2xl pb-7">About Us</h1>
            <p>Welcome to <span className="text-yellow-400">FoodNest</span> – where great food meets convenience! We're here to bring you delicious dishes from your favorite local spots, all in just a few taps. Our mission is simple: to make food delivery easy, fast, and enjoyable, so you can focus on savoring every bite. Whether it's comfort food or something new, we've got it all. Dive in and discover something tasty with us!</p>
        </div>
        




        {/* <h2>This is inside About Component</h2> */
        /* <User name={"Mounika(function)"}/>
        <UserClass  name={"first "} location={"Amalapuram(class)"}/>
        <UserClass  name={"second "} location={"Amalapuram(class)"}/>
        <UserClass  name={"third "} location={"Amalapuram(class)"}/> */}
       
      </div>
    );
  }
}





  //  -parent constructor
  //  -parent render

  //     -first constructor
  //     -first render
      
  //     -second constructor
  //     -second render

  //     -third constructor
  //     -third render

  //     -first componentDidMount
  //     -second componentDidMount
  //     -thrid componentDidMount
  
  //   -parent componentDidMount

export default About;