import React, { useState, useCallback, useEffect } from 'react'
import './style.css'


function Pswdgenerator() {

    const[length, setlength]= useState(8)
    const[numberAllowed, setNumberAllowed]= useState(true)
    const[charAllowed, setcharAllowed]= useState(true)
    const[password, setPassword]= useState("")




    const passwordGenerator= useCallback( ()=>{
    
        let pass= ""
        let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numberAllowed){str += "0123456789"}
        if(charAllowed) {str += "!@#$%^&*-"}

        //how many time loop works

        for(let i=1; i<=length; i++ ){
          let char= Math.floor(Math.random() * str.length +1)             //1 is added so that the value is not zero
          pass += str.charAt(char)
            //pswd making
        }

        setPassword(pass)



    }
        ,
        [length, numberAllowed, charAllowed])

        useEffect(()=>{
          passwordGenerator()
        },[length, numberAllowed, charAllowed])

    
  return (
    <div className='pswdbox'>
      <div className='pswdheading'>
        <div className='pswd-tile'> Password Generator</div> 
        <input type='text' 
          placeholder='Password' 
          className='pswdInput'
          value={password}
          readOnly
        />
          <button className='pswdButton'>Copy</button>
          <input type='range'
            min={8}
            max={100}
            value={length}
            onChange={(e)=>setlength(e.target.value)}  
          />
         
          
          <label>Length : {length}</label>

          <input type='checkbox' 
          defaultChecked={numberAllowed}
          onChange={()=>{
            setNumberAllowed((prevValue)=>(!prevValue))
          }}
          />
          <label>Numbers</label>

          <input type='checkbox'
           defaultChecked={charAllowed}
           onChange={()=>{
             setcharAllowed((prevValue)=>(!prevValue))
           }}/>
          <label>Characters</label>
      </div>

    </div>
  )
}

export default Pswdgenerator