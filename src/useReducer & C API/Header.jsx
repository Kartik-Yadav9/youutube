import React from 'react'
import { useContext } from 'react'
import { todosContext } from './Todocontext'

function Header() {

    let {todo}= useContext(todosContext)
   

  return (
    <div>TODOS: {todo.length} </div>
  )
}

export default Header