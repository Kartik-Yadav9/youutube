import React, { useEffect, useState } from 'react'


export default function Input({addToDo, edittodos, updateToDo}) {
  

  

  let[error, setError]= useState(true)
 
  let [todo, setTodo]= useState("")

  const inputHandle=(e)=>{
    setTodo(e.target.value)  

    if (e.target.value.length > 0) {
      setError(false)
    }else{
      setError(true)
    }

  }

  const handleSubmit=(e)=>{
    e.preventDefault()

    

    if (todo.length > 0) {

      // addToDo(todo)
      // setError(false)
      // setTodo("")




      //for update


      if(edittodos.index!==''){
        updateToDo(edittodos.index,todo)
        // seterror(false)

      }
      else{
        setTodo(edittodos.data)
        addToDo(todo)
        // seterror(false)
      }

    }else{
      setError(true)
    }

  }







  useEffect(()=>{
    setTodo(edittodos.data)

  }, [edittodos.data])


  return (
    <>
      <form className="row g-3 mx-5" onSubmit={handleSubmit}>
  <div className="col-auto">
   
    <input type="text" value={todo} onChange={inputHandle} className="form-control-plaintext border-dark" id='todos' placeholder='todos' />
  </div>


  
  {error && <p className='text-danger'>Please write something</p>}                                 {/* This JSX code conditionally renders the error message based on the value of the error state.
                                                                                                   If error is true, indicating that the error message should be displayed, it renders the <p> element */}
  
  <div className="col-auto">
    <button type="submit" className="btn btn-primary">
      
      {
        edittodos.data ==="" ? "Add" : "Update"                                //edittodos is a state in the App component that keeps track of the item being edited. It contains both the index and the data of the item.
      }
      
      </button>
  </div>
</form>
    </>
  )
}
