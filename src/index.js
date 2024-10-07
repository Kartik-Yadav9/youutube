import React from 'react';
import ReactDOM from 'react-dom/client';

import Input from './Input';
import Table from './Table';
import Toggle from './Toggle';
import Inputform from './Inputform';
import Loginform from './Loginform';
import Contactform from './Contactform';
import Pswdgenerator from './Pswdgenerator';
import Child from './Props/Child';
import Parent from './Props/Parent';
import UserContextProvider from './Context/UserContextProvider';
import  Apps  from './Context/Apps';
import Products from './Redux-toolkit/Products';
import App from './Redux-toolkit/App';
import { Provider } from 'react-redux';
import { store } from './Redux-toolkit/store';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));


let persistor= persistStore(store)

root.render(
  <React.StrictMode>

    {/* <Loginform/> */}
   
    <Pswdgenerator/>

    
    {/* <Apps/> */}



    {/* <Provider store={store}>
      
      <PersistGate persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider> */}




{/* 
     <Child/>
     <Parent/> */}

    {/* <Toggle/> */}

  </React.StrictMode>
)

