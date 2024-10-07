import React, { useMemo, useState } from 'react'

function UseMemo() {

    let[increase, setIncrease]= useState(0)

    let hook= useMemo(()=>{                   //using this it will load only once
        for(let i=0; i<=5; i++){
            console.log(i);
        }

        return null
    }, [])

  return (
    <>
        <h3>Counter: {increase} </h3>
        <button onClick={()=>setIncrease(increase+1)}>Increment</button>
        
        {hook}      
        
    </>
  )
}

export default UseMemo

//benfits in time and space, avoid unneseccary rendering of many components