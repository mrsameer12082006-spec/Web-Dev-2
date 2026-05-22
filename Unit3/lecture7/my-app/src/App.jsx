import React from "react";

class Mounting extends React.Component{
  constructor(){
    super();
    console.log("constructor is called");

  }

  componentDidMount(){
    console.log("component is mounted")
  }

  render(){
    console.log("render is called")

    return(
      <>
        <h1> hello sameer</h1>
      </>
    )
  }
}

export default Mounting;


// what we will get first 
// 1. construct runs 
// 2. render runs
// 3. component did mount runs