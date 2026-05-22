import Child from "./component/Children"

function App(){
  const name = "sameer";

  return(
    <>
      <Child username={name}/>                                   {/*here we can give username any name but the name has to exact same */}
    </>
  )
}

export default App;