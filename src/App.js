import { useState } from "react";
import './style.css'


function App() {

let [counter, setcounter]= useState(0)


  let but1=()=>{
    setcounter(counter+1)
  }


let but2=()=>{
 if(counter<=0){
  counter=0
 }
 else{
  setcounter(counter-1)
 }
}

  return (
   <div className="app">
      <div className="counter">

        <h2>Counter Value:  {counter}</h2>

        <button className="count1" onClick={but1}id="but1">Increase</button>
        <button className="count2" onClick={but2}id="but2">Decrease</button>
        </div>
    </div>
 
  )
}

export default App;
