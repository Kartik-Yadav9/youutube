import React, { useState } from 'react'
import Input from './Input'
import Table from './Table'


function AxiosApp() {

    let[correct, setCorrect]=useState(true)

  return (
    <>
    <button onClick={()=>setCorrect(!correct)}>{correct ? 'Show Table' : 'Show Input'}</button>
        {
            correct ? <Input/> : <Table/>
        }
    </>
  )
}

export default AxiosApp