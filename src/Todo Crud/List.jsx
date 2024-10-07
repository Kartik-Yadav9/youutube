import React from 'react'

function List({todos, dltToDo, edittodo}) {
  
  
  return (
    <>
      <ul className="list-group mx-5 my-5">

        {

          todos.length > 0 
          
          ? 
          
          todos.map((value,index)=>{
            
          
            return <li className='d-flex mb-2 justify-content-between' key={index}>

                      <div>
                        {value}
                      </div>
                      
                      <div>


                        {/* arrow function to take control of button */}

                        <button className='btn btn-danger' onClick={()=>dltToDo(value)}>Delete</button>

                        <button className='btn btn-info mx-2' onClick={()=>edittodo(index, value)} >Update</button>
                      </div>

                   </li> 
                   
          })

          :

          <li>no todos</li>
        }

      </ul>
    </>
  )
}

export default List