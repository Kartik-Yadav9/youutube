import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'


function ThemeGrandChild() {

    let {updateLast}= useContext(ThemeContext)
    // console.log(states);

  return (
    <div>
        <p>grandchild(updating from here)</p>
        <button onClick={()=>updateLast("Kartik Singh Yadav")}>update name</button>
    </div>
  )
}

export default ThemeGrandChild