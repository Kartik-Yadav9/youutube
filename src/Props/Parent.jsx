import React from 'react'
import Child from './Child'

function Parent() {

    let age= 24

  return (
    <>
    <p>Parent</p>
    <Child fname="Kartik" lname= "Yadav" age={age}/>
    </>

  )
}

export default Parent