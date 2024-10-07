import React from 'react'

function Child(props) {
    console.log(props);
  return (
    <>
    <p>Child</p>
    <p>First-name: {props.fname}</p>
    <p>Lat-name:  {props.lname}</p>
    <p>Age: {props.age}</p>
    </>
    
  )
}

export default Child