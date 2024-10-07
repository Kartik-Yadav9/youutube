import React, { useCallback, useState} from 'react'
import Child from './Child';

function UseCallback() {

    let[increase, setIncrease]= useState(0)
    let[add, setAdd]= useState(0)

    const learning= useCallback(()=>{
       //some work
    }, [add])

  return (
    <>
    <h3>Counter: {increase} </h3>
    <button onClick={()=>setIncrease(increase+1)}>Increment</button>
    
    <h4>Addition: {add}</h4>
    <button onClick={()=>setAdd(add+5)}>Add</button>

    <Child learning={learning} add={add}/>
          
    
</>
  )
}

export default UseCallback