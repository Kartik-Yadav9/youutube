import React, {useReducer} from 'react';



const ACTIONS= {
    increment:'increment',
    decrement: 'decrement'
}

function Dynamic() {

  function reducer(state, action){
    switch(action.type){
      case ACTIONS.increment:                 //dynamic
      return{count: state.count +1}

      case ACTIONS.decrement:                                 //dynamic
      return{count: state.count-1}
    }                                          //count is one of the properties (or keys) of that object.
  }

  function increment(){
    dispatch({type: ACTIONS.increment})
  }

  function decrement(){
    dispatch({type: ACTIONS.decrement})
  }

const[state, dispatch]= useReducer(reducer, {count:0})

  return (
    <>
    <button onClick={decrement}>decrease</button>
    <span>{state.count}</span>
    <button onClick={increment}>Increase</button>
    </>
  )
}

export default Dynamic;
