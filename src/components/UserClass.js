import React from "react";
// class Based Components
class UserClass extends React.Component{

  constructor(props)
  {
    super(props);
    console.log(props);
    // state variable inside CBC
    this.state = {
      count: 0,
    };

    console.log(this.props.name +"child constructor");
  }

  componentDidMount(){
    console.log(this.props.name +"componentDidMount")
  }
  render(){
    console.log(this.props.name +"child render");

    const {name,location} = this.props;
    const {count} = this.state;
    return(
      <div  className="user-card">
        {/* this.state.count */}
        <h1>Count: {count}</h1>
        {/* // we are UPDATING our state variable */}
        <button onClick={()=>{
          this.setState({
            count: this.state.count+1,
          });

        }}>Count Increase</button>
        {/* this.props.name */}
        <h2>Name: {name}</h2>
        {/* this.props.location */}
        <h3>Location: {location}</h3>
        <h4>Contact: Mounika@august6</h4>
      </div>
    );
  }
}

export default UserClass;