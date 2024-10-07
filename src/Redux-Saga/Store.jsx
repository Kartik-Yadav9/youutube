import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware= createSagaMiddleware()

const Store= configureStore({
    //config store and add middleware

    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run()


export default Store