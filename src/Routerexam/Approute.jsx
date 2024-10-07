import React from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import About from './About'




function Approute() {
  return (
    <>
    <NavLink to ='/'>Home</NavLink>
    <NavLink to ='/about'>about</NavLink>
    <NavLink to ='/blog'>Blog</NavLink>

    
        
    <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/home' element= {<Home/>}/>
        <Route path='/about' element= {<About/>}/>
        <Route path='/blog' element= {<Blog/>}/>

    </Routes>
    </>
  )
}

export default Approute