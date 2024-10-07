import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Themechild from "./Themechild";

function ThemeValue(){

    const[state, setState]= useState("Kartik")
   

    const states= {
        lastt :state,
        updateLast: setState
    }

    

    return(
       <ThemeContext.Provider value={states}>
            <h1>Mr</h1>
          
            <Themechild/>
       </ThemeContext.Provider>

    )
}

export default ThemeValue