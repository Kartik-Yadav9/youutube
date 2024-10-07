import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Navbars from './Navbar'
import { Provider } from 'react-redux'
import { store } from './store'

function RootLayout() {
  return (
    <>
        <Provider store={store}>

            <Navbars/>

            <main>

                
                <Outlet/>          {/* This is where the matched child route will be rendered */}

            </main>


        </Provider>
            
    </>
  )
}

export default RootLayout