// function app(){                                                                     // conditional rendering without ternary operator 

//   const islogged = true;

//   if(islogged){
//     return <h1> welcome </h1>
//   }else{
//     return <h1>error in login</h1>
//   }
// }

// export default app;


function App(){                                                                                         // conditional rendering using ternary operator
  const islogged = true;
  return(
    <>
      {islogged?<h1>welcome </h1>:<h1>error</h1>}
    </>
  )
}

export default App;