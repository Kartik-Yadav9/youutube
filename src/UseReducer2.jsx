
import React, { useReducer } from 'react'


//GLOBAL

let reducerComponent=(state, action)=>{
    console.log(state);
    console.log(action);

    if (action.type==='increment') {
        return state+1
    }

    else if (action.type==='decrement') {
        return state-1
    }


    return state                                              //important
}




function UseReducer2() {
  
   let[counter, dispatch]= useReducer(reducerComponent, 10)

    let increment=()=>{

        dispatch({
            type :"increment",
            payload: 1
        })

        // return setCounter(counter+1)
    }

    let decrement=()=>{

        dispatch({
            type :"decrement",
            payload: 1
        })

    //    return setCounter(counter-1)
    }



  return (
    <>
        <button style={{marginBottom:'12px'}} onClick={increment}>Increase</button>
        <p>Count : {counter}</p>
        <button onClick={decrement}>Decrease</button>
    </>
  )
}

export default UseReducer2