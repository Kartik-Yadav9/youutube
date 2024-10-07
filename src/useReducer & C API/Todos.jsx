

import React, { useReducer } from 'react'
import TodoList from './TodoList';
import Header from './Header';
import { todosContext } from './Todocontext';



function Todos() {

  let initialState= [];

  let reducer=(state, action)=>{
    switch(action.type){
      case 'ADD_TASK':
        return[...state,{

          id: state.length + 1,
          name: action.payload

        }]

      case 'DELETE_TASK':
        return state.filter(i=> i.id !== action.payload)


      case'RESET_TASK':
        return action.payload

      default:
        return state
    }
  }


// function init(initialState){
// //take initialstate as an argument

//   return initialState
// }
  

let[todo, dispatch]= useReducer(reducer, initialState, )//init, third parsmeter

function inputHandle(e){

  dispatch({
    type: 'ADD_TASK',
    payload: e.target.value
  })
  
}


 const dltHandle=(id)=>{

  dispatch({
    type: 'DELETE_TASK',
    payload: id,
  })
}


function resetHandle(){
 
  dispatch({
    type: 'RESET_TASK',
    payload: initialState
  })
}

const data= {
  todo: todo,
  dltHandle
}

  return (

    <todosContext.Provider value={data}>

        <h2><Header/></h2>
        <input type='text'
        onBlur={inputHandle} />
        <button onClick={resetHandle}>Reset</button>
        
        <TodoList />

    </todosContext.Provider>
  )
}

export default  Todos




























































// import React, { useReducer } from 'react'

// function Todos() {

// let initialState= []


// function reducer(state, action){

//   switch(action.type){

//     case"ADD_TASK":
//     return(
//     [...state,{
      
//       name: action.payload}])

//     default :
//     return state
//   }
        
// }

// const[todos, dispatch]= useReducer(reducer, initialState)

// return (
//     <>
//         <h2>TODO List: {todos.length}</h2>

//         <p>Add new task</p>
//         <input type='text' onBlur={(e) => dispatch({type: 'ADD_TASK', payload: e.target.value})}/>

//         {todos.map((item,index)=>{
//         return <li key={index}>{item.name}</li>
//         })}
//     </>
//   )
// }

// export default Todos

