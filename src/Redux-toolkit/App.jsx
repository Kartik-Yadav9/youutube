import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Cart from './Cart'
import RootLayout from './RootLayout'

function App() {



    const router= createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<RootLayout/>} >

            {/* default route  dashboard*/}
            <Route index element={<Dashboard/>} />   
            <Route path='/cart' element={<Cart/>}/>

        </Route>
    ))

  return (
    
   <>
    <RouterProvider router={router}/>
   </>
  )
}

export default App














