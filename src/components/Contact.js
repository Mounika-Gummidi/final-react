const Contact = ()=>{
return(
  <div className="h-svh text-white ">
    <h1 className="text-center font-bold text-2xl">Contact<span className="text-yellow-500"> Us</span></h1>
    <div className="w-6/12 m-auto bg-gray-700 my-4 p-5 pr-4">

    <div className="flex ">
        <div className="mb-2 mr-10">
            <label className="">First Name</label><br></br>
            <input className="px-11 py-2 my-2" type="text" placeholder=" Enter FirstName"/>
        </div>
        <div className="mb-2">
            <label className="">Last Name</label><br></br>
            <input className="px-11 py-2 my-2" type="text" placeholder=" Enter Last Name"/>
        </div>
    </div>
    
    <div className="flex ">
          <div className="mb-2 mr-10">
            <label>Phone Number</label><br></br>
            <input className="px-11 py-2 my-2"  type="text" placeholder="Phone Number"/>
         </div>
          <div className="mb-2">
            <label>Email Address</label><br></br>
            <input className="px-11 py-2 my-2"  type="text" placeholder="Email Address"/>
          </div>
    </div>

      <div className="mb-2">
            <label>Message</label><br></br>
            <input className="px-16 py-14 my-2"  type="text" placeholder="Message Here"/>
      </div>
          <button className="bg-blue-500 px-2 py-1">Send Message</button>
    </div>
    
  </div>
);
};
export default Contact;

