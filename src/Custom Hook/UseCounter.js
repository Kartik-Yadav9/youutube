import { useState } from "react"


export let useCounter=()=>{
    let[count, setCount]= useState(0)

let increment=()=>{
    setCount(count+1)
}

let decrement=()=>{
    setCount(count-1)
}
}
