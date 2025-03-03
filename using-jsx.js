import React from "react";
import ReactDOM from "react-dom/client";

//  Jsx - is not a HTML inside javascript
//  Jsx- contain HTML or XML like syntax

// here the javascript engine will not understand this jsx code.
//  JSX(transpiled/ converted before it reaches the JS)- PARCEL - Babel(library)and
// it is already present in node-modules..

// JSX code ni  =>bable(converts into) => React.createElement--JS(object) =>  HTMLElement(render)
// Bable is a javascript complier


// ReactElement
const heading = (
  <h1 id="heading" tabIndex="5">
    Hello Mounika from Jsx ReactElement!😊
  </h1>
);

// ReactComponent
const Title = () => (
   <h1 id="heading" tabIndex="5">
     Hello Mounika from Jsx from functional component!😁
   </h1>
 ); 


// compoment composition (<Title/>)= writing a compoment inside other component
// React element in functonal component or in any other ReactElement we will be using "{}"
// we can also inject JS Code in JSX using "{}" - <h1>{number}</h1> - {10+20}
// JSX - avoid cross site scripting attacks.

const number = 1234;
const HeadingComponent = () => (
     <div id="container">
      {number}
      {heading}
      <Title/>  
      <h1 className="comp1">hello mounika from compoment composition!😍</h1>
     </div>
      
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

/* "if you want to write in multiple lines then wrap it.. using () then only bable understand"

   const jsxHeading = ( <h1 id="heading" >
   Hello Mounika from Jsx!
   </h1>); 

*/
