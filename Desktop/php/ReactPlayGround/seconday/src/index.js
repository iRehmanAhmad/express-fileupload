//import react from 'react'
import ReactDom from 'react-dom'
import "./index.css"
const hello = "Hello World";
const bye = "Bye World";
const setstyle = {
  color: "green"
}


const PrintHello = ()=>{
    return(   <>
      <h1 id="red">{hello}</h1>
      <PrintBye/>
    </>)
}
const PrintBye = ()=>{
    return (
      <>
        <h2 style={{backgroundColor: "blue", color:"yellow"}}>{bye}</h2>
        <PrintAgainHello/>
      </>
    )
}
const PrintAgainHello = ()=>{
return (
  <>
    <h1 style={setstyle}>Again Hello </h1>
  </>
)
}



ReactDom.render(<PrintHello/>, document.getElementById("root"));