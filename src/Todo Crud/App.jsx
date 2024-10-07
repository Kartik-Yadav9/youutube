import React, { useState } from 'react'
import Input from './Input'
import List from './List'

function App() {

  let [todos, setTodos]= useState(['breakfast', 'lunch', 'dinner'])

  let [editTodos, setEditTodos]= useState({
     index: "",
     data: ""
  })

  

  //child to parent

  let addToDo=(value)=>{
    console.log(value);


   
    setTodos([...todos, value])
    console.log(todos);
    
  }




  //child to parent

  const  dltToDo=(value)=>{

    
    // console.log(index);
    // console.log("delete");
    // todos.slice(index,1);
    // console.log(todos);
    
    // setTodos([...todos])

    let filteredData= todos.filter((item)=> item !== value)
    console.log(filteredData);
    setTodos(filteredData)
    
  }







  //child to parent
  

  let editToDo=(index, data)=>{
   console.log(index, data);

    setEditTodos({
      index,                          //In ES6, if the object property name is the same as the variable name,
      data                            // you can use the shorthand syntax.
    })
  }




  let updateToDo=(index,data)=>{
    console.log(index,data);
    todos.splice(index,1,data)

    setTodos([...todos])
    setEditTodos({
      index:'',
      data:''
    })
    

  }

  return (
    <>
        <Input addToDo= {addToDo}  edittodos= {editTodos} updateToDo= {updateToDo} />
        <List todos={todos} dltToDo={dltToDo} edittodo= {editToDo} />
    </>
  )
}

export default App









// UUUUUSSSSEEEEffffffeeeecccttt hook in the Input component is triggered whenever the edittodos.data changes. In the context of your application, this change happens when you invoke the editToDo function from the List component and update the editTodos state in the App component.

// Here's a step-by-step explanation:

// Button Click in the List Component:
// When you click the "Edit" button (which you might want to add) in the List component, it calls the editToDo function passed down from the App component.

// Updating State in the App Component:
// The editToDo function in the App component updates the editTodos state with the index and data of the todo item to be edited.

// Effect Trigger in the Input Component:
// Since the Input component receives editTodos as a prop, the change in editTodos.data triggers the useEffect hook, updating the todo state with the new value.