import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Dashboard from './Dashboard';
import Cart from './Cart';
import RootLayout from './RootLayout';

function AppRedux() {

  const router= createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<RootLayout/>} >
      <Route index element={<Dashboard/>}/>
      <Route path='/cart' element= {<Cart/>}/>
    </Route>

  )) 

  return (

    <div>
      <RouterProvider router={router}/>
    </div>
  

    // <Routes>
    //     <Route path='/' Component={Product}/>
    //     <Route path='/dashboard' Component={Dashboard}/>
    //     <Route path='/cart' element={<Cart/>}/>
    // </Routes>
  )
}

export default AppRedux