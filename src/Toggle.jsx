import React, { useState } from 'react'
import Input from './Input'
import Table from './Table'

function Toggle() {

    let [setToggle, setgetToggle]= useState(true)

    let togg=()=>{
        setgetToggle(!setToggle)
    }

  return (
    <>
    <button onClick={togg}>{setToggle ? 'SHOW TABLE' : 'SHOW INPUT'}</button>
    {setToggle ?<Input/> : <Table/>}
    </>
    
    
  )
}

export default Toggle