import React from "react";                                             // you have to import react in class component this will be your first step

class welcome extends React.Component {                               // here after class keyword write you class name like welcome

  render(){
    return(
      <>
        <h1> Hello Sameer</h1>
      </>
    )
  }
}

export default welcome;                                           // class Welcome extends React.Component → creates a React class component
                                                                  // React.component allow you to use state and lifecycle in class
                                                                  // render is must and must not be forget at all cost as it return jsx


