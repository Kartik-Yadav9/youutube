import React, {useReducer} from 'react';
import './App.css';


function App() {

  function reducer(state, action){           //action is object describing what to do with the state
    switch(action.type){
      case 'increment':
      return{count: state.count +1}

      case'decrement':
      return{count: state.count-1}
    }                                          //count is one of the properties (or keys) of that object.
  }

  function increment(){
    dispatch({type: 'increment'})
  }

  function decrement(){
    dispatch({type: 'decrement'})
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

export default App;
