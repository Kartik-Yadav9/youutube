import React from 'react'
import UserContextProvider from './UserContextProvider'
import  Login  from '../api components/Login'
import  Profile   from '../api components/Profile'
 import '../Context/Apps.css'

function Apps(){
  return (
    <div className='appsStyle'>
      <UserContextProvider>
          <h1>Hi, its Kartikkkkkkkkkkkkkkkk</h1>
          <Login/>
          <Profile/>
      </UserContextProvider>
    </div>
  )
}

export default Apps
