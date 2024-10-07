import React from 'react'
import './style.css'
import Inputform from './Inputform'
import Contactform from './Contactform'

function Loginform() {
  return (
    <>
    <div className='complete-form'>
        <div className='login-form' >
            <h2>Login</h2>
            <Inputform />
            <br/>
            <br/>
            <Inputform/>
        </div>

        <div className='contact-form'>
            <Contactform/>
        </div>
    </div>
    </>
  )
}

export default Loginform