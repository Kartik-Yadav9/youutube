import React, { useState } from 'react'
import { useCounter } from './UseCounter'

function Counter() {

   let{count, increment, decrement}= useCounter()
   
  return (
    <>
    <p style={{display: "block"}}>Counter: {count}</p>

    <button onClick={increment} style={{marginRight: '20px'}}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default Counter