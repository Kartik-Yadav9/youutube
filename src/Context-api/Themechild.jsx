import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import ThemeGrandChild from './ThemeGrandChild'

function Themechild() {

    let last= useContext(ThemeContext)

   

  return (
    <div>
        {last.lastt}
        <ThemeGrandChild/>
  
    </div>


  )
}

export default Themechild