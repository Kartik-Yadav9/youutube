import React from 'react'
import { useContext } from 'react'

import { todosContext } from './Todocontext'

function TodoList() {

    let {todo, dltHandle} = useContext(todosContext) 

  return (
    <>
           {
      todo.map((item )=>(
        <li  key={item.id}>{item.name}
        
        <button onClick={()=>dltHandle(item.id)}>Delete</button>
        </li>
      ))
     } 
    </>
  )
}

export default TodoList