


import React, { useRef } from 'react'

export default function UseRef() {

    let name= useRef()
    console.log(name);

    let clicked= ()=>{
       console.log( name.current.value);
    }



  return (   
    <>    
        <input type='text' ref={name}  placeholder='name'/>
        <button onClick={clicked} >Click</button>
    </>
  )
}













//import React, { useState, useEffect, useRef } from 'react';


// function Practice() {
//     const [count, setCount] = useState(0);
//     let intervalref= useRef()

//     useEffect(() => {
//        intervalref.current = setInterval(() => {
//         setCount(count => count + 1); // Update count every second
//       }, 1000);
  
//       // Cleanup the interval on component unmount
//       return () => {
//         clearInterval(intervalref.current)
        
        
//       };
//     }, []); // Empty dependency array ensures this effect runs once

//     let clearHand=()=>{
//         clearInterval(intervalref.current)
//         intervalref.current= null
//         console.log('clear interval');
//     }
  
//     return <div>Timer: {count}s   .
//                <button onClick={clearHand}>Clear</button>
//            </div>
// }

// export default Practice

