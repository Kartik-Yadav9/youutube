import React, { useEffect, useState } from 'react'

function UseEffect() {

    let [counter, setCounter]= useState(0)

    let increment=()=>{
        return setCounter(counter+1)
    }

    let decrement=()=>{
       return setCounter(counter-1)
    }

    useEffect(()=>{
       
       let time= setInterval(() => {
            setCounter(counter+1)
        }, 1000);

        return ()=>clearInterval(time)

    }, [counter])


  return (
    <>
        <button style={{marginBottom:'12px'}} onClick={increment}>Increase</button>
        <p>Count : {counter}</p>
        <button onClick={decrement}>Decrease</button>
    </>
  )
}

export default UseEffect